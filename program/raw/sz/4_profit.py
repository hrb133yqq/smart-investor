# -*- coding: utf-8 -*-
import net_functions
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sz = "../../../data/raw/sz/"
fileNameTemplate = raw_sz + "4_profit/{0}_{1}.html"
urlTemplate = "http://money.finance.sina.com.cn/corp/go.php/vFD_ProfitStatement/stockid/{0}/ctrl/{1}/displaytype/4.phtml"

downloadHeaders={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Connection': 'close',
    'Host':'money.finance.sina.com.cn',
    'Referer':'http://money.finance.sina.com.cn/corp/go.php/vFD_ProfitStatement/stockid/600006/ctrl/2013/displaytype/4.phtml',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

curYear = local_functions.get_current_year()
codes = securitydb.get_valuable_security_code()
for code in codes:
    # download the first report
    url = urlTemplate.format(code, curYear)
    fileName = fileNameTemplate.format(code, curYear)
    net_functions.download(url, None, fileName)
    # get other report urls
    page = local_functions.read_html(fileName)
    year_urls = local_functions.get_report_link_year_and_urls(page)
    # download other reports
    for year, url in year_urls:
        fileName = fileNameTemplate.format(code, year)
        net_functions.download(url, downloadHeaders, fileName, 1)
