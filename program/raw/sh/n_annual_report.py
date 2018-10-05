# -*- coding: utf-8 -*-
from net_functions import download, get
from local_functions import *
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
filePattern = raw_sh + "2_annual_url/*.json"
url_static = "http://static.sse.com.cn"
fileName_template = raw_sh + "3_annual_report/{0}_{1}.pdf"

download_headers={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'static.sse.com.cn',
    'Referer':'http://www.sse.com.cn',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

jsons = read_json_files(filePattern)
for j in jsons:
    code = j['productId']
    for item in j['result']:
        if item['bulletin_Type'] == '年报':
            url = url_static+item['URL']
            year = item['bulletin_Year']
            fileName = fileName_template.format(code, year)
            download(url, download_headers, fileName)
