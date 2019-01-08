# -*- coding: utf-8 -*-
import net_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sz/"
fileNameTemplate = raw_sh + "2_dividents/{0}.html"
urlTemplate = "http://vip.stock.finance.sina.com.cn/corp/go.php/vISSUE_ShareBonus/stockid/{0}.phtml"

downloadHeaders={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Connection': 'close',
    'Host':'http://vip.stock.finance.sina.com.cn',
    'Referer':'http://vip.stock.finance.sina.com.cn/corp/go.php/vISSUE_ShareBonus/stockid/000637.phtml',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

codes = securitydb.get_security_code()
for code in codes:
    # download the first report
    url = urlTemplate.format(code)
    fileName = fileNameTemplate.format(code)
    net_functions.download(url, None, fileName, sleepSeconds=5)
