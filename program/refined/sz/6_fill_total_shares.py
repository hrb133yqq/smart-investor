# -*- coding: utf-8 -*-
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

# generate from balanceInfo
infos = securitydb.get_valuable_security_balance_info()
targetInfos = []
for info in infos:
    code = info['code']
    balanceInfo = info['balanceInfo']
    totalShares = sorted(balanceInfo, key=lambda b:b['reportDate'], reverse=True)[0]['capitalStock']
    targetInfos.append({'code':code, 'totalShares':totalShares})

securitydb.fill_total_shares(targetInfos)
