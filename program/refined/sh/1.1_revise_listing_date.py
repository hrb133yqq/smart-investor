# -*- coding: utf-8 -*-
import local_functions
import securitydb
import sqlite3

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

infos=[
{'code':'600996', 'listingDate':local_functions.string_to_date('2016-12-26')},
]

codes = securitydb.revise_listing_date(infos)
