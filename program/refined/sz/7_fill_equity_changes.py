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
    equityChangeInfo = [{'date':b['reportDate'], 'totalShares':b['capitalStock']} for b in balanceInfo]
    targetInfos.append({'code': code, 'equityChangeInfo': equityChangeInfo})

securitydb.fill_equity_change_info(targetInfos)
