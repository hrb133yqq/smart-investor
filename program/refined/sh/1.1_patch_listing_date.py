# -*- coding: utf-8 -*-
from local_functions import *
import securitydb
import sqlite3

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

infos=[
{'code':'600996', 'listingdate':string_to_date('2016-12-26')},
]

codes = securitydb.update_listing_date(infos)
