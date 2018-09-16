# -*- coding: utf-8 -*-
from functions import *
import securitydb
import sqlite3

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

raw_sh = "../../../data/raw/sh/"
fileName = raw_sh + "1_security/shA.xls"

lines = readlines(fileName)
codes = [line[:6] for line in lines[1:]]

securitydb.init_db()
securitydb.insert_security_code(codes)
