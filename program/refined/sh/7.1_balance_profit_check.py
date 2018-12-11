# -*- coding: utf-8 -*-
from decimal import Decimal
import local_functions
import securitydb
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

refined_sh = "../../../data/refined/sh/"
fileName = refined_sh + "data.json"

secInfos = securitydb.get_valuable_security_info()
#print 'EPS deviation is big', [secInfo['code'] for secInfo in secInfos if local_functions.EPS_deviation_is_big(secInfo)]
#print 'EPS deviation is big', [secInfo['code'] for secInfo in secInfos if local_functions.EPS_deviation_is_big(secInfo)]
#print 'total shares deviation is big', [secInfo['code'] for secInfo in secInfos if local_functions.total_shares_deviation_is_big(secInfo)]
