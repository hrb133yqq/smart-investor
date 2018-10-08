from glob import iglob
from datetime import datetime, date
from decimal import Decimal

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

def read(fileName):
    with open(fileName, "r") as file:
        return file.read()

def read_json_file(fileName):
    return json.loads(read(fileName))

def read_json_files(filePattern):
    for fileName in iglob(filePattern):
        yield read_json_file(fileName)

# '2017-12-04'
def string_to_date(date_str):
    r = re.compile('^\d{4}-\d{2}-\d{2}')
    if r.match(date_str):
        return datetime.strptime(date_str, '%Y-%m-%d').date()

def to_divident_info(info):
    #print info['SECURITY_CODE_A']
    return {
        'date':info['EX_DIVIDEND_DATE_A'],
        'vol':int(Decimal(info['ISS_VOL'])*10000),
        'divident':info['DIVIDEND_PER_SHARE1_A']
    }

def is_valuable(divident_info):
    cur_year = date.today().year
    real_years = set([info['date'][:4] for info in divident_info])
    required_years = set([str(cur_year-x) for x in range(7)])
    return required_years.issubset(real_years)
