# -*- coding: utf-8 -*-
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
filePattern = raw_sh + "6_stock_struct/*.json"

jsons = local_functions.read_json_files(filePattern)

infos=[]
for j in jsons:
    code = j['companyCode']
    totalShares = local_functions.to_int(j['result']['totalShares'])
    infos.append({'code':code, 'totalShares':totalShares})

securitydb.fill_total_shares(infos)
