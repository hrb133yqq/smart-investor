# -*- coding: utf-8 -*-
import local_functions
import securitydb
import sqlite3
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
filePattern = raw_sh + "2_dividents/*.json"

jsons = local_functions.read_json_files(filePattern)
infos = [
    {
        'code':j['result'][0]['SECURITY_CODE_A'],
        'divident_info': json.dumps([ local_functions.to_divident_info(info) for info in j['result'] if info['ISS_VOL']!='-'])
    } for j in jsons if len(j['result'])>0]

securitydb.fill_divident_info(infos)
