# -*- coding: utf-8 -*-
import net_functions
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

urlTemplate="http://query.sse.com.cn/security/fund/queryAllQuatAbelNew.do?jsonCallBack=&FUNDID={0}&inMonth={1}&inYear={2}&searchDate={3}"
raw_sh = "../../../data/raw/sh/"

downloadHeaders={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'query.sse.com.cn',
    'Referer':'http://www.sse.com.cn/assortment/stock/list/info/turnover/index.shtml?COMPANY_CODE=601668',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

year = local_functions.get_current_year()
year1 = str(year-1)
year2 = str(year-2)
fileNameTemplate = raw_sh + "5_price/{0}_{1}.json"
search_info_arr=[
    {'inYear':year1, 'inMonth':year1+'12', 'searchDate':year1+'-12-31'},
    {'inYear':year2, 'inMonth':year2+'12', 'searchDate':year2+'-12-31'}
]
codes = securitydb.get_valuable_security_code()

for code in codes:
    for search_info in search_info_arr:
        url = urlTemplate.format(code, search_info['inMonth'], search_info['inYear'], search_info['searchDate'])
        fileName = fileNameTemplate.format(code, search_info['inYear'])
        net_functions.download(url, downloadHeaders, fileName, 5)
