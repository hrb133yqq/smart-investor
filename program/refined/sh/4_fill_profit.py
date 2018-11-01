# -*- coding: utf-8 -*-
import local_functions
import securitydb

raw_sh = "../../../data/raw/sh/"
fileName = raw_sh + "4_profit.zip"

pages = local_functions.read_html_files_from_zip(fileName)
infos={} # {'sec code':[info]}
for page in pages:
    info = local_functions.to_profit_info(page)
    code = info['code']
    del info['code']
    if code in infos:
        infos[code].append(info)
    else:
        infos[code]=[info]

securitydb.fill_profit_info(infos)
