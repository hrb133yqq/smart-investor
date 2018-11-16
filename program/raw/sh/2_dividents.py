# -*- coding: utf-8 -*-
import net_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

url_template="http://query.sse.com.cn/commonQuery.do?jsonCallBack=&isPagination=false&sqlId=COMMON_SSE_ZQPZ_GG_LYFP_AGFH_L&productid={0}"
raw_sh = "../../../data/raw/sh/"

download_headers={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'query.sse.com.cn',
    'Referer':'http://www.sse.com.cn/assortment/stock/list/info/profit/index.shtml?COMPANY_CODE=600000',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

fileName_template = raw_sh + "2_dividents/{0}.json"

codes = securitydb.get_security_code()

for code in codes:
    url = url_template.format(code)
    fileName = fileName_template.format(code)
    net_functions.download(url, download_headers, fileName, 1)
