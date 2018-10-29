# -*- coding: utf-8 -*-
from glob import iglob
from datetime import datetime, date
from decimal import Decimal
from lxml import html

import re
import json
import zipfile

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

def read_html_files_from_zip(fileName):
    with zipfile.ZipFile(fileName, 'r') as myzip:
        for name in myzip.namelist():
            if name.endswith('.html'):
                with myzip.open(name, 'r') as myfile:
                    yield html.parse(myfile).getroot()

def to_balance_info(root):
    code = get_code(root)
    print code
    trs = root.get_element_by_id('BalanceSheetNewTable0').xpath('tbody/tr')

    reportDate = get_string(trs, u'报表日期')
    #print reportDate
    # assets
    totalAssets = get_value(trs, u'资产总计')
    #print totalAssets
    currentAssets = get_value_or_None(trs, u'流动资产合计') # some type of company doesnot have this value
    #print currentAssets
    noncurrentAssets = get_value_or_None(trs, u'非流动资产合计') # some type of company doesnot have this value
    #print noncurrentAssets
    intangibleAssets = get_value(trs, u'无形资产')
    #print intangibleAssets
    goodwillAssets = get_value(trs, u'商誉')
    #print goodwillAssets

    # debts
    totalDebts = get_value(trs, u'负债合计')
    #print totalDebts
    currentDebts = get_value_or_None(trs, u'流动负债合计') # some type of company doesnot have this value
    #print currentDebts
    noncurrentDebts = get_value_or_None(trs, u'非流动负债合计') # some type of company doesnot have this value
    #print noncurrentDebts

    # equity
    holdersEquity = get_one_value(trs, [u'归属于母公司股东权益合计', u'归属于母公司股东的权益', u'归属于母公司所有者权益合计', u'归属于母公司的股东权益合计']) # the name is different for some company
    surplusReserve = get_one_value(trs, [u'盈余公积', u'盈余公积金金'])
    undistributedProfit = get_value(trs, u'未分配利润')

    return {
        'code':code,
        'reportDate':reportDate,
        'totalAssets':totalAssets,
        'currentAssets':currentAssets,
        'noncurrentAssets':noncurrentAssets,
        'intangibleAssets':intangibleAssets,
        'goodwillAssets':goodwillAssets,
        'totalDebts':totalDebts,
        'currentDebts':currentDebts,
        'noncurrentDebts':noncurrentDebts,
        'holdersEquity':holdersEquity,
        'surplusReserve':surplusReserve,
        'undistributedProfit':undistributedProfit
    }

def get_code(root):
    th = root.get_element_by_id('BalanceSheetNewTable0').xpath('thead/tr/th')[0]
    start = th.text.index('(')+1
    end = th.text.index(')')
    return th.text[start:end]

def get_string(trs, name):
    tr = next(tr for tr in trs if len(tr.xpath('td[1]//text()'))>0 and tr.xpath('td[1]//text()')[0]==name)
    ret = tr.xpath('td[2]//text()')[0]
    return None if ret=='--' else ret

def get_value(trs, name):
    tr = next(tr for tr in trs if len(tr.xpath('td[1]//text()'))>0 and tr.xpath('td[1]//text()')[0]==name)
    ret = tr.xpath('td[2]//text()')[0]
    return to_int(ret)

def get_value_or_None(trs, name):
    tr = next((tr for tr in trs if len(tr.xpath('td[1]//text()'))>0 and tr.xpath('td[1]//text()')[0]==name), None)
    return to_int(tr.xpath('td[2]//text()')[0]) if tr is not None else None

def get_one_value(trs, names):
    tr = next(tr for tr in trs if len(tr.xpath('td[1]//text()'))>0 and tr.xpath('td[1]//text()')[0] in names)
    ret = tr.xpath('td[2]//text()')[0]
    return to_int(ret)

def to_int(str):
    return None if str=='--' else int(Decimal(str.replace(',', ''))*10000)
