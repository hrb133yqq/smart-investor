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

def save(data, fileName):
    with open(fileName, "wb") as file:
        file.write(data)
        print "File saved:", fileName

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
        'date':info['RECORD_DATE_A'],
        'vol':int(Decimal(info['ISS_VOL'])*10000),
        'divident':info['DIVIDEND_PER_SHARE2_A']
    }

def is_D7Y(dividentInfo): # divident for 8 years
    cur_year = get_current_year()
    real_years = set([info['date'][:4] for info in dividentInfo])
    required_years = set([str(cur_year-x) for x in range(8)])
    return required_years.issubset(real_years)

def read_html_files_from_zip(fileName):
    with zipfile.ZipFile(fileName, 'r') as myzip:
        for name in myzip.namelist():
            if name.endswith('.html'):
                print name
                with myzip.open(name, 'r') as myfile:
                    yield html.parse(myfile).getroot()

def has_balance_info(root):
    return root.get_element_by_id('BalanceSheetNewTable0', False)

def to_balance_info(root):
    code = get_code(root, 'BalanceSheetNewTable0')
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
    capitalStock = get_one_value(trs, [u'股本', u'实收资本(或股本)'])

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
        'undistributedProfit':undistributedProfit,
        'capitalStock':capitalStock
    }

def has_profit_info(root):
    return root.get_element_by_id('ProfitStatementNewTable0', False)

def to_profit_info(root):
    code = get_code(root, 'ProfitStatementNewTable0')
    print code
    trs = root.get_element_by_id('ProfitStatementNewTable0').xpath('tbody/tr')

    reportDate = get_string(trs, u'报表日期')
    #print reportDate
    # assets
    holderNetProfit = get_one_value(trs, [u'归属于母公司所有者的净利润', u'归属于母公司的净利润', u'归属于母公司股东的净利润'])
    EPS = get_string(trs, u'基本每股收益(元/股)')

    return {
        'code':code,
        'reportDate':reportDate,
        'holderNetProfit':holderNetProfit,
        'EPS':EPS
    }

def to_equity_change_info(info):
    return {
        'date':info['realDate'],
        'AShares':to_int(str(info['AShares'])),
        'BShares':to_int(str(info['BShares'])),
        'totalShares':to_int(str(info['totalShares']))
    }

def EPS_deviation_is_big(secInfo):
    isBig = False
    for profitInfo in secInfo['profitInfo']:
        reportDate = profitInfo['reportDate']
        balanceInfo = next(balanceInfo for balanceInfo in secInfo['balanceInfo'] if reportDate == balanceInfo['reportDate'])
        if reportDate.endswith("12-31") and profitInfo['EPS'] is not None and balanceInfo['capitalStock'] is not None:
            capitalStock = Decimal(balanceInfo['capitalStock'])
            theirCalcEPS = Decimal(profitInfo['EPS'])
            holderNetProfit = Decimal(profitInfo['holderNetProfit'])

            ourCalcEPC = holderNetProfit/capitalStock
            averageEPC = (theirCalcEPS + ourCalcEPC)/2
            deviationValue = abs(theirCalcEPS - ourCalcEPC)/2
            deviationPercent = ((deviationValue/averageEPC)*100).quantize(Decimal('0.01'))

            if deviationPercent>20:
                print secInfo['code']
                print 'reportDate', reportDate
                print 'theirCalcEPS', theirCalcEPS
                print 'ourCalcEPC', ourCalcEPC
                print 'deviationPercent', deviationPercent
                isBig = True
                break
    return isBig

def total_shares_deviation_is_big(secInfo):
    isBig = False
    currentCapitalStock = Decimal(get_current_capital_stock(secInfo))
    totalShares = Decimal(secInfo['totalShares'])
    average = (currentCapitalStock + totalShares)/2
    deviationValue = abs(currentCapitalStock - totalShares)/2
    deviationPercent = ((deviationValue/average)*100).quantize(Decimal('0.1'))

    if deviationPercent>1:
        print secInfo['code']
        print 'currentCapitalStock', currentCapitalStock
        print 'totalShares', totalShares
        print 'deviationPercent', deviationPercent
        isBig = True

    return isBig

def get_code(root, tableId):
    th = root.get_element_by_id(tableId).xpath('thead/tr/th')[0]
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

''' sec info example:
[{
  "code": "603993",
  "listingDate": "2012-10-09",
  "balanceInfo": [
    {
      "reportDate": "2008-12-31",
      "totalDebts": 1094182200,
      "capitalStock": 975234100,
      "undistributedProfit": 1729800800,
      "intangibleAssets": 771107500,
      "noncurrentDebts": 65390500,
      "surplusReserve": 949496600,
      "currentDebts": 1028791700,
      "currentAssets": 7674272100,
      "totalAssets": 12739267600,
      "noncurrentAssets": 5064995500,
      "holdersEquity": 11237128000,
      "goodwillAssets": null
    }
  ],
  "profitInfo": [
    {
      "reportDate": "2008-12-31",
      "holderNetProfit": 1640901100,
      "EPS": "0.01"
    },
    {
      "reportDate": "2009-12-31",
      "holderNetProfit": 495094800,
      "EPS": "0.02"
    }
  ],
  "dividentInfo": [
    {
      "date": "2018-06-26",
      "vol": 17665772583,
      "divident": "0.076"
    }
  ],
  "priceInfo": [
    {
      "closeDate": "201612",
      "closePrice": 3.72
    },
    {
      "closeDate": "2018-11-22",
      "closePrice": 4.06
    },
    {
      "closeDate": "201712",
      "closePrice": 6.88
    }
  ],
  "equityChangeInfo": [
    {
      "date": "2017-09-08",
      "BShares": 0,
      "AShares": 28103763899,
      "totalShares": 29352080397
    }
  ],
}]
'''
def generate_data(secInfo):
    code=secInfo['code']
    print code
    lastPriceInfo = get_last_price_info(secInfo)
    year1PriceInfo = get_year1_price_info(secInfo)
    year2PriceInfo = get_year2_price_info(secInfo)
    year1 = year2PriceInfo['closeDate'][:4] # move -1 because of new year
    lastYear = year1PriceInfo['closeDate'][:4] # move -1 because of new year
    profits = get_normalized_profits(secInfo)
    dividents = get_normalized_dividents(secInfo)
    NAV_perShares = get_NAV_per_shares(secInfo)
    debtAssetRatios = get_debt_asset_ratios(secInfo)
    currentDebtDivideCurrentAssets = get_current_debt_divide_current_assets(secInfo)

    return {
        "code": 'sz'+code,
        "year1": year1,
        "EPS_year1": next(x['VALUE'] for x in profits if year1 in x['DATE']),
        "EPS_avg_7": str(
            (sum([Decimal(x['VALUE']) for x in profits[1:8]])/7
            ).quantize(Decimal('0.01'))
        ),
        "last_close_date": lastPriceInfo['closeDate'],
        "last_close_date_price": lastPriceInfo['closePrice'],
        "price_year1": year1PriceInfo['closePrice'],
        "price_change_percent_in_one_year": str(
            ((Decimal(year1PriceInfo['closePrice'])-Decimal(year2PriceInfo['closePrice'])) * 100 / Decimal(year2PriceInfo['closePrice'])
            ).quantize(Decimal('0.01'))
        ),
        "pay_divident_since": dividents[-1]['DATE'][:4],
        "NAV_per_share_lastYear": NAV_perShares[0]['VALUE'],
        "divident_per_share_lastYear": dividents[0]['VALUE'],
        "debt_asset_ratio_lastYear":debtAssetRatios[0]['VALUE'],
        "current_debt_divide_current_asset_lastYear":currentDebtDivideCurrentAssets[0]['VALUE'] if len(currentDebtDivideCurrentAssets)>0 else '--',
        "dividents": dividents,
        "profits": profits,
        "debt_asset_ratios":debtAssetRatios,
        "NAV_per_shares":NAV_perShares
  }

def get_last_price_info(secInfo):
    return sorted(secInfo['priceInfo'], key=lambda info: info['closeDate'])[-1]

def get_year1_price_info(secInfo):
    return sorted(secInfo['priceInfo'], key=lambda info: info['closeDate'])[1]

def get_year2_price_info(secInfo):
    return sorted(secInfo['priceInfo'], key=lambda info: info['closeDate'])[0]

def get_current_capital_stock(secInfo):
    return sorted(secInfo['balanceInfo'], key=lambda info: info['reportDate'])[-1]['capitalStock']
'''
def get_capital_stock_info(secInfo):
    capitalStockInfo = {} # {year: value}
    for balanceInfo in secInfo['balanceInfo']:
        year = int(balanceInfo['reportDate'][:4])
        value = balanceInfo['capitalStock']
        capitalStockInfo[year] = value
    return capitalStockInfo
'''

def get_normalize_factor(secInfo, date):
    totalShares = secInfo['totalShares']
    sortedEquityChangeInfo = sorted(secInfo['equityChangeInfo'], key=lambda info: info['date'])
    minChangeInfo = sortedEquityChangeInfo[0]
    maxChangeInfo = sortedEquityChangeInfo[-1]
    if date>=maxChangeInfo['date']:
        return Decimal(maxChangeInfo['totalShares'])/Decimal(totalShares)
    elif date<=minChangeInfo['date']:
        return Decimal(minChangeInfo['totalShares'])/Decimal(totalShares)
    else:
        for index in range(len(sortedEquityChangeInfo)-1):
            currInfo = sortedEquityChangeInfo[index]
            nextInfo = sortedEquityChangeInfo[index+1]
            if currInfo['date']<=date and nextInfo['date']>=date:
                return Decimal(currInfo['totalShares'])/Decimal(totalShares)
    print 'sortedEquityChangeInfo', json.dumps(sortedEquityChangeInfo)
    print 'date', date
    raise ValueError('can not calculate factor')

def get_normalized_dividents(secInfo):
    dividents = [
        {
            'DATE': x['date'],
            'VALUE': str(
                (Decimal(x['divident']) * get_normalize_factor(secInfo, x['date'])
                ).quantize(Decimal('0.01'))
            )
        } for x in secInfo['dividentInfo']
    ]
    return sorted(dividents, key=lambda x:x['DATE'], reverse=True)

def get_normalized_profits(secInfo):
    minYear = get_current_year()-8
    profits = [
        {
            'DATE': x['reportDate'],
            'VALUE': str(
                (Decimal(x['EPS']) * get_normalize_factor(secInfo, x['reportDate'])
                ).quantize(Decimal('0.01'))
            )
        } for x in secInfo['profitInfo'] if int(x['reportDate'][:4])>=minYear
    ]
    return sorted(profits, key=lambda x:x['DATE'], reverse=True)

def get_NAV_per_shares(secInfo):
    minYear = get_current_year()-8
    profits = [
        {
            'DATE': x['reportDate'],
            'VALUE': str(
                ((Decimal(x['holdersEquity'])-Decimal(x['intangibleAssets'] or 0)-Decimal(x['goodwillAssets'] or 0)) / Decimal(secInfo['totalShares'])
                ).quantize(Decimal('0.01'))
            )
        } for x in secInfo['balanceInfo'] if int(x['reportDate'][:4])>=minYear
    ]
    return sorted(profits, key=lambda x:x['DATE'], reverse=True)

def get_debt_asset_ratios(secInfo):
    minYear = get_current_year()-8
    profits = [
        {
            'DATE': x['reportDate'],
            'VALUE': str(
                (Decimal(x['totalDebts'])*100 / Decimal(x['totalAssets'])
                ).quantize(Decimal('1.'))
            )
        } for x in secInfo['balanceInfo'] if int(x['reportDate'][:4])>=minYear
    ]
    return sorted(profits, key=lambda x:x['DATE'], reverse=True)

def get_current_debt_divide_current_assets(secInfo):
    minYear = get_current_year()-8
    profits = [
        {
            'DATE': x['reportDate'],
            'VALUE': str(
                (Decimal(x['currentAssets']) / Decimal(x['currentDebts'])
                ).quantize(Decimal('0.1'))
            )
        } for x in secInfo['balanceInfo'] if int(x['reportDate'][:4])>=minYear and x['currentAssets'] is not None
    ]
    return sorted(profits, key=lambda x:x['DATE'], reverse=True)

def get_current_year():
    return 2019
