# -*- coding: utf-8 -*-
from net_functions import download, get
import datetime
import securitydb

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

url_template=(
    "http://query.sse.com.cn/security/stock/queryCompanyStatementNew.do?jsonCallBack=&isPagination=true&"
    "productId={0}&keyWord=&isNew=1&reportType2=DQBG&reportType=YEARLY&beginDate={1}&endDate={2}&"
    "pageHelp.pageSize=25&pageHelp.pageCount=50&pageHelp.pageNo=1&pageHelp.beginPage=1&pageHelp.cacheSize=1&pageHelp.endPage=5"
    )
url_static="http://static.sse.com.cn"
raw_sh = "../../../data/raw/sh/"

download_headers={
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Host':'query.sse.com.cn',
    'Referer':'http://www.sse.com.cn/assortment/stock/list/info/announcement/index.shtml?productId=600000',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}

fileName_template = raw_sh + "2_annual_url/{0}_{1}_{2}.json"

'''
example:
{"beginDate":"2017-01-01","endDate":"2018-01-01","isNew":"1","isPagination":"true","jsonCallBack":"","keyWord":"","pageHelp":{"beginPage":1,"cacheSize":1,"data":[{"INDEXCLASS":null,"PLAN_Date":null,"PLAN_Year":null,"ROWNUM":null,"ROWNUM_":null,"SSEDate":"2017-04-01","SSETime":null,"SSETimeStr":null,"URL":"\/disclosure\/listedinfo\/announcement\/c\/2017-04-01\/600000_2016_nzy.pdf","author":null,"book_Name":null,"bulletinHeading":null,"bulletinType":null,"bulletin_No":null,"bulletin_Type":"年报摘要","bulletin_Year":"2016","category_A":null,"category_B":null,"category_C":null,"category_D":null,"chapter_No":null,"companyAbbr":null,"dispatch_Organ":null,"file_Serial":null,"finish_Time":null,"initial_Date":null,"isChangeFlag":null,"journal_Issue":null,"journal_Name":null,"journal_Section":null,"journal_Year":null,"keyWord":null,"key_Word":null,"language":null,"lemma_CN":null,"lemma_EN":null,"publishing_Comp":null,"question":null,"question_Class":null,"read_Status":null,"save_Time":null,"section":null,"security_Code":"600000","source":null,"spareVolEnd":null,"title":"浦发银行2016年年度报告摘要","title_ETC":null,"title_PY":null,"unit_Code":null,"unit_Type":null},{"INDEXCLASS":null,"PLAN_Date":null,"PLAN_Year":null,"ROWNUM":null,"ROWNUM_":null,"SSEDate":"2017-04-01","SSETime":null,"SSETimeStr":null,"URL":"\/disclosure\/listedinfo\/announcement\/c\/2017-04-01\/600000_2016_n.pdf","author":null,"book_Name":null,"bulletinHeading":null,"bulletinType":null,"bulletin_No":null,"bulletin_Type":"年报","bulletin_Year":"2016","category_A":null,"category_B":null,"category_C":null,"category_D":null,"chapter_No":null,"companyAbbr":null,"dispatch_Organ":null,"file_Serial":null,"finish_Time":null,"initial_Date":null,"isChangeFlag":null,"journal_Issue":null,"journal_Name":null,"journal_Section":null,"journal_Year":null,"keyWord":null,"key_Word":null,"language":null,"lemma_CN":null,"lemma_EN":null,"publishing_Comp":null,"question":null,"question_Class":null,"read_Status":null,"save_Time":null,"section":null,"security_Code":"600000","source":null,"spareVolEnd":null,"title":"浦发银行2016年年度报告","title_ETC":null,"title_PY":null,"unit_Code":null,"unit_Type":null}],"endDate":null,"endPage":5,"objectResult":null,"pageCount":1,"pageNo":1,"pageSize":25,"searchDate":null,"sort":null,"startDate":null,"total":2},"productId":"600000","reportType":"YEARLY","reportType2":"DQBG","result":[{"INDEXCLASS":null,"PLAN_Date":null,"PLAN_Year":null,"ROWNUM":null,"ROWNUM_":null,"SSEDate":"2017-04-01","SSETime":null,"SSETimeStr":null,"URL":"\/disclosure\/listedinfo\/announcement\/c\/2017-04-01\/600000_2016_nzy.pdf","author":null,"book_Name":null,"bulletinHeading":null,"bulletinType":null,"bulletin_No":null,"bulletin_Type":"年报摘要","bulletin_Year":"2016","category_A":null,"category_B":null,"category_C":null,"category_D":null,"chapter_No":null,"companyAbbr":null,"dispatch_Organ":null,"file_Serial":null,"finish_Time":null,"initial_Date":null,"isChangeFlag":null,"journal_Issue":null,"journal_Name":null,"journal_Section":null,"journal_Year":null,"keyWord":null,"key_Word":null,"language":null,"lemma_CN":null,"lemma_EN":null,"publishing_Comp":null,"question":null,"question_Class":null,"read_Status":null,"save_Time":null,"section":null,"security_Code":"600000","source":null,"spareVolEnd":null,"title":"浦发银行2016年年度报告摘要","title_ETC":null,"title_PY":null,"unit_Code":null,"unit_Type":null},{"INDEXCLASS":null,"PLAN_Date":null,"PLAN_Year":null,"ROWNUM":null,"ROWNUM_":null,"SSEDate":"2017-04-01","SSETime":null,"SSETimeStr":null,"URL":"\/disclosure\/listedinfo\/announcement\/c\/2017-04-01\/600000_2016_n.pdf","author":null,"book_Name":null,"bulletinHeading":null,"bulletinType":null,"bulletin_No":null,"bulletin_Type":"年报","bulletin_Year":"2016","category_A":null,"category_B":null,"category_C":null,"category_D":null,"chapter_No":null,"companyAbbr":null,"dispatch_Organ":null,"file_Serial":null,"finish_Time":null,"initial_Date":null,"isChangeFlag":null,"journal_Issue":null,"journal_Name":null,"journal_Section":null,"journal_Year":null,"keyWord":null,"key_Word":null,"language":null,"lemma_CN":null,"lemma_EN":null,"publishing_Comp":null,"question":null,"question_Class":null,"read_Status":null,"save_Time":null,"section":null,"security_Code":"600000","source":null,"spareVolEnd":null,"title":"浦发银行2016年年度报告","title_ETC":null,"title_PY":null,"unit_Code":null,"unit_Type":null}]}
'''

infos = securitydb.get_security_info()
current_year = datetime.date.today().year

for info in infos:
    code = info['code']
    listing_year = info['listingdate'].year
    startYear = listing_year

    while True:
        url = url_template.format(code, "{0}-01-01".format(startYear), "{0}-12-31".format(startYear+2))
        fileName = fileName_template.format(code, startYear, startYear+2)
        download(url, download_headers, fileName)

        startYear = startYear + 3
        if startYear > current_year: break
