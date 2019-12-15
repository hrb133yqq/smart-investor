# -*- coding: utf-8 -*-
from decimal import Decimal
import local_functions
import securitydb
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

refined_sz = "../../../data/refined/sz/"
fileName = refined_sz + "data.json"

secInfos = securitydb.get_valuable_security_info()
data = [local_functions.generate_data(secInfo) for secInfo in secInfos]
print len(data)
valuable_data = [x for x in data if Decimal(x['EPS_avg_7'])>Decimal('0') and Decimal(x['last_close_date_price'])/Decimal(x['EPS_avg_7']) < Decimal('22')]
print len(valuable_data)
local_functions.save(json.dumps(valuable_data), fileName)
