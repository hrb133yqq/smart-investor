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
data = [local_functions.generate_data(secInfo) for secInfo in secInfos]
# test begin
#test_data = [x for x in data if x["code"]=="sh601117"]
#print test_data
# end
print 'is_D7Y:', len(data)
valuable_data = [x for x in data if Decimal(x['EPS_avg_7'])>Decimal('0') and Decimal(x['last_close_date_price'])/Decimal(x['EPS_avg_7']) < Decimal('22')]
print 'valuable:', len(valuable_data)
local_functions.save(json.dumps(valuable_data), fileName)
