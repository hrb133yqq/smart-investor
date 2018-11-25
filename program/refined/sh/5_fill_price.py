# -*- coding: utf-8 -*-
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
filePattern = raw_sh + "5_price/*.json"

jsons = local_functions.read_json_files(filePattern)

infos={} # {'sec code':[info]}
cur_infos={} # {'sec code':[info]}
for j in jsons:
    if len(j['result'])==4:
        code = j['result'][1]['id']

        closeDate = j['result'][1]['closeTxDate']
        closePrice = j['result'][1]['closePrice']
        info = {'closeDate':closeDate, 'closePrice':closePrice}
        if code in infos:
            infos[code].append(info)
        else:
            infos[code]=[info]

        cur_closeDate = j['result'][3]['closeTxDate']
        cur_closePrice = j['result'][3]['closePrice']
        if code not in cur_infos:
            cur_infos[code]={'closeDate':cur_closeDate, 'closePrice':cur_closePrice}
            infos[code].append(cur_infos[code])

securitydb.fill_price_info(infos)
