# -*- coding: utf-8 -*-
import local_functions
import securitydb
import sqlite3

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
fileName = raw_sh + "1_security/shA.xls"

lines = local_functions.readlines(fileName)
infoArray = [line.split() for line in lines[1:]]
infos = [{'code':info[0], 'listingDate':local_functions.string_to_date(info[4])} for info in infoArray]

securitydb.init_db()
securitydb.insert_security_info(infos)
