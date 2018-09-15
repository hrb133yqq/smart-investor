from security_functions import *
import unittest
import sys
#from io import StringIO
from io import BytesIO as StringIO
from mock import patch
from mock import MagicMock
from mock import mock_open
'''
pre-request: pip install mock
'''

class TestSecurityFunctions(unittest.TestCase):
    @patch('sys.stdout', new_callable=StringIO)
    @patch('os.path.isfile')
    def test_download_file_exist(self, mock_isfile, mock_stdout):

        mock_isfile.return_value=True

        download('http://abc', 'headers', 'saveTo')

        assert mock_stdout.getvalue() == "Download ignored: saveTo\n"

    @patch('__builtin__.open', side_effect=mock_open())
    @patch('requests.get')
    @patch('sys.stdout', new_callable=StringIO)
    @patch('os.path.isfile')
    def test_download_succeed(self, mock_isfile, mock_stdout, mock_requests_get, mock_m):

        mock_isfile.return_value=False
        mock_response = MagicMock()
        mock_response.content = "test content"
        mock_response.status_code = requests.codes.ok
        mock_requests_get.return_value = mock_response

        download('http://abc', 'headers', 'saveTo')

        handle = mock_m()
        handle.write.assert_called_once_with('test content')
        self.assertEqual(mock_stdout.getvalue(), "Download start: http://abc\nDownload finished: saveTo\n")

    @patch('requests.get')
    @patch('sys.stdout', new_callable=StringIO)
    @patch('os.path.isfile')
    def test_download_fail(self, mock_isfile, mock_stdout, mock_requests_get):

        mock_isfile.return_value=False
        mock_response = MagicMock()
        mock_response.content = "test content"
        mock_response.status_code = requests.codes.bad
        mock_requests_get.return_value = mock_response

        download('http://abc', 'headers', 'saveTo')

        mock_response.raise_for_status.assert_called_with()



suite = unittest.TestLoader().loadTestsFromTestCase(TestSecurityFunctions)
unittest.TextTestRunner(verbosity=2).run(suite)
