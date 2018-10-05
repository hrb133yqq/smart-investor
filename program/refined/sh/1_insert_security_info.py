# -*- coding: utf-8 -*-
from local_functions import *
import securitydb
import sqlite3

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
fileName = raw_sh + "1_security/shA.xls"

lines = readlines(fileName)
info_array = [line.split() for line in lines[1:]]
infos = [{'code':info[0], 'listingdate':string_to_date(info[4])} for info in info_array]

securitydb.init_db()
securitydb.insert_security_info(infos)
