# -*- coding: utf-8 -*-
import net_functions

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

url_shA="http://query.sse.com.cn/security/stock/downloadStockListFile.do?csrcCode=&stockCode=&areaName=&stockType=1"
url_shB="http://query.sse.com.cn/security/stock/downloadStockListFile.do?csrcCode=&stockCode=&areaName=&stockType=2"
raw_sh = "../../../data/raw/sh/"

downloadHeaders={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'query.sse.com.cn',
    'Referer':'http://www.sse.com.cn/assortment/stock/list/share',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

url_file_arr = [
    {'url': url_shA, 'file':raw_sh+"1_security/shA.xls"},
    {'url': url_shB, 'file':raw_sh+"1_security/shB.xls"}
]

for url_file in url_file_arr:
    net_functions.download(url_file['url'], downloadHeaders, url_file['file'])
