# -*- coding: utf-8 -*-
import local_functions
import securitydb
from glob import iglob

import re
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sz = "../../../data/raw/sz/"
filePattern = raw_sz + "5_price/*.txt"
codes = securitydb.get_valuable_security_code()
codeSet = set(codes)
infos={} # {'sec code':[info]}
for fileName in iglob(filePattern):
    lines = local_functions.readlines(fileName)
    infoArray = [re.split(r'\t', line) for line in lines[1:]]
    gen = (info for info in infoArray if info[1][0]=='0' and info[1] in codeSet)
    for info in gen:
        code = info[1]
        closeDate = info[0]
        closePrice = info[4]
        print code
        if code in infos:
            infos[code].append({'closeDate':closeDate, 'closePrice': closePrice})
        else:
            infos[code]=[{'closeDate':closeDate, 'closePrice': closePrice}]

securitydb.fill_price_info(infos)
