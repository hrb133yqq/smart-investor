from security_functions import download

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

url_template="http://query.sse.com.cn/security/stock/queryCompanyStatementNew.do?jsonCallBack=&isPagination=true&productId=600000&keyWord=&isNew=1&reportType2=DQBG&reportType=YEARLY&beginDate=2017-01-01&endDate=2018-01-01&pageHelp.pageSize=25&pageHelp.pageCount=50&pageHelp.pageNo=1&pageHelp.beginPage=1&pageHelp.cacheSize=1&pageHelp.endPage=5"
url_static="http://static.sse.com.cn"
raw_sh = "../../../data/raw/sh/"

download_headers={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'query.sse.com.cn',
    'Referer':'http://www.sse.com.cn/assortment/stock/list/info/announcement/index.shtml?productId=600000',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

url_file_arr = [
    {'url': url_template, 'file':raw_sh+"2_annual_report/test"},
]

for url_file in url_file_arr:
    download(url_file['url'], download_headers, url_file['file'])
