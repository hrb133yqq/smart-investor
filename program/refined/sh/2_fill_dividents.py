# -*- coding: utf-8 -*-
import local_functions
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
filePattern = raw_sh + "2_dividents/*.json"

jsons = local_functions.read_json_files(filePattern)

infos=[]
for j in jsons:
    if len(j['result'])>0:
        code = j['result'][0]['SECURITY_CODE_A']
        divident_info = [local_functions.to_divident_info(info) for info in j['result'] if info['ISS_VOL']!='-']
        is_D7Y = local_functions.is_D7Y(divident_info)

        infos.append({'code': code, 'divident_info': divident_info, 'is_D7Y':is_D7Y})

securitydb.fill_divident_info(infos)
