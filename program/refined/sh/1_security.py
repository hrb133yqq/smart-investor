import sys
reload(sys)
sys.setdefaultencoding('utf-8')

import os.path

if os.path.isfile(fname):
    file = open(fname, "r")

else:
    print "File not exist:", fname

url_file_arr = [
    {'url': url_shA, 'file':raw_sh+"1_security/shA.xls"},
    {'url': url_shB, 'file':raw_sh+"1_security/shB.xls"}
]

for url_file in url_file_arr:
    download(url_file['url'], download_headers, url_file['file'])
