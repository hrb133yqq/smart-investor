# -*- coding: utf-8 -*-
import net_functions
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

urlTemplate="http://query.sse.com.cn/security/stock/queryCompanyStockStruct.do?jsonCallBack=&isPagination=false&companyCode={0}"
raw_sh = "../../../data/raw/sh/"

downloadHeaders={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'query.sse.com.cn',
    'Referer':'http://www.sse.com.cn/assortment/stock/list/info/capital/index.shtml?COMPANY_CODE=603993',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

fileNameTemplate = raw_sh + "6_stock_struct/{0}.json"
codes = securitydb.get_valuable_security_code()

for code in codes:
    url = urlTemplate.format(code)
    fileName = fileNameTemplate.format(code)
    net_functions.download(url, downloadHeaders, fileName, 5)