# -*- coding: utf-8 -*-
import local_functions
import securitydb

raw_sz = "../../../data/raw/sz/"
fileName = raw_sz + "3_balance.zip"

pages = local_functions.read_html_files_from_zip(fileName)
infos={} # {'sec code':[info]}
for page in pages:
    if not local_functions.has_balance_info(page):
        print "don't have balance info!"
        continue
    info = local_functions.to_balance_info(page)
    code = info['code']
    del info['code']
    if code in infos:
        infos[code].append(info)
    else:
        infos[code]=[info]

securitydb.fill_balance_info(infos)
