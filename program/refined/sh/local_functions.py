from glob import glob
from datetime import datetime
import re
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def readlines(fileName):
    lines=[]
    with open(fileName, "r") as file:
        for line in file:
            lines.append(line)
    return lines

# '2017-12-04'
def string_to_date(date_str):
    r = re.compile('^\d{4}-\d{2}-\d{2}')
    if r.match(date_str):
        return datetime.strptime(date_str, '%Y-%m-%d').date()
