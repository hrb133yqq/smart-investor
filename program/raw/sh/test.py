# -*- coding: utf-8 -*-
from security_functions import download, get
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"

download_headers={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'static.sse.com.cn',
    'Referer':'http://www.sse.com.cn',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

download("http://static.sse.com.cn/disclosure/listedinfo/announcement/c/2017-03-29/600008_2016_n.pdf", download_headers, raw_sh+"2_annual_report/test1")
