# -*- coding: utf-8 -*-
import local_functions
import securitydb
from glob import iglob
import re
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

str = u'test<title>中天金融(000540)分红配股_新浪财经_新浪网</title>'

s = str.replace(u'中', '')
print s

'''
raw_sz = "../../../data/raw/sz/"
fileName = raw_sz + "2_dividents/002752.html"

with open(fileName, "r") as file:
    #str = file.read()
    #print str
    root = html.parse(file).getroot()
    print html.tostring(root)
'''
