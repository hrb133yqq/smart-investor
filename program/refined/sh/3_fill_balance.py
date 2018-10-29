# -*- coding: utf-8 -*-
import local_functions
import securitydb

raw_sh = "../../../data/raw/sh/"
fileName = raw_sh + "3_balance.zip"

pages = local_functions.read_html_files_from_zip(fileName)
infos={} # {'sec code':[balance_info]}
for page in pages:
    balance_info = local_functions.to_balance_info(page)
    code = balance_info['code']
    del balance_info['code']
    if code in infos:
        infos[code].append(balance_info)
    else:
        infos[code]=[balance_info]

securitydb.fill_balance_info(infos)
