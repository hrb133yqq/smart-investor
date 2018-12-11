# -*- coding: utf-8 -*-
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
filePattern = raw_sh + "7_equity_changes/*.json"

jsons = local_functions.read_json_files(filePattern)

infos=[]
for j in jsons:
    code = j['companyCode']
    equityChangeInfo = [local_functions.to_equity_change_info(info) for info in j['result']]

    infos.append({'code': code, 'equityChangeInfo': equityChangeInfo})

securitydb.fill_equity_change_info(infos)
