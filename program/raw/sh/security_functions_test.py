import security_functions
import unittest
import sys
from mock import patch
'''
pre-request: pip install mock
'''
class MyOutput(object):
    def __init__(self):
        self.data = []

    def write(self, s):
        self.data.append(s)

    def __str__(self):
        return "".join(self.data)

class TestSecurityFunctions(unittest.TestCase):
    #@patch('sys.stdout')
    @patch('os.path.isfile')
    def test_download_file_exist(self, mock_isfile):
        mock_isfile.return_value=True
        stdout_org = sys.stdout
        my_stdout = MyOutput()
        try:
            sys.stdout = my_stdout
            security_functions.download('http://abc', 'headers', 'saveTo')
        finally:
            sys.stdout = stdout_org

        self.assertEquals(str(my_stdout), "Download ignore: saveTo\n")

suite = unittest.TestLoader().loadTestsFromTestCase(TestSecurityFunctions)
unittest.TextTestRunner(verbosity=2).run(suite)
