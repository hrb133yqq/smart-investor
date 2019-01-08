# -*- coding: utf-8 -*-
import local_functions
import securitydb
import json
from decimal import Decimal

raw_sz = "../../../data/raw/sz/"
fileName = raw_sz + "2_dividents.zip"

def get_code(page):
    h2 = page.xpath('//div[@class="tbtb01"]/h2//text()')
    return h2[1].strip()

def get_dividents_array(page):
    rows = page.get_element_by_id('sharebonus_1').xpath('tbody/tr')
    return [row.xpath('td//text()') for row in rows]

def to_divident_info(array):
    date = array[6]
    divident = array[3]
    return {
        'date':date,
        'divident':str((Decimal(divident)/10).quantize(Decimal('0.001')))
    }

pages = local_functions.read_html_files_from_zip(fileName)
infos=[] # {'code': code, 'dividentInfo': dividentInfo, 'is_D7Y':is_D7Y}
for page in pages:
    code = get_code(page)
    print code
    arrays = get_dividents_array(page)
    dividentInfo = [to_divident_info(array) for array in arrays if array[4]==u'实施' and array[3]!='0']
    is_D7Y = local_functions.is_D7Y(dividentInfo)
    infos.append({'code': code, 'dividentInfo': dividentInfo, 'is_D7Y':is_D7Y})

securitydb.fill_divident_info(infos)
