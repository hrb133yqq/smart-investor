# -*- coding: utf-8 -*-
import local_functions
import securitydb
import re
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sz = "../../../data/raw/sz/"
fileName = raw_sz + "1_security/szA.txt"

lines = local_functions.readlines(fileName)
infoArray = [re.split(r'\t', line) for line in lines[1:]]
infos = [{'code':info[0], 'listingDate':local_functions.string_to_date(info[2])} for info in infoArray if info[0][0]=='0']

securitydb.init_db()
securitydb.insert_security_info(infos)
