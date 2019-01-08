# -*- coding: utf-8 -*-
import os

raw_sz = "../../../data/raw/sz/"
fileNameTemplate = raw_sz + "2_dividents/{0}.html"
# 002752.html, when head contains "昇" lxml will read html file only with skeleton
useless_code = ['002752',
'002930',
'002931',
'002932',
'002933',
'002935',
'002936',
'002937',
'002938',
'002939',
'002940',
'002941',
'002942',
'002943',
]

for code in useless_code:
    fileName = fileNameTemplate.format(code)
    if os.path.exists(fileName):
      os.remove(fileName)
      print 'file removed:', fileName
    else:
      print 'The file does not exist:', fileName
