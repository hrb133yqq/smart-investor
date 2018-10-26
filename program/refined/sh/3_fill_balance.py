# -*- coding: utf-8 -*-
import local_functions
import securitydb
import json

raw_sh = "../../../data/raw/sh/"
fileName = raw_sh + "3_balance.zip"

pages = local_functions.read_html_files_from_zip(fileName)
infos=[]
for page in pages:
    balance_info = local_functions.to_balance_info(page)
    #infos.append({'code': code, 'divident_info': json.dumps(divident_info), 'is_valuable':is_valuable})

#securitydb.fill_balance_info(infos)
