(function(investor) {
	"use strict";
	investor.data = investor.data || (function(){
		var data = {};
		Object.defineProperty(data, 'stocks', {
			get: function(){
return [
  {
    "code": "sh600000",
    "last_close_date": "2018-11-21",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "14.14",
    "year1": "2017",
    "pay_divident_since": "2000",
    "price_year1": 12.59,
    "EPS_year1": "1.84",
    "price_change_percent_in_one_year": "-22.33",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-05-24",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-06-22",
        "VALUE": "0.34"
      },
      {
        "DATE": "2015-06-19",
        "VALUE": "0.48"
      },
      {
        "DATE": "2014-06-23",
        "VALUE": "0.42"
      },
      {
        "DATE": "2013-05-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2012-06-25",
        "VALUE": "0.19"
      },
      {
        "DATE": "2011-06-02",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-06-09",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-08",
        "VALUE": "0.04"
      },
      {
        "DATE": "2008-04-23",
        "VALUE": "0.02"
      },
      {
        "DATE": "2007-07-17",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-05-24",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-05-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-05-19",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-08-21",
        "VALUE": "0.02"
      },
      {
        "DATE": "2000-07-05",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 10.66,
    "EPS_avg_7": "1.48",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.44"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.84"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.77"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.69"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.60"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.39"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.16"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.93"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.78"
      }
    ]
  },
  {
    "code": "sh600011",
    "last_close_date": "2018-11-21",
    "divident_per_share_year1": "0.28",
    "NAV_per_share_year1": "3.16",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 6.17,
    "EPS_year1": "0.11",
    "price_change_percent_in_one_year": "-12.48",
    "dividents": [
      {
        "DATE": "2018-05-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-06-29",
        "VALUE": "0.28"
      },
      {
        "DATE": "2016-07-07",
        "VALUE": "0.46"
      },
      {
        "DATE": "2015-07-10",
        "VALUE": "0.35"
      },
      {
        "DATE": "2014-07-17",
        "VALUE": "0.34"
      },
      {
        "DATE": "2013-07-03",
        "VALUE": "0.19"
      },
      {
        "DATE": "2012-06-27",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-06-22",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-07-05",
        "VALUE": "0.16"
      },
      {
        "DATE": "2009-06-30",
        "VALUE": "0.08"
      },
      {
        "DATE": "2008-06-12",
        "VALUE": "0.23"
      },
      {
        "DATE": "2007-06-01",
        "VALUE": "0.22"
      },
      {
        "DATE": "2006-06-22",
        "VALUE": "0.19"
      },
      {
        "DATE": "2005-06-21",
        "VALUE": "0.19"
      },
      {
        "DATE": "2004-05-21",
        "VALUE": "0.19"
      },
      {
        "DATE": "2002-06-19",
        "VALUE": "0.11"
      }
    ],
    "last_close_date_price": 6.92,
    "EPS_avg_7": "0.49",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.12"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.56"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.92"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.67"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.26"
      }
    ]
  },
  {
    "code": "sh600012",
    "last_close_date": "2018-11-21",
    "divident_per_share_year1": "0.23",
    "NAV_per_share_year1": "-0.34",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 11,
    "EPS_year1": "0.66",
    "price_change_percent_in_one_year": "-33.29",
    "dividents": [
      {
        "DATE": "2018-07-16",
        "VALUE": "0.23"
      },
      {
        "DATE": "2017-07-17",
        "VALUE": "0.23"
      },
      {
        "DATE": "2016-07-18",
        "VALUE": "0.23"
      },
      {
        "DATE": "2015-07-17",
        "VALUE": "0.23"
      },
      {
        "DATE": "2014-07-10",
        "VALUE": "0.22"
      },
      {
        "DATE": "2013-06-21",
        "VALUE": "0.20"
      },
      {
        "DATE": "2012-07-13",
        "VALUE": "0.21"
      },
      {
        "DATE": "2011-06-13",
        "VALUE": "0.21"
      },
      {
        "DATE": "2010-06-18",
        "VALUE": "0.20"
      },
      {
        "DATE": "2009-06-01",
        "VALUE": "0.23"
      },
      {
        "DATE": "2008-06-24",
        "VALUE": "0.20"
      },
      {
        "DATE": "2007-06-25",
        "VALUE": "0.25"
      },
      {
        "DATE": "2006-07-17",
        "VALUE": "0.28"
      },
      {
        "DATE": "2005-07-14",
        "VALUE": "0.10"
      },
      {
        "DATE": "2004-06-17",
        "VALUE": "0.06"
      },
      {
        "DATE": "2003-07-10",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 6.15,
    "EPS_avg_7": "0.54",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.51"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.66"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.56"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.57"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.47"
      }
    ]
  },
  {
    "code": "sh600015",
    "last_close_date": "2018-11-21",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "13.10",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 9,
    "EPS_year1": "1.48",
    "price_change_percent_in_one_year": "-17.05",
    "dividents": [
      {
        "DATE": "2018-06-28",
        "VALUE": "0.15"
      },
      {
        "DATE": "2017-06-28",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-07-07",
        "VALUE": "0.30"
      },
      {
        "DATE": "2015-07-07",
        "VALUE": "0.30"
      },
      {
        "DATE": "2014-07-09",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-07-23",
        "VALUE": "0.25"
      },
      {
        "DATE": "2012-05-17",
        "VALUE": "0.13"
      },
      {
        "DATE": "2011-04-20",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-05-19",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-15",
        "VALUE": "0.05"
      },
      {
        "DATE": "2008-05-05",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-04-16",
        "VALUE": "0.04"
      },
      {
        "DATE": "2006-03-30",
        "VALUE": "0.04"
      },
      {
        "DATE": "2005-06-01",
        "VALUE": "0.03"
      },
      {
        "DATE": "2004-05-20",
        "VALUE": "0.00"
      },
      {
        "DATE": "2003-11-03",
        "VALUE": "0.10"
      }
    ],
    "last_close_date_price": 7.88,
    "EPS_avg_7": "1.27",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.07"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.48"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.53"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.47"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.40"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.21"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.00"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.79"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.47"
      }
    ]
  },
  {
    "code": "sh600016",
    "last_close_date": "2018-11-21",
    "divident_per_share_year1": "0.24",
    "NAV_per_share_year1": "8.54",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 8.39,
    "EPS_year1": "1.13",
    "price_change_percent_in_one_year": "-7.60",
    "dividents": [
      {
        "DATE": "2018-07-04",
        "VALUE": "0.08"
      },
      {
        "DATE": "2017-09-25",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-07-05",
        "VALUE": "0.14"
      },
      {
        "DATE": "2016-09-23",
        "VALUE": "0.10"
      },
      {
        "DATE": "2016-06-23",
        "VALUE": "0.13"
      },
      {
        "DATE": "2016-02-25",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-07-06",
        "VALUE": "0.09"
      },
      {
        "DATE": "2015-01-08",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-01-08",
        "VALUE": "0.06"
      },
      {
        "DATE": "2014-06-24",
        "VALUE": "0.06"
      },
      {
        "DATE": "2013-09-09",
        "VALUE": "0.10"
      },
      {
        "DATE": "2013-06-26",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-08-31",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-06-25",
        "VALUE": "0.19"
      },
      {
        "DATE": "2011-06-08",
        "VALUE": "0.06"
      },
      {
        "DATE": "2010-07-14",
        "VALUE": "0.03"
      },
      {
        "DATE": "2009-05-25",
        "VALUE": "0.03"
      },
      {
        "DATE": "2008-04-03",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-04-14",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-04-15",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-04-16",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-06-18",
        "VALUE": "0.00"
      },
      {
        "DATE": "2001-05-30",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 6.16,
    "EPS_avg_7": "0.97",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.97"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.13"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.09"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.08"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.02"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.97"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.87"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.64"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.40"
      }
    ]
  },
  {
    "code": "sh600018",
    "last_close_date": "2018-11-21",
    "divident_per_share_year1": "0.16",
    "NAV_per_share_year1": "2.40",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 6.65,
    "EPS_year1": "0.50",
    "price_change_percent_in_one_year": "29.88",
    "dividents": [
      {
        "DATE": "2018-06-07",
        "VALUE": "0.17"
      },
      {
        "DATE": "2017-07-17",
        "VALUE": "0.16"
      },
      {
        "DATE": "2016-07-18",
        "VALUE": "0.15"
      },
      {
        "DATE": "2015-05-14",
        "VALUE": "0.15"
      },
      {
        "DATE": "2014-07-28",
        "VALUE": "0.12"
      },
      {
        "DATE": "2013-07-23",
        "VALUE": "0.13"
      },
      {
        "DATE": "2012-07-10",
        "VALUE": "0.12"
      },
      {
        "DATE": "2011-07-13",
        "VALUE": "0.11"
      },
      {
        "DATE": "2010-07-01",
        "VALUE": "0.09"
      },
      {
        "DATE": "2009-06-19",
        "VALUE": "0.09"
      },
      {
        "DATE": "2008-06-11",
        "VALUE": "0.08"
      },
      {
        "DATE": "2007-06-21",
        "VALUE": "0.07"
      },
      {
        "DATE": "2006-05-12",
        "VALUE": "0.03"
      },
      {
        "DATE": "2005-06-10",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-07-12",
        "VALUE": "0.01"
      },
      {
        "DATE": "2001-05-22",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 5.64,
    "EPS_avg_7": "0.29",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.22"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.29"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.29"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.23"
      }
    ]
  },
  {
    "code": "sh600019",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.21",
    "NAV_per_share_year1": "6.80",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 8.64,
    "EPS_year1": "0.85",
    "price_change_percent_in_one_year": "36.06",
    "dividents": [
      {
        "DATE": "2018-06-07",
        "VALUE": "0.45"
      },
      {
        "DATE": "2017-06-13",
        "VALUE": "0.21"
      },
      {
        "DATE": "2016-06-07",
        "VALUE": "0.04"
      },
      {
        "DATE": "2015-05-13",
        "VALUE": "0.13"
      },
      {
        "DATE": "2014-06-27",
        "VALUE": "0.07"
      },
      {
        "DATE": "2013-06-17",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-06-08",
        "VALUE": "0.16"
      },
      {
        "DATE": "2011-06-08",
        "VALUE": "0.24"
      },
      {
        "DATE": "2010-05-21",
        "VALUE": "0.16"
      },
      {
        "DATE": "2009-06-12",
        "VALUE": "0.14"
      },
      {
        "DATE": "2008-05-12",
        "VALUE": "0.28"
      },
      {
        "DATE": "2007-05-28",
        "VALUE": "0.28"
      },
      {
        "DATE": "2006-05-24",
        "VALUE": "0.25"
      },
      {
        "DATE": "2005-06-10",
        "VALUE": "0.25"
      },
      {
        "DATE": "2004-06-18",
        "VALUE": "0.14"
      },
      {
        "DATE": "2002-06-18",
        "VALUE": "0.07"
      },
      {
        "DATE": "2001-06-11",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 7.27,
    "EPS_avg_7": "0.37",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.71"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.85"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.41"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.58"
      }
    ]
  },
  {
    "code": "sh600020",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.09",
    "NAV_per_share_year1": "-3.95",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 4.86,
    "EPS_year1": "0.40",
    "price_change_percent_in_one_year": "8.24",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.17"
      },
      {
        "DATE": "2017-07-03",
        "VALUE": "0.09"
      },
      {
        "DATE": "2016-07-15",
        "VALUE": "0.16"
      },
      {
        "DATE": "2015-06-17",
        "VALUE": "0.12"
      },
      {
        "DATE": "2014-07-09",
        "VALUE": "0.06"
      },
      {
        "DATE": "2013-07-01",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-06-27",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-07-26",
        "VALUE": "0.10"
      },
      {
        "DATE": "2010-05-31",
        "VALUE": "0.06"
      },
      {
        "DATE": "2009-06-11",
        "VALUE": "0.05"
      },
      {
        "DATE": "2008-07-04",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-06-29",
        "VALUE": "0.05"
      },
      {
        "DATE": "2005-07-26",
        "VALUE": "0.05"
      },
      {
        "DATE": "2004-07-08",
        "VALUE": "0.23"
      }
    ],
    "last_close_date_price": 4.59,
    "EPS_avg_7": "0.29",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.29"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.40"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.40"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.13"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.23"
      }
    ]
  },
  {
    "code": "sh600021",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "4.06",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 9.14,
    "EPS_year1": "0.35",
    "price_change_percent_in_one_year": "-24.71",
    "dividents": [
      {
        "DATE": "2018-05-17",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-06-22",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-07-28",
        "VALUE": "0.20"
      },
      {
        "DATE": "2015-07-21",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-07-29",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-07-16",
        "VALUE": "0.12"
      },
      {
        "DATE": "2012-07-09",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-05-18",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-05-21",
        "VALUE": "0.12"
      },
      {
        "DATE": "2006-05-12",
        "VALUE": "0.12"
      },
      {
        "DATE": "2005-05-16",
        "VALUE": "0.13"
      },
      {
        "DATE": "2004-06-18",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 7.72,
    "EPS_avg_7": "0.38",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.29"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.07"
      }
    ]
  },
  {
    "code": "sh600028",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.27",
    "NAV_per_share_year1": "5.13",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 6.13,
    "EPS_year1": "0.42",
    "price_change_percent_in_one_year": "13.31",
    "dividents": [
      {
        "DATE": "2018-09-11",
        "VALUE": "0.16"
      },
      {
        "DATE": "2018-06-04",
        "VALUE": "0.40"
      },
      {
        "DATE": "2017-09-19",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-07-18",
        "VALUE": "0.17"
      },
      {
        "DATE": "2016-09-20",
        "VALUE": "0.08"
      },
      {
        "DATE": "2016-06-23",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-09-22",
        "VALUE": "0.09"
      },
      {
        "DATE": "2015-06-18",
        "VALUE": "0.11"
      },
      {
        "DATE": "2014-09-23",
        "VALUE": "0.09"
      },
      {
        "DATE": "2014-05-30",
        "VALUE": "0.14"
      },
      {
        "DATE": "2013-09-11",
        "VALUE": "0.09"
      },
      {
        "DATE": "2013-06-18",
        "VALUE": "0.15"
      },
      {
        "DATE": "2012-09-14",
        "VALUE": "0.07"
      },
      {
        "DATE": "2012-05-25",
        "VALUE": "0.14"
      },
      {
        "DATE": "2011-09-16",
        "VALUE": "0.07"
      },
      {
        "DATE": "2011-06-17",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-09-10",
        "VALUE": "0.06"
      },
      {
        "DATE": "2010-06-11",
        "VALUE": "0.08"
      },
      {
        "DATE": "2009-09-21",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-12",
        "VALUE": "0.06"
      },
      {
        "DATE": "2008-09-19",
        "VALUE": "0.02"
      },
      {
        "DATE": "2008-06-13",
        "VALUE": "0.08"
      },
      {
        "DATE": "2007-09-18",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-06-15",
        "VALUE": "0.08"
      },
      {
        "DATE": "2006-09-13",
        "VALUE": "0.03"
      },
      {
        "DATE": "2006-06-16",
        "VALUE": "0.06"
      },
      {
        "DATE": "2005-09-20",
        "VALUE": "0.03"
      },
      {
        "DATE": "2005-06-03",
        "VALUE": "0.06"
      },
      {
        "DATE": "2004-09-20",
        "VALUE": "0.03"
      },
      {
        "DATE": "2004-06-04",
        "VALUE": "0.04"
      },
      {
        "DATE": "2003-09-19",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-09-20",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-07-19",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 5.91,
    "EPS_avg_7": "0.45",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.50"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.39"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.56"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.59"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.58"
      }
    ]
  },
  {
    "code": "sh600030",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.35",
    "NAV_per_share_year1": "11.23",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 18.1,
    "EPS_year1": "0.94",
    "price_change_percent_in_one_year": "12.70",
    "dividents": [
      {
        "DATE": "2018-08-23",
        "VALUE": "0.40"
      },
      {
        "DATE": "2017-08-17",
        "VALUE": "0.35"
      },
      {
        "DATE": "2016-08-18",
        "VALUE": "0.50"
      },
      {
        "DATE": "2015-08-13",
        "VALUE": "0.28"
      },
      {
        "DATE": "2014-08-14",
        "VALUE": "0.14"
      },
      {
        "DATE": "2013-08-07",
        "VALUE": "0.27"
      },
      {
        "DATE": "2012-08-01",
        "VALUE": "0.39"
      },
      {
        "DATE": "2011-06-15",
        "VALUE": "0.41"
      },
      {
        "DATE": "2010-06-23",
        "VALUE": "0.27"
      },
      {
        "DATE": "2009-06-10",
        "VALUE": "0.27"
      },
      {
        "DATE": "2008-04-23",
        "VALUE": "0.14"
      },
      {
        "DATE": "2007-05-18",
        "VALUE": "0.05"
      },
      {
        "DATE": "2006-07-03",
        "VALUE": "0.03"
      },
      {
        "DATE": "2005-07-14",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-06-10",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-08-27",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 17.04,
    "EPS_avg_7": "0.91",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.60"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.94"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.86"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.71"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.94"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.44"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.12"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.94"
      }
    ]
  },
  {
    "code": "sh600031",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.03",
    "NAV_per_share_year1": "2.74",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 9.07,
    "EPS_year1": "0.27",
    "price_change_percent_in_one_year": "48.69",
    "dividents": [
      {
        "DATE": "2018-08-20",
        "VALUE": "0.16"
      },
      {
        "DATE": "2017-10-23",
        "VALUE": "0.02"
      },
      {
        "DATE": "2017-08-23",
        "VALUE": "0.01"
      },
      {
        "DATE": "2016-08-23",
        "VALUE": "0.01"
      },
      {
        "DATE": "2015-06-10",
        "VALUE": "0.05"
      },
      {
        "DATE": "2014-08-07",
        "VALUE": "0.12"
      },
      {
        "DATE": "2013-08-21",
        "VALUE": "0.24"
      },
      {
        "DATE": "2012-08-07",
        "VALUE": "0.29"
      },
      {
        "DATE": "2011-04-21",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-10-21",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-06-23",
        "VALUE": "0.03"
      },
      {
        "DATE": "2009-06-25",
        "VALUE": "0.03"
      },
      {
        "DATE": "2008-07-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-04-20",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-06-29",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-05-10",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 7.95,
    "EPS_avg_7": "0.37",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.63"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.02"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.09"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.37"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.73"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.11"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.72"
      }
    ]
  },
  {
    "code": "sh600033",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "3.17",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 3.65,
    "EPS_year1": "0.24",
    "price_change_percent_in_one_year": "5.49",
    "dividents": [
      {
        "DATE": "2018-06-14",
        "VALUE": "0.12"
      },
      {
        "DATE": "2017-06-27",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-06-07",
        "VALUE": "0.10"
      },
      {
        "DATE": "2015-07-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-06-19",
        "VALUE": "0.10"
      },
      {
        "DATE": "2013-06-13",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-06-08",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-08-05",
        "VALUE": "0.10"
      },
      {
        "DATE": "2010-06-11",
        "VALUE": "0.07"
      },
      {
        "DATE": "2009-05-20",
        "VALUE": "0.08"
      },
      {
        "DATE": "2008-04-16",
        "VALUE": "0.13"
      },
      {
        "DATE": "2007-07-04",
        "VALUE": "0.13"
      },
      {
        "DATE": "2006-05-31",
        "VALUE": "0.13"
      },
      {
        "DATE": "2005-06-15",
        "VALUE": "0.13"
      },
      {
        "DATE": "2004-06-02",
        "VALUE": "0.04"
      },
      {
        "DATE": "2003-04-29",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-06-26",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 3.11,
    "EPS_avg_7": "0.20",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.22"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.20"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.15"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.16"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.19"
      }
    ]
  },
  {
    "code": "sh600036",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.74",
    "NAV_per_share_year1": "18.36",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 29.02,
    "EPS_year1": "2.78",
    "price_change_percent_in_one_year": "64.89",
    "dividents": [
      {
        "DATE": "2018-07-11",
        "VALUE": "0.84"
      },
      {
        "DATE": "2017-06-13",
        "VALUE": "0.74"
      },
      {
        "DATE": "2016-07-12",
        "VALUE": "0.69"
      },
      {
        "DATE": "2015-07-02",
        "VALUE": "0.67"
      },
      {
        "DATE": "2014-07-10",
        "VALUE": "0.62"
      },
      {
        "DATE": "2013-06-07",
        "VALUE": "0.54"
      },
      {
        "DATE": "2012-06-06",
        "VALUE": "0.36"
      },
      {
        "DATE": "2011-06-09",
        "VALUE": "0.25"
      },
      {
        "DATE": "2010-06-30",
        "VALUE": "0.18"
      },
      {
        "DATE": "2009-07-02",
        "VALUE": "0.06"
      },
      {
        "DATE": "2008-07-25",
        "VALUE": "0.16"
      },
      {
        "DATE": "2007-07-03",
        "VALUE": "0.07"
      },
      {
        "DATE": "2006-09-20",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-06-15",
        "VALUE": "0.04"
      },
      {
        "DATE": "2005-06-17",
        "VALUE": "0.03"
      },
      {
        "DATE": "2004-05-10",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-07-15",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 28.3,
    "EPS_avg_7": "2.18",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "2.66"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "2.78"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "2.46"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "2.29"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "2.22"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "2.30"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.80"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.43"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "1.05"
      }
    ]
  },
  {
    "code": "sh600048",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.31",
    "NAV_per_share_year1": "8.99",
    "year1": "2017",
    "pay_divident_since": "2007",
    "price_year1": 14.15,
    "EPS_year1": "1.32",
    "price_change_percent_in_one_year": "54.98",
    "dividents": [
      {
        "DATE": "2018-06-07",
        "VALUE": "0.40"
      },
      {
        "DATE": "2017-06-08",
        "VALUE": "0.31"
      },
      {
        "DATE": "2016-05-16",
        "VALUE": "0.31"
      },
      {
        "DATE": "2015-06-10",
        "VALUE": "0.19"
      },
      {
        "DATE": "2014-05-21",
        "VALUE": "0.18"
      },
      {
        "DATE": "2013-05-31",
        "VALUE": "0.14"
      },
      {
        "DATE": "2012-06-15",
        "VALUE": "0.11"
      },
      {
        "DATE": "2011-05-16",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-04-26",
        "VALUE": "0.03"
      },
      {
        "DATE": "2009-04-29",
        "VALUE": "0.03"
      },
      {
        "DATE": "2008-03-10",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-03-30",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 13.22,
    "EPS_avg_7": "0.95",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.81"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.32"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.10"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.04"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.03"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.91"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.71"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.55"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.42"
      }
    ]
  },
  {
    "code": "sh600066",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "1.00",
    "NAV_per_share_year1": "6.36",
    "year1": "2017",
    "pay_divident_since": "1998",
    "price_year1": 24.07,
    "EPS_year1": "1.41",
    "price_change_percent_in_one_year": "22.87",
    "dividents": [
      {
        "DATE": "2018-07-26",
        "VALUE": "0.50"
      },
      {
        "DATE": "2017-06-13",
        "VALUE": "1.00"
      },
      {
        "DATE": "2016-05-20",
        "VALUE": "1.50"
      },
      {
        "DATE": "2015-05-19",
        "VALUE": "0.67"
      },
      {
        "DATE": "2014-05-23",
        "VALUE": "0.29"
      },
      {
        "DATE": "2013-05-14",
        "VALUE": "0.22"
      },
      {
        "DATE": "2012-05-08",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-05-13",
        "VALUE": "0.07"
      },
      {
        "DATE": "2010-05-17",
        "VALUE": "0.23"
      },
      {
        "DATE": "2009-05-14",
        "VALUE": "0.14"
      },
      {
        "DATE": "2008-05-14",
        "VALUE": "0.13"
      },
      {
        "DATE": "2007-04-04",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-04-19",
        "VALUE": "0.12"
      },
      {
        "DATE": "2005-04-18",
        "VALUE": "0.05"
      },
      {
        "DATE": "2004-04-14",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-04-11",
        "VALUE": "0.04"
      },
      {
        "DATE": "2001-07-09",
        "VALUE": "0.04"
      },
      {
        "DATE": "1999-07-05",
        "VALUE": "0.03"
      },
      {
        "DATE": "1998-06-04",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 11.58,
    "EPS_avg_7": "1.14",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.54"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.41"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.83"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.60"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.02"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.74"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.39"
      }
    ]
  },
  {
    "code": "sh600068",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.21",
    "NAV_per_share_year1": "5.29",
    "year1": "2017",
    "pay_divident_since": "1999",
    "price_year1": 8.2,
    "EPS_year1": "0.89",
    "price_change_percent_in_one_year": "-10.77",
    "dividents": [
      {
        "DATE": "2018-06-22",
        "VALUE": "0.27"
      },
      {
        "DATE": "2017-06-23",
        "VALUE": "0.21"
      },
      {
        "DATE": "2016-06-29",
        "VALUE": "0.18"
      },
      {
        "DATE": "2015-06-25",
        "VALUE": "0.15"
      },
      {
        "DATE": "2014-06-26",
        "VALUE": "0.10"
      },
      {
        "DATE": "2013-06-18",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-06-14",
        "VALUE": "0.08"
      },
      {
        "DATE": "2011-06-08",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-07-14",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-22",
        "VALUE": "0.05"
      },
      {
        "DATE": "2008-06-02",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-06-12",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-07-17",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-08-04",
        "VALUE": "0.00"
      },
      {
        "DATE": "2002-05-31",
        "VALUE": "0.00"
      },
      {
        "DATE": "2001-06-28",
        "VALUE": "0.02"
      },
      {
        "DATE": "1999-06-29",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 6.58,
    "EPS_avg_7": "0.53",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.51"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.89"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.58"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.30"
      }
    ]
  },
  {
    "code": "sh600089",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.18",
    "NAV_per_share_year1": "7.00",
    "year1": "2017",
    "pay_divident_since": "1998",
    "price_year1": 9.91,
    "EPS_year1": "0.61",
    "price_change_percent_in_one_year": "8.54",
    "dividents": [
      {
        "DATE": "2018-07-04",
        "VALUE": "0.21"
      },
      {
        "DATE": "2017-05-19",
        "VALUE": "0.18"
      },
      {
        "DATE": "2016-07-05",
        "VALUE": "0.16"
      },
      {
        "DATE": "2015-07-22",
        "VALUE": "0.14"
      },
      {
        "DATE": "2014-06-13",
        "VALUE": "0.11"
      },
      {
        "DATE": "2013-05-30",
        "VALUE": "0.09"
      },
      {
        "DATE": "2012-05-30",
        "VALUE": "0.06"
      },
      {
        "DATE": "2011-06-03",
        "VALUE": "0.05"
      },
      {
        "DATE": "2010-05-05",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-02",
        "VALUE": "0.03"
      },
      {
        "DATE": "2008-05-19",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-06-08",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-08-11",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-07-22",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-06-11",
        "VALUE": "0.01"
      },
      {
        "DATE": "2003-07-16",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-06-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2001-05-29",
        "VALUE": "0.01"
      },
      {
        "DATE": "1998-07-21",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 6.95,
    "EPS_avg_7": "0.45",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.52"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.61"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.59"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.36"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.47"
      }
    ]
  },
  {
    "code": "sh600098",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.10",
    "NAV_per_share_year1": "5.55",
    "year1": "2017",
    "pay_divident_since": "2000",
    "price_year1": 7.07,
    "EPS_year1": "0.25",
    "price_change_percent_in_one_year": "-36.99",
    "dividents": [
      {
        "DATE": "2018-07-03",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-06-27",
        "VALUE": "0.10"
      },
      {
        "DATE": "2016-06-17",
        "VALUE": "0.19"
      },
      {
        "DATE": "2015-07-07",
        "VALUE": "0.18"
      },
      {
        "DATE": "2014-06-26",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-06-06",
        "VALUE": "0.16"
      },
      {
        "DATE": "2012-05-23",
        "VALUE": "0.08"
      },
      {
        "DATE": "2011-06-02",
        "VALUE": "0.15"
      },
      {
        "DATE": "2010-06-02",
        "VALUE": "0.14"
      },
      {
        "DATE": "2009-06-11",
        "VALUE": "0.07"
      },
      {
        "DATE": "2008-05-06",
        "VALUE": "0.20"
      },
      {
        "DATE": "2007-05-09",
        "VALUE": "0.15"
      },
      {
        "DATE": "2006-05-09",
        "VALUE": "0.11"
      },
      {
        "DATE": "2005-05-10",
        "VALUE": "0.10"
      },
      {
        "DATE": "2004-04-12",
        "VALUE": "0.16"
      },
      {
        "DATE": "2003-05-15",
        "VALUE": "0.14"
      },
      {
        "DATE": "2002-04-26",
        "VALUE": "0.14"
      },
      {
        "DATE": "2001-05-08",
        "VALUE": "0.06"
      },
      {
        "DATE": "2000-05-18",
        "VALUE": "0.05"
      }
    ],
    "last_close_date_price": 5.7,
    "EPS_avg_7": "0.33",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.24"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.14"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.27"
      }
    ]
  },
  {
    "code": "sh600100",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.25",
    "NAV_per_share_year1": "6.32",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 9.8,
    "EPS_year1": "0.03",
    "price_change_percent_in_one_year": "-29.24",
    "dividents": [
      {
        "DATE": "2018-07-04",
        "VALUE": "0.01"
      },
      {
        "DATE": "2017-07-05",
        "VALUE": "0.25"
      },
      {
        "DATE": "2016-07-06",
        "VALUE": "0.13"
      },
      {
        "DATE": "2015-07-16",
        "VALUE": "0.08"
      },
      {
        "DATE": "2014-07-03",
        "VALUE": "0.07"
      },
      {
        "DATE": "2013-06-21",
        "VALUE": "0.07"
      },
      {
        "DATE": "2012-06-28",
        "VALUE": "0.07"
      },
      {
        "DATE": "2011-05-10",
        "VALUE": "0.03"
      },
      {
        "DATE": "2010-07-05",
        "VALUE": "0.03"
      },
      {
        "DATE": "2009-07-08",
        "VALUE": "0.02"
      },
      {
        "DATE": "2008-08-14",
        "VALUE": "0.02"
      },
      {
        "DATE": "2007-07-04",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-07-13",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-06-02",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-07-08",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-08-21",
        "VALUE": "0.04"
      },
      {
        "DATE": "2002-06-14",
        "VALUE": "0.04"
      },
      {
        "DATE": "2001-05-15",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 10.42,
    "EPS_avg_7": "0.41",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "-0.19"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.45"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.44"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.20"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.16"
      }
    ]
  },
  {
    "code": "sh600101",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.05",
    "NAV_per_share_year1": "5.88",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 9.23,
    "EPS_year1": "0.30",
    "price_change_percent_in_one_year": "-23.40",
    "dividents": [
      {
        "DATE": "2018-08-07",
        "VALUE": "0.05"
      },
      {
        "DATE": "2017-07-04",
        "VALUE": "0.05"
      },
      {
        "DATE": "2016-08-03",
        "VALUE": "0.05"
      },
      {
        "DATE": "2015-06-24",
        "VALUE": "0.05"
      },
      {
        "DATE": "2014-07-09",
        "VALUE": "0.05"
      },
      {
        "DATE": "2013-08-01",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-06-25",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-05-19",
        "VALUE": "0.07"
      },
      {
        "DATE": "2010-04-29",
        "VALUE": "0.05"
      },
      {
        "DATE": "2005-07-15",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-06-14",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-08-21",
        "VALUE": "0.13"
      },
      {
        "DATE": "2002-07-18",
        "VALUE": "0.10"
      },
      {
        "DATE": "2001-05-09",
        "VALUE": "0.10"
      }
    ],
    "last_close_date_price": 7.17,
    "EPS_avg_7": "0.38",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.32"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.68"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.47"
      }
    ]
  },
  {
    "code": "sh600104",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "1.65",
    "NAV_per_share_year1": "18.22",
    "year1": "2017",
    "pay_divident_since": "2000",
    "price_year1": 32.04,
    "EPS_year1": "2.96",
    "price_change_percent_in_one_year": "36.63",
    "dividents": [
      {
        "DATE": "2018-07-16",
        "VALUE": "1.83"
      },
      {
        "DATE": "2017-06-15",
        "VALUE": "1.65"
      },
      {
        "DATE": "2016-07-07",
        "VALUE": "1.28"
      },
      {
        "DATE": "2015-07-21",
        "VALUE": "1.23"
      },
      {
        "DATE": "2014-07-29",
        "VALUE": "1.13"
      },
      {
        "DATE": "2013-07-10",
        "VALUE": "0.57"
      },
      {
        "DATE": "2012-07-04",
        "VALUE": "0.28"
      },
      {
        "DATE": "2011-06-30",
        "VALUE": "0.16"
      },
      {
        "DATE": "2010-06-07",
        "VALUE": "0.03"
      },
      {
        "DATE": "2009-06-19",
        "VALUE": "0.01"
      },
      {
        "DATE": "2008-06-04",
        "VALUE": "0.12"
      },
      {
        "DATE": "2007-08-08",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-05-16",
        "VALUE": "0.07"
      },
      {
        "DATE": "2005-06-21",
        "VALUE": "0.07"
      },
      {
        "DATE": "2004-06-08",
        "VALUE": "0.03"
      },
      {
        "DATE": "2003-06-16",
        "VALUE": "0.08"
      },
      {
        "DATE": "2002-06-17",
        "VALUE": "0.03"
      },
      {
        "DATE": "2000-08-23",
        "VALUE": "0.07"
      }
    ],
    "last_close_date_price": 25.77,
    "EPS_avg_7": "2.28",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "2.37"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "2.96"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "2.74"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "2.55"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "2.39"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "2.12"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.78"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.45"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "1.27"
      }
    ]
  },
  {
    "code": "sh600153",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.40",
    "NAV_per_share_year1": "8.11",
    "year1": "2017",
    "pay_divident_since": "1999",
    "price_year1": 11.12,
    "EPS_year1": "1.17",
    "price_change_percent_in_one_year": "3.93",
    "dividents": [
      {
        "DATE": "2018-07-19",
        "VALUE": "0.20"
      },
      {
        "DATE": "2017-07-24",
        "VALUE": "0.40"
      },
      {
        "DATE": "2016-06-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2015-07-22",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-12-12",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-02-11",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-07-08",
        "VALUE": "0.12"
      },
      {
        "DATE": "2012-07-16",
        "VALUE": "0.08"
      },
      {
        "DATE": "2011-07-11",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-07-15",
        "VALUE": "0.11"
      },
      {
        "DATE": "2009-08-24",
        "VALUE": "0.11"
      },
      {
        "DATE": "2008-08-01",
        "VALUE": "0.07"
      },
      {
        "DATE": "2007-06-18",
        "VALUE": "0.11"
      },
      {
        "DATE": "2006-06-22",
        "VALUE": "0.09"
      },
      {
        "DATE": "2005-07-08",
        "VALUE": "0.08"
      },
      {
        "DATE": "2004-06-23",
        "VALUE": "0.07"
      },
      {
        "DATE": "2002-07-05",
        "VALUE": "0.01"
      },
      {
        "DATE": "2001-06-18",
        "VALUE": "0.03"
      },
      {
        "DATE": "1999-05-25",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 7.96,
    "EPS_avg_7": "0.94",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.61"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.17"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.01"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.93"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.94"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.95"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.76"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.80"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.62"
      }
    ]
  },
  {
    "code": "sh600168",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.13",
    "NAV_per_share_year1": "6.14",
    "year1": "2017",
    "pay_divident_since": "1999",
    "price_year1": 8.39,
    "EPS_year1": "0.46",
    "price_change_percent_in_one_year": "-19.79",
    "dividents": [
      {
        "DATE": "2018-05-03",
        "VALUE": "0.14"
      },
      {
        "DATE": "2017-05-11",
        "VALUE": "0.13"
      },
      {
        "DATE": "2016-04-27",
        "VALUE": "0.14"
      },
      {
        "DATE": "2015-04-29",
        "VALUE": "0.14"
      },
      {
        "DATE": "2014-04-11",
        "VALUE": "0.05"
      },
      {
        "DATE": "2013-04-19",
        "VALUE": "0.02"
      },
      {
        "DATE": "2012-04-13",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-05-06",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-05-28",
        "VALUE": "0.03"
      },
      {
        "DATE": "2009-05-19",
        "VALUE": "0.03"
      },
      {
        "DATE": "2008-06-18",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-06-20",
        "VALUE": "0.04"
      },
      {
        "DATE": "2006-07-14",
        "VALUE": "0.04"
      },
      {
        "DATE": "2005-06-21",
        "VALUE": "0.04"
      },
      {
        "DATE": "2004-06-18",
        "VALUE": "0.04"
      },
      {
        "DATE": "2003-06-06",
        "VALUE": "0.09"
      },
      {
        "DATE": "2002-05-21",
        "VALUE": "0.16"
      },
      {
        "DATE": "2001-06-07",
        "VALUE": "0.31"
      },
      {
        "DATE": "2000-05-24",
        "VALUE": "0.16"
      },
      {
        "DATE": "1999-07-20",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 6.13,
    "EPS_avg_7": "0.35",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.32"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.07"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.16"
      }
    ]
  },
  {
    "code": "sh600170",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.11",
    "NAV_per_share_year1": "2.81",
    "year1": "2017",
    "pay_divident_since": "2000",
    "price_year1": 3.72,
    "EPS_year1": "0.28",
    "price_change_percent_in_one_year": "-21.35",
    "dividents": [
      {
        "DATE": "2018-06-12",
        "VALUE": "0.14"
      },
      {
        "DATE": "2017-05-17",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-05-13",
        "VALUE": "0.10"
      },
      {
        "DATE": "2015-05-11",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.06"
      },
      {
        "DATE": "2013-07-16",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-05-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-05-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-05-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-06-28",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-08-20",
        "VALUE": "0.01"
      },
      {
        "DATE": "2009-06-16",
        "VALUE": "0.01"
      },
      {
        "DATE": "2008-07-29",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-08-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-08-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-07-22",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-07-20",
        "VALUE": "0.01"
      },
      {
        "DATE": "2003-09-03",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-07-30",
        "VALUE": "0.01"
      },
      {
        "DATE": "2001-08-20",
        "VALUE": "0.01"
      },
      {
        "DATE": "2000-08-18",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 3.1,
    "EPS_avg_7": "0.21",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.19"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.15"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.10"
      }
    ]
  },
  {
    "code": "sh600177",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.36",
    "NAV_per_share_year1": "6.71",
    "year1": "2017",
    "pay_divident_since": "1999",
    "price_year1": 9.17,
    "EPS_year1": "0.08",
    "price_change_percent_in_one_year": "-34.41",
    "dividents": [
      {
        "DATE": "2018-06-06",
        "VALUE": "0.40"
      },
      {
        "DATE": "2017-06-02",
        "VALUE": "0.36"
      },
      {
        "DATE": "2016-06-07",
        "VALUE": "0.57"
      },
      {
        "DATE": "2015-06-09",
        "VALUE": "0.31"
      },
      {
        "DATE": "2014-05-22",
        "VALUE": "0.31"
      },
      {
        "DATE": "2013-05-22",
        "VALUE": "0.31"
      },
      {
        "DATE": "2012-06-08",
        "VALUE": "0.25"
      },
      {
        "DATE": "2011-05-27",
        "VALUE": "0.31"
      },
      {
        "DATE": "2010-04-29",
        "VALUE": "0.34"
      },
      {
        "DATE": "2009-06-04",
        "VALUE": "0.19"
      },
      {
        "DATE": "2008-06-05",
        "VALUE": "0.31"
      },
      {
        "DATE": "2007-06-01",
        "VALUE": "0.15"
      },
      {
        "DATE": "2006-06-01",
        "VALUE": "0.12"
      },
      {
        "DATE": "2005-04-28",
        "VALUE": "0.08"
      },
      {
        "DATE": "2004-04-15",
        "VALUE": "0.09"
      },
      {
        "DATE": "2003-05-16",
        "VALUE": "0.03"
      },
      {
        "DATE": "2002-05-14",
        "VALUE": "0.03"
      },
      {
        "DATE": "2001-04-23",
        "VALUE": "0.03"
      },
      {
        "DATE": "2000-04-18",
        "VALUE": "0.02"
      },
      {
        "DATE": "1999-05-10",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 7.77,
    "EPS_avg_7": "0.65",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.65"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.08"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.08"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.22"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.88"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.49"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.75"
      }
    ]
  },
  {
    "code": "sh600188",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.12",
    "NAV_per_share_year1": "1.45",
    "year1": "2017",
    "pay_divident_since": "1998",
    "price_year1": 14.52,
    "EPS_year1": "1.38",
    "price_change_percent_in_one_year": "33.70",
    "dividents": [
      {
        "DATE": "2018-06-08",
        "VALUE": "0.48"
      },
      {
        "DATE": "2017-07-13",
        "VALUE": "0.12"
      },
      {
        "DATE": "2016-06-29",
        "VALUE": "0.01"
      },
      {
        "DATE": "2015-06-17",
        "VALUE": "0.02"
      },
      {
        "DATE": "2014-06-18",
        "VALUE": "0.02"
      },
      {
        "DATE": "2013-06-20",
        "VALUE": "0.36"
      },
      {
        "DATE": "2012-07-11",
        "VALUE": "0.57"
      },
      {
        "DATE": "2011-06-21",
        "VALUE": "0.59"
      },
      {
        "DATE": "2010-07-19",
        "VALUE": "0.25"
      },
      {
        "DATE": "2009-07-20",
        "VALUE": "0.40"
      },
      {
        "DATE": "2008-07-21",
        "VALUE": "0.17"
      },
      {
        "DATE": "2007-07-03",
        "VALUE": "0.20"
      },
      {
        "DATE": "2006-07-13",
        "VALUE": "0.22"
      },
      {
        "DATE": "2005-07-26",
        "VALUE": "0.16"
      },
      {
        "DATE": "2004-07-08",
        "VALUE": "0.10"
      },
      {
        "DATE": "2003-07-11",
        "VALUE": "0.06"
      },
      {
        "DATE": "2002-06-21",
        "VALUE": "0.06"
      },
      {
        "DATE": "2001-06-22",
        "VALUE": "0.05"
      },
      {
        "DATE": "2000-06-28",
        "VALUE": "0.05"
      },
      {
        "DATE": "1999-06-15",
        "VALUE": "0.03"
      },
      {
        "DATE": "1998-10-23",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 10.13,
    "EPS_avg_7": "0.80",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.12"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.38"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.12"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.76"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "1.83"
      }
    ]
  },
  {
    "code": "sh600266",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.28",
    "NAV_per_share_year1": "12.90",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 13.14,
    "EPS_year1": "0.93",
    "price_change_percent_in_one_year": "-1.43",
    "dividents": [
      {
        "DATE": "2018-06-28",
        "VALUE": "0.28"
      },
      {
        "DATE": "2017-07-20",
        "VALUE": "0.28"
      },
      {
        "DATE": "2016-06-16",
        "VALUE": "0.28"
      },
      {
        "DATE": "2015-06-19",
        "VALUE": "0.27"
      },
      {
        "DATE": "2014-04-15",
        "VALUE": "0.25"
      },
      {
        "DATE": "2013-08-15",
        "VALUE": "0.21"
      },
      {
        "DATE": "2012-08-10",
        "VALUE": "0.11"
      },
      {
        "DATE": "2011-07-22",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-08-06",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-08-18",
        "VALUE": "0.02"
      },
      {
        "DATE": "2008-08-18",
        "VALUE": "0.05"
      },
      {
        "DATE": "2007-08-10",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-08-22",
        "VALUE": "0.08"
      },
      {
        "DATE": "2003-08-20",
        "VALUE": "0.06"
      },
      {
        "DATE": "2002-08-21",
        "VALUE": "0.05"
      },
      {
        "DATE": "2001-06-07",
        "VALUE": "0.19"
      }
    ],
    "last_close_date_price": 8.55,
    "EPS_avg_7": "0.85",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.37"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.93"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.92"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.91"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.11"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.70"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.55"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.77"
      }
    ]
  },
  {
    "code": "sh600269",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "6.21",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 5.12,
    "EPS_year1": "0.42",
    "price_change_percent_in_one_year": "1.79",
    "dividents": [
      {
        "DATE": "2018-08-02",
        "VALUE": "0.17"
      },
      {
        "DATE": "2017-05-24",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-05-24",
        "VALUE": "0.15"
      },
      {
        "DATE": "2015-06-04",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-07-10",
        "VALUE": "0.09"
      },
      {
        "DATE": "2013-06-28",
        "VALUE": "0.15"
      },
      {
        "DATE": "2012-05-14",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-07-08",
        "VALUE": "0.10"
      },
      {
        "DATE": "2010-06-23",
        "VALUE": "0.10"
      },
      {
        "DATE": "2009-06-05",
        "VALUE": "0.11"
      },
      {
        "DATE": "2008-05-12",
        "VALUE": "0.11"
      },
      {
        "DATE": "2007-07-10",
        "VALUE": "0.10"
      },
      {
        "DATE": "2006-07-18",
        "VALUE": "0.07"
      },
      {
        "DATE": "2005-06-20",
        "VALUE": "0.07"
      },
      {
        "DATE": "2004-06-09",
        "VALUE": "0.03"
      },
      {
        "DATE": "2003-08-15",
        "VALUE": "0.03"
      },
      {
        "DATE": "2002-05-24",
        "VALUE": "0.03"
      },
      {
        "DATE": "2001-07-02",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 4.19,
    "EPS_avg_7": "0.39",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.36"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.44"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.54"
      }
    ]
  },
  {
    "code": "sh600270",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.50",
    "NAV_per_share_year1": "8.51",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 17.28,
    "EPS_year1": "1.49",
    "price_change_percent_in_one_year": "4.47",
    "dividents": [
      {
        "DATE": "2018-07-09",
        "VALUE": "0.60"
      },
      {
        "DATE": "2017-07-06",
        "VALUE": "0.50"
      },
      {
        "DATE": "2016-07-07",
        "VALUE": "0.50"
      },
      {
        "DATE": "2015-07-08",
        "VALUE": "0.40"
      },
      {
        "DATE": "2014-07-08",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-06-19",
        "VALUE": "0.20"
      },
      {
        "DATE": "2012-06-12",
        "VALUE": "0.20"
      },
      {
        "DATE": "2011-06-13",
        "VALUE": "0.10"
      },
      {
        "DATE": "2010-06-07",
        "VALUE": "0.10"
      },
      {
        "DATE": "2009-06-05",
        "VALUE": "0.10"
      },
      {
        "DATE": "2008-06-06",
        "VALUE": "0.35"
      },
      {
        "DATE": "2007-06-14",
        "VALUE": "0.30"
      },
      {
        "DATE": "2006-06-13",
        "VALUE": "0.10"
      },
      {
        "DATE": "2005-06-13",
        "VALUE": "0.18"
      },
      {
        "DATE": "2004-06-04",
        "VALUE": "0.06"
      },
      {
        "DATE": "2003-07-22",
        "VALUE": "0.10"
      },
      {
        "DATE": "2002-06-19",
        "VALUE": "0.07"
      },
      {
        "DATE": "2001-05-31",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 21.81,
    "EPS_avg_7": "0.90",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.00"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.49"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.10"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.12"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.68"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.75"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.49"
      }
    ]
  },
  {
    "code": "sh600325",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.44",
    "NAV_per_share_year1": "5.55",
    "year1": "2017",
    "pay_divident_since": "2005",
    "price_year1": 7.36,
    "EPS_year1": "0.77",
    "price_change_percent_in_one_year": "-42.50",
    "dividents": [
      {
        "DATE": "2018-07-06",
        "VALUE": "0.30"
      },
      {
        "DATE": "2017-06-07",
        "VALUE": "0.44"
      },
      {
        "DATE": "2016-06-21",
        "VALUE": "0.08"
      },
      {
        "DATE": "2015-05-08",
        "VALUE": "0.04"
      },
      {
        "DATE": "2014-06-27",
        "VALUE": "0.08"
      },
      {
        "DATE": "2013-07-01",
        "VALUE": "0.04"
      },
      {
        "DATE": "2012-05-21",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-06-01",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-06-17",
        "VALUE": "0.04"
      },
      {
        "DATE": "2009-04-01",
        "VALUE": "0.04"
      },
      {
        "DATE": "2008-02-26",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-04-06",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-04-15",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 6.35,
    "EPS_avg_7": "0.41",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.77"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.36"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.35"
      }
    ]
  },
  {
    "code": "sh600350",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.20",
    "NAV_per_share_year1": "3.48",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 5.99,
    "EPS_year1": "0.55",
    "price_change_percent_in_one_year": "-7.56",
    "dividents": [
      {
        "DATE": "2018-06-14",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-07-13",
        "VALUE": "0.20"
      },
      {
        "DATE": "2016-07-13",
        "VALUE": "0.18"
      },
      {
        "DATE": "2015-07-13",
        "VALUE": "0.19"
      },
      {
        "DATE": "2014-07-03",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-07-22",
        "VALUE": "0.13"
      },
      {
        "DATE": "2012-07-27",
        "VALUE": "0.15"
      },
      {
        "DATE": "2011-05-10",
        "VALUE": "0.07"
      },
      {
        "DATE": "2010-06-28",
        "VALUE": "0.06"
      },
      {
        "DATE": "2009-07-23",
        "VALUE": "0.12"
      },
      {
        "DATE": "2008-07-10",
        "VALUE": "0.11"
      },
      {
        "DATE": "2007-07-05",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-06-05",
        "VALUE": "0.09"
      },
      {
        "DATE": "2005-07-04",
        "VALUE": "0.07"
      },
      {
        "DATE": "2004-06-28",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 4.44,
    "EPS_avg_7": "0.51",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.57"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.55"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.64"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.57"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.41"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.41"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.26"
      }
    ]
  },
  {
    "code": "sh600352",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.20",
    "NAV_per_share_year1": "4.86",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 11.71,
    "EPS_year1": "0.76",
    "price_change_percent_in_one_year": "27.14",
    "dividents": [
      {
        "DATE": "2018-06-07",
        "VALUE": "0.25"
      },
      {
        "DATE": "2017-06-08",
        "VALUE": "0.20"
      },
      {
        "DATE": "2016-06-07",
        "VALUE": "0.15"
      },
      {
        "DATE": "2015-06-09",
        "VALUE": "0.25"
      },
      {
        "DATE": "2014-06-17",
        "VALUE": "0.13"
      },
      {
        "DATE": "2013-05-16",
        "VALUE": "0.08"
      },
      {
        "DATE": "2012-06-04",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-06-14",
        "VALUE": "0.05"
      },
      {
        "DATE": "2010-05-26",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-04",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-06-04",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-06-16",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-04-27",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-05-10",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 8.78,
    "EPS_avg_7": "0.55",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.98"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.76"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.62"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.79"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.78"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.26"
      }
    ]
  },
  {
    "code": "sh600362",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "13.03",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 20.17,
    "EPS_year1": "0.46",
    "price_change_percent_in_one_year": "20.56",
    "dividents": [
      {
        "DATE": "2018-07-24",
        "VALUE": "0.20"
      },
      {
        "DATE": "2017-07-11",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-08-11",
        "VALUE": "0.10"
      },
      {
        "DATE": "2015-07-16",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-07-30",
        "VALUE": "0.50"
      },
      {
        "DATE": "2013-07-23",
        "VALUE": "0.50"
      },
      {
        "DATE": "2012-07-09",
        "VALUE": "0.50"
      },
      {
        "DATE": "2011-12-19",
        "VALUE": "0.20"
      },
      {
        "DATE": "2011-07-21",
        "VALUE": "0.20"
      },
      {
        "DATE": "2010-07-01",
        "VALUE": "0.09"
      },
      {
        "DATE": "2009-07-10",
        "VALUE": "0.07"
      },
      {
        "DATE": "2008-06-20",
        "VALUE": "0.26"
      },
      {
        "DATE": "2007-07-09",
        "VALUE": "0.33"
      },
      {
        "DATE": "2006-06-28",
        "VALUE": "0.16"
      },
      {
        "DATE": "2005-06-02",
        "VALUE": "0.09"
      },
      {
        "DATE": "2004-06-01",
        "VALUE": "0.09"
      },
      {
        "DATE": "2003-06-27",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-06-28",
        "VALUE": "0.04"
      }
    ],
    "last_close_date_price": 13.63,
    "EPS_avg_7": "0.87",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.59"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.03"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.51"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.89"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "1.56"
      }
    ]
  },
  {
    "code": "sh600376",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.35",
    "NAV_per_share_year1": "11.50",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 9.29,
    "EPS_year1": "0.73",
    "price_change_percent_in_one_year": "-21.34",
    "dividents": [
      {
        "DATE": "2018-06-20",
        "VALUE": "0.60"
      },
      {
        "DATE": "2017-06-02",
        "VALUE": "0.35"
      },
      {
        "DATE": "2016-09-29",
        "VALUE": "0.25"
      },
      {
        "DATE": "2015-05-15",
        "VALUE": "0.21"
      },
      {
        "DATE": "2014-05-05",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-05-17",
        "VALUE": "0.14"
      },
      {
        "DATE": "2012-09-27",
        "VALUE": "0.08"
      },
      {
        "DATE": "2012-05-14",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-04-21",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-09-13",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-05-04",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-07-02",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-06-14",
        "VALUE": "0.00"
      },
      {
        "DATE": "2005-06-15",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-06-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2003-07-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-05-17",
        "VALUE": "0.01"
      },
      {
        "DATE": "2001-10-30",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 7.18,
    "EPS_avg_7": "0.66",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.55"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.73"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.58"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.78"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.64"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.73"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.52"
      }
    ]
  },
  {
    "code": "sh600377",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.42",
    "NAV_per_share_year1": "0.71",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 9.85,
    "EPS_year1": "0.71",
    "price_change_percent_in_one_year": "15.20",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.44"
      },
      {
        "DATE": "2017-07-12",
        "VALUE": "0.42"
      },
      {
        "DATE": "2016-06-23",
        "VALUE": "0.40"
      },
      {
        "DATE": "2015-07-09",
        "VALUE": "0.38"
      },
      {
        "DATE": "2014-06-26",
        "VALUE": "0.38"
      },
      {
        "DATE": "2013-07-04",
        "VALUE": "0.36"
      },
      {
        "DATE": "2012-07-03",
        "VALUE": "0.36"
      },
      {
        "DATE": "2011-06-03",
        "VALUE": "0.36"
      },
      {
        "DATE": "2010-05-31",
        "VALUE": "0.31"
      },
      {
        "DATE": "2009-07-06",
        "VALUE": "0.27"
      },
      {
        "DATE": "2008-06-24",
        "VALUE": "0.27"
      },
      {
        "DATE": "2007-06-29",
        "VALUE": "0.19"
      },
      {
        "DATE": "2006-06-15",
        "VALUE": "0.14"
      },
      {
        "DATE": "2005-06-02",
        "VALUE": "0.14"
      },
      {
        "DATE": "2004-07-09",
        "VALUE": "0.14"
      },
      {
        "DATE": "2003-06-03",
        "VALUE": "0.13"
      },
      {
        "DATE": "2002-06-14",
        "VALUE": "0.12"
      },
      {
        "DATE": "2001-06-14",
        "VALUE": "0.09"
      }
    ],
    "last_close_date_price": 9.42,
    "EPS_avg_7": "0.55",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.72"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.71"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.66"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.49"
      }
    ]
  },
  {
    "code": "sh600382",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.04",
    "NAV_per_share_year1": "10.90",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 12.58,
    "EPS_year1": "0.71",
    "price_change_percent_in_one_year": "-30.88",
    "dividents": [
      {
        "DATE": "2018-06-14",
        "VALUE": "0.04"
      },
      {
        "DATE": "2017-05-18",
        "VALUE": "0.04"
      },
      {
        "DATE": "2016-05-30",
        "VALUE": "0.04"
      },
      {
        "DATE": "2015-05-22",
        "VALUE": "0.02"
      },
      {
        "DATE": "2014-04-23",
        "VALUE": "0.02"
      },
      {
        "DATE": "2013-05-17",
        "VALUE": "0.02"
      },
      {
        "DATE": "2012-05-23",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-05-23",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-06-01",
        "VALUE": "0.02"
      },
      {
        "DATE": "2009-05-25",
        "VALUE": "0.02"
      },
      {
        "DATE": "2008-05-21",
        "VALUE": "0.02"
      },
      {
        "DATE": "2007-05-21",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-06-29",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-06-16",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-06-11",
        "VALUE": "0.05"
      },
      {
        "DATE": "2002-05-28",
        "VALUE": "0.05"
      },
      {
        "DATE": "2001-05-15",
        "VALUE": "0.05"
      }
    ],
    "last_close_date_price": 8.92,
    "EPS_avg_7": "0.67",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.62"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.71"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.81"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.43"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.40"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.37"
      }
    ]
  },
  {
    "code": "sh600383",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.70",
    "NAV_per_share_year1": "9.02",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 12.63,
    "EPS_year1": "1.52",
    "price_change_percent_in_one_year": "-2.55",
    "dividents": [
      {
        "DATE": "2018-07-10",
        "VALUE": "0.53"
      },
      {
        "DATE": "2017-06-02",
        "VALUE": "0.70"
      },
      {
        "DATE": "2016-07-26",
        "VALUE": "0.42"
      },
      {
        "DATE": "2015-07-02",
        "VALUE": "0.13"
      },
      {
        "DATE": "2014-07-01",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-06-17",
        "VALUE": "0.08"
      },
      {
        "DATE": "2012-06-07",
        "VALUE": "0.07"
      },
      {
        "DATE": "2011-06-01",
        "VALUE": "0.06"
      },
      {
        "DATE": "2010-04-30",
        "VALUE": "0.06"
      },
      {
        "DATE": "2009-06-01",
        "VALUE": "0.04"
      },
      {
        "DATE": "2008-04-01",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-04-13",
        "VALUE": "0.04"
      },
      {
        "DATE": "2006-06-09",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-05-27",
        "VALUE": "0.03"
      },
      {
        "DATE": "2004-03-29",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-06-24",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 9.72,
    "EPS_avg_7": "0.96",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.16"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.52"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.40"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.71"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.89"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.80"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.75"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.66"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.59"
      }
    ]
  },
  {
    "code": "sh600395",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.24",
    "NAV_per_share_year1": "3.40",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 6.87,
    "EPS_year1": "0.53",
    "price_change_percent_in_one_year": "-14.87",
    "dividents": [
      {
        "DATE": "2018-08-17",
        "VALUE": "0.35"
      },
      {
        "DATE": "2017-07-20",
        "VALUE": "0.24"
      },
      {
        "DATE": "2016-08-12",
        "VALUE": "0.01"
      },
      {
        "DATE": "2015-07-28",
        "VALUE": "0.16"
      },
      {
        "DATE": "2014-07-23",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-07-10",
        "VALUE": "0.45"
      },
      {
        "DATE": "2012-07-13",
        "VALUE": "0.57"
      },
      {
        "DATE": "2011-07-15",
        "VALUE": "0.57"
      },
      {
        "DATE": "2010-07-09",
        "VALUE": "0.30"
      },
      {
        "DATE": "2009-06-12",
        "VALUE": "0.39"
      },
      {
        "DATE": "2008-07-25",
        "VALUE": "0.03"
      },
      {
        "DATE": "2007-06-25",
        "VALUE": "0.03"
      },
      {
        "DATE": "2006-07-26",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-06-16",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-06-21",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-08-08",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-07-29",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 5.6,
    "EPS_avg_7": "0.44",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.44"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.12"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.01"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.29"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.91"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.03"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.81"
      }
    ]
  },
  {
    "code": "sh600398",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.49",
    "NAV_per_share_year1": "2.38",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 9.7,
    "EPS_year1": "0.74",
    "price_change_percent_in_one_year": "-10.10",
    "dividents": [
      {
        "DATE": "2018-06-07",
        "VALUE": "0.48"
      },
      {
        "DATE": "2017-04-18",
        "VALUE": "0.49"
      },
      {
        "DATE": "2016-05-30",
        "VALUE": "0.33"
      },
      {
        "DATE": "2015-04-29",
        "VALUE": "0.38"
      },
      {
        "DATE": "2014-05-20",
        "VALUE": "0.19"
      },
      {
        "DATE": "2013-06-28",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-05-31",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-04-26",
        "VALUE": "0.01"
      },
      {
        "DATE": "2010-06-21",
        "VALUE": "0.00"
      },
      {
        "DATE": "2009-06-15",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-04-18",
        "VALUE": "0.00"
      },
      {
        "DATE": "2005-05-23",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-06-14",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-04-15",
        "VALUE": "0.00"
      },
      {
        "DATE": "2001-06-12",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 8,
    "EPS_avg_7": "0.39",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.58"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.74"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.70"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.66"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.02"
      }
    ]
  },
  {
    "code": "sh600418",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.19",
    "NAV_per_share_year1": "5.82",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 9.46,
    "EPS_year1": "0.23",
    "price_change_percent_in_one_year": "-18.17",
    "dividents": [
      {
        "DATE": "2018-06-28",
        "VALUE": "0.07"
      },
      {
        "DATE": "2017-06-26",
        "VALUE": "0.19"
      },
      {
        "DATE": "2016-06-01",
        "VALUE": "0.14"
      },
      {
        "DATE": "2015-07-15",
        "VALUE": "0.09"
      },
      {
        "DATE": "2014-05-20",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-07-17",
        "VALUE": "0.07"
      },
      {
        "DATE": "2012-06-18",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-05-19",
        "VALUE": "0.14"
      },
      {
        "DATE": "2010-06-21",
        "VALUE": "0.07"
      },
      {
        "DATE": "2009-05-22",
        "VALUE": "0.01"
      },
      {
        "DATE": "2008-06-19",
        "VALUE": "0.05"
      },
      {
        "DATE": "2007-07-04",
        "VALUE": "0.09"
      },
      {
        "DATE": "2007-07-04",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-05-30",
        "VALUE": "0.09"
      },
      {
        "DATE": "2005-05-26",
        "VALUE": "0.06"
      },
      {
        "DATE": "2004-04-26",
        "VALUE": "0.06"
      },
      {
        "DATE": "2002-06-13",
        "VALUE": "0.02"
      },
      {
        "DATE": "2001-10-24",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 5.24,
    "EPS_avg_7": "0.39",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.03"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.72"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.61"
      }
    ]
  },
  {
    "code": "sh600456",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.05",
    "NAV_per_share_year1": "7.67",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 23.61,
    "EPS_year1": "0.05",
    "price_change_percent_in_one_year": "42.83",
    "dividents": [
      {
        "DATE": "2018-07-04",
        "VALUE": "0.05"
      },
      {
        "DATE": "2017-06-21",
        "VALUE": "0.05"
      },
      {
        "DATE": "2016-07-07",
        "VALUE": "0.05"
      },
      {
        "DATE": "2015-06-23",
        "VALUE": "0.05"
      },
      {
        "DATE": "2014-06-17",
        "VALUE": "0.05"
      },
      {
        "DATE": "2013-05-15",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-05-08",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.10"
      },
      {
        "DATE": "2010-05-06",
        "VALUE": "0.25"
      },
      {
        "DATE": "2009-06-12",
        "VALUE": "0.25"
      },
      {
        "DATE": "2008-07-04",
        "VALUE": "0.47"
      },
      {
        "DATE": "2007-06-01",
        "VALUE": "0.29"
      },
      {
        "DATE": "2006-06-13",
        "VALUE": "0.14"
      },
      {
        "DATE": "2005-05-24",
        "VALUE": "0.09"
      },
      {
        "DATE": "2004-06-11",
        "VALUE": "0.12"
      },
      {
        "DATE": "2003-05-27",
        "VALUE": "0.07"
      }
    ],
    "last_close_date_price": 15.2,
    "EPS_avg_7": "-0.01",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.22"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.05"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.09"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "-0.43"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.14"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.01"
      }
    ]
  },
  {
    "code": "sh600483",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.20",
    "NAV_per_share_year1": "6.24",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 7.56,
    "EPS_year1": "0.54",
    "price_change_percent_in_one_year": "-31.71",
    "dividents": [
      {
        "DATE": "2018-06-08",
        "VALUE": "0.20"
      },
      {
        "DATE": "2017-07-07",
        "VALUE": "0.20"
      },
      {
        "DATE": "2016-06-15",
        "VALUE": "0.20"
      },
      {
        "DATE": "2015-06-23",
        "VALUE": "0.16"
      },
      {
        "DATE": "2014-05-16",
        "VALUE": "0.01"
      },
      {
        "DATE": "2013-07-15",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-07-13",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-07-13",
        "VALUE": "0.01"
      },
      {
        "DATE": "2010-07-13",
        "VALUE": "0.00"
      },
      {
        "DATE": "2006-05-25",
        "VALUE": "0.03"
      },
      {
        "DATE": "2005-07-19",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-08-19",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 9.04,
    "EPS_avg_7": "0.36",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.48"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.66"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.59"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.02"
      }
    ]
  },
  {
    "code": "sh600510",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.11",
    "NAV_per_share_year1": "7.39",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 6.62,
    "EPS_year1": "0.47",
    "price_change_percent_in_one_year": "-23.29",
    "dividents": [
      {
        "DATE": "2018-07-04",
        "VALUE": "0.14"
      },
      {
        "DATE": "2017-07-06",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-07-06",
        "VALUE": "0.08"
      },
      {
        "DATE": "2015-07-09",
        "VALUE": "0.06"
      },
      {
        "DATE": "2014-07-03",
        "VALUE": "0.11"
      },
      {
        "DATE": "2013-06-05",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-06-18",
        "VALUE": "0.07"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.11"
      },
      {
        "DATE": "2010-06-07",
        "VALUE": "0.11"
      },
      {
        "DATE": "2009-05-13",
        "VALUE": "0.04"
      },
      {
        "DATE": "2008-05-12",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-05-29",
        "VALUE": "0.05"
      },
      {
        "DATE": "2006-04-24",
        "VALUE": "0.10"
      },
      {
        "DATE": "2005-05-19",
        "VALUE": "0.07"
      },
      {
        "DATE": "2004-04-01",
        "VALUE": "0.07"
      }
    ],
    "last_close_date_price": 6.49,
    "EPS_avg_7": "0.33",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.11"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.37"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.38"
      }
    ]
  },
  {
    "code": "sh600548",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.22",
    "NAV_per_share_year1": "-3.46",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 8.98,
    "EPS_year1": "0.65",
    "price_change_percent_in_one_year": "5.65",
    "dividents": [
      {
        "DATE": "2018-06-14",
        "VALUE": "0.30"
      },
      {
        "DATE": "2017-06-08",
        "VALUE": "0.22"
      },
      {
        "DATE": "2016-06-02",
        "VALUE": "0.34"
      },
      {
        "DATE": "2015-05-29",
        "VALUE": "0.45"
      },
      {
        "DATE": "2014-05-26",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-05-27",
        "VALUE": "0.13"
      },
      {
        "DATE": "2012-06-13",
        "VALUE": "0.16"
      },
      {
        "DATE": "2011-06-02",
        "VALUE": "0.16"
      },
      {
        "DATE": "2010-05-27",
        "VALUE": "0.12"
      },
      {
        "DATE": "2009-06-10",
        "VALUE": "0.12"
      },
      {
        "DATE": "2008-06-13",
        "VALUE": "0.16"
      },
      {
        "DATE": "2007-05-10",
        "VALUE": "0.13"
      },
      {
        "DATE": "2006-06-26",
        "VALUE": "0.12"
      },
      {
        "DATE": "2005-04-21",
        "VALUE": "0.11"
      },
      {
        "DATE": "2004-05-21",
        "VALUE": "0.19"
      },
      {
        "DATE": "2003-06-16",
        "VALUE": "0.12"
      },
      {
        "DATE": "2002-06-18",
        "VALUE": "0.10"
      }
    ],
    "last_close_date_price": 8.31,
    "EPS_avg_7": "0.56",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.70"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.65"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.71"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.00"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.31"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.40"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.34"
      }
    ]
  },
  {
    "code": "sh600551",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.24",
    "NAV_per_share_year1": "9.05",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 11.74,
    "EPS_year1": "0.59",
    "price_change_percent_in_one_year": "-42.22",
    "dividents": [
      {
        "DATE": "2018-06-26",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-10-12",
        "VALUE": "0.24"
      },
      {
        "DATE": "2016-06-14",
        "VALUE": "0.23"
      },
      {
        "DATE": "2015-05-15",
        "VALUE": "0.23"
      },
      {
        "DATE": "2014-07-21",
        "VALUE": "0.21"
      },
      {
        "DATE": "2013-06-27",
        "VALUE": "0.19"
      },
      {
        "DATE": "2012-06-07",
        "VALUE": "0.14"
      },
      {
        "DATE": "2011-05-12",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-05-31",
        "VALUE": "0.08"
      },
      {
        "DATE": "2009-05-18",
        "VALUE": "0.04"
      },
      {
        "DATE": "2003-06-16",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 8.97,
    "EPS_avg_7": "0.68",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.47"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.59"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.80"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.78"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.62"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.51"
      }
    ]
  },
  {
    "code": "sh600561",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.03",
    "NAV_per_share_year1": "-0.85",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 8.2,
    "EPS_year1": "0.09",
    "price_change_percent_in_one_year": "-40.92",
    "dividents": [
      {
        "DATE": "2018-07-18",
        "VALUE": "0.03"
      },
      {
        "DATE": "2017-08-15",
        "VALUE": "0.03"
      },
      {
        "DATE": "2016-07-21",
        "VALUE": "0.10"
      },
      {
        "DATE": "2015-07-09",
        "VALUE": "0.19"
      },
      {
        "DATE": "2014-06-26",
        "VALUE": "0.18"
      },
      {
        "DATE": "2013-08-09",
        "VALUE": "0.17"
      },
      {
        "DATE": "2012-05-11",
        "VALUE": "0.14"
      },
      {
        "DATE": "2011-04-11",
        "VALUE": "0.14"
      },
      {
        "DATE": "2010-06-17",
        "VALUE": "0.14"
      },
      {
        "DATE": "2008-05-19",
        "VALUE": "0.11"
      },
      {
        "DATE": "2007-05-17",
        "VALUE": "0.10"
      },
      {
        "DATE": "2006-05-22",
        "VALUE": "0.09"
      },
      {
        "DATE": "2005-05-23",
        "VALUE": "0.06"
      },
      {
        "DATE": "2004-05-26",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 6.23,
    "EPS_avg_7": "0.33",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.07"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.09"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "-0.41"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.62"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.48"
      }
    ]
  },
  {
    "code": "sh600565",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.10",
    "NAV_per_share_year1": "3.09",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 4,
    "EPS_year1": "0.28",
    "price_change_percent_in_one_year": "-46.09",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.09"
      },
      {
        "DATE": "2017-04-26",
        "VALUE": "0.10"
      },
      {
        "DATE": "2016-06-20",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-05-18",
        "VALUE": "0.03"
      },
      {
        "DATE": "2014-04-14",
        "VALUE": "0.01"
      },
      {
        "DATE": "2013-05-30",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-05-15",
        "VALUE": "0.00"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.00"
      },
      {
        "DATE": "2010-05-27",
        "VALUE": "0.00"
      },
      {
        "DATE": "2009-05-14",
        "VALUE": "0.00"
      },
      {
        "DATE": "2008-03-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-06-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-06-12",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-07-06",
        "VALUE": "0.00"
      },
      {
        "DATE": "2004-05-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2003-06-09",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 2.92,
    "EPS_avg_7": "0.17",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.16"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.02"
      }
    ]
  },
  {
    "code": "sh600578",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.17",
    "NAV_per_share_year1": "3.12",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 3.7,
    "EPS_year1": "0.08",
    "price_change_percent_in_one_year": "-11.90",
    "dividents": [
      {
        "DATE": "2018-08-23",
        "VALUE": "0.06"
      },
      {
        "DATE": "2017-08-23",
        "VALUE": "0.17"
      },
      {
        "DATE": "2016-08-11",
        "VALUE": "0.14"
      },
      {
        "DATE": "2015-07-27",
        "VALUE": "0.14"
      },
      {
        "DATE": "2014-08-18",
        "VALUE": "0.14"
      },
      {
        "DATE": "2013-10-22",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-09-20",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-05-25",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-07-13",
        "VALUE": "0.01"
      },
      {
        "DATE": "2010-08-11",
        "VALUE": "0.01"
      },
      {
        "DATE": "2009-06-11",
        "VALUE": "0.01"
      },
      {
        "DATE": "2008-05-29",
        "VALUE": "0.02"
      },
      {
        "DATE": "2007-08-06",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-08-04",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-08-12",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-08-13",
        "VALUE": "0.01"
      },
      {
        "DATE": "2003-06-13",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-08-12",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 3.15,
    "EPS_avg_7": "0.24",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.09"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.08"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.39"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.04"
      }
    ]
  },
  {
    "code": "sh600582",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.03",
    "NAV_per_share_year1": "3.08",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 4.65,
    "EPS_year1": "0.23",
    "price_change_percent_in_one_year": "-6.44",
    "dividents": [
      {
        "DATE": "2018-05-14",
        "VALUE": "0.05"
      },
      {
        "DATE": "2017-08-03",
        "VALUE": "0.03"
      },
      {
        "DATE": "2016-07-14",
        "VALUE": "0.03"
      },
      {
        "DATE": "2015-08-04",
        "VALUE": "0.05"
      },
      {
        "DATE": "2014-08-15",
        "VALUE": "0.03"
      },
      {
        "DATE": "2013-07-23",
        "VALUE": "0.04"
      },
      {
        "DATE": "2012-07-13",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-08-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-07-09",
        "VALUE": "0.01"
      },
      {
        "DATE": "2009-06-19",
        "VALUE": "0.02"
      },
      {
        "DATE": "2008-04-11",
        "VALUE": "0.00"
      },
      {
        "DATE": "2005-08-22",
        "VALUE": "0.00"
      },
      {
        "DATE": "2002-07-17",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 3.82,
    "EPS_avg_7": "0.24",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.16"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.21"
      }
    ]
  },
  {
    "code": "sh600585",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.50",
    "NAV_per_share_year1": "15.27",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 29.33,
    "EPS_year1": "2.99",
    "price_change_percent_in_one_year": "72.94",
    "dividents": [
      {
        "DATE": "2018-06-19",
        "VALUE": "1.20"
      },
      {
        "DATE": "2017-06-20",
        "VALUE": "0.50"
      },
      {
        "DATE": "2016-06-21",
        "VALUE": "0.43"
      },
      {
        "DATE": "2015-06-18",
        "VALUE": "0.65"
      },
      {
        "DATE": "2014-06-17",
        "VALUE": "0.35"
      },
      {
        "DATE": "2013-06-13",
        "VALUE": "0.25"
      },
      {
        "DATE": "2012-06-13",
        "VALUE": "0.35"
      },
      {
        "DATE": "2011-06-15",
        "VALUE": "0.20"
      },
      {
        "DATE": "2010-06-18",
        "VALUE": "0.12"
      },
      {
        "DATE": "2009-06-23",
        "VALUE": "0.10"
      },
      {
        "DATE": "2007-06-25",
        "VALUE": "0.06"
      },
      {
        "DATE": "2006-07-05",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-06-06",
        "VALUE": "0.03"
      },
      {
        "DATE": "2004-06-09",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-06-06",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 31.9,
    "EPS_avg_7": "1.89",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "3.91"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "2.99"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.61"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.42"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "2.07"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.77"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.19"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "2.19"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "1.17"
      }
    ]
  },
  {
    "code": "sh600611",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.07",
    "NAV_per_share_year1": "3.39",
    "year1": "2017",
    "pay_divident_since": "2000",
    "price_year1": 4.98,
    "EPS_year1": "0.37",
    "price_change_percent_in_one_year": "-24.20",
    "dividents": [
      {
        "DATE": "2018-06-20",
        "VALUE": "0.12"
      },
      {
        "DATE": "2017-06-07",
        "VALUE": "0.07"
      },
      {
        "DATE": "2016-06-08",
        "VALUE": "0.07"
      },
      {
        "DATE": "2015-06-17",
        "VALUE": "0.06"
      },
      {
        "DATE": "2014-06-25",
        "VALUE": "0.05"
      },
      {
        "DATE": "2013-07-12",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-07-06",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-06-23",
        "VALUE": "0.05"
      },
      {
        "DATE": "2010-07-21",
        "VALUE": "0.07"
      },
      {
        "DATE": "2009-06-01",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-05-12",
        "VALUE": "0.05"
      },
      {
        "DATE": "2005-05-11",
        "VALUE": "0.05"
      },
      {
        "DATE": "2004-05-19",
        "VALUE": "0.05"
      },
      {
        "DATE": "2003-06-25",
        "VALUE": "0.05"
      },
      {
        "DATE": "2002-06-25",
        "VALUE": "0.07"
      },
      {
        "DATE": "2001-06-01",
        "VALUE": "0.06"
      },
      {
        "DATE": "2000-07-05",
        "VALUE": "0.05"
      }
    ],
    "last_close_date_price": 4.16,
    "EPS_avg_7": "0.22",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.24"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.37"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.17"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.17"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.23"
      }
    ]
  },
  {
    "code": "sh600642",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.22",
    "NAV_per_share_year1": "5.58",
    "year1": "2017",
    "pay_divident_since": "1997",
    "price_year1": 5.86,
    "EPS_year1": "0.38",
    "price_change_percent_in_one_year": "-0.17",
    "dividents": [
      {
        "DATE": "2018-08-09",
        "VALUE": "0.20"
      },
      {
        "DATE": "2017-07-20",
        "VALUE": "0.22"
      },
      {
        "DATE": "2016-07-14",
        "VALUE": "0.20"
      },
      {
        "DATE": "2015-07-20",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-07-08",
        "VALUE": "0.20"
      },
      {
        "DATE": "2013-06-14",
        "VALUE": "0.12"
      },
      {
        "DATE": "2012-05-23",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-06-23",
        "VALUE": "0.07"
      },
      {
        "DATE": "2010-03-24",
        "VALUE": "0.13"
      },
      {
        "DATE": "2009-06-22",
        "VALUE": "0.06"
      },
      {
        "DATE": "2008-05-27",
        "VALUE": "0.21"
      },
      {
        "DATE": "2007-06-18",
        "VALUE": "0.20"
      },
      {
        "DATE": "2006-06-23",
        "VALUE": "0.16"
      },
      {
        "DATE": "2005-04-11",
        "VALUE": "0.12"
      },
      {
        "DATE": "2004-06-11",
        "VALUE": "0.12"
      },
      {
        "DATE": "2003-07-17",
        "VALUE": "0.12"
      },
      {
        "DATE": "2002-07-19",
        "VALUE": "0.14"
      },
      {
        "DATE": "2001-06-25",
        "VALUE": "0.16"
      },
      {
        "DATE": "2000-07-19",
        "VALUE": "0.09"
      },
      {
        "DATE": "1999-08-06",
        "VALUE": "0.07"
      },
      {
        "DATE": "1998-05-27",
        "VALUE": "0.07"
      },
      {
        "DATE": "1997-05-08",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 5.09,
    "EPS_avg_7": "0.43",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.28"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.31"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.32"
      }
    ]
  },
  {
    "code": "sh600674",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.30",
    "NAV_per_share_year1": "5.10",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 10.18,
    "EPS_year1": "0.74",
    "price_change_percent_in_one_year": "17.01",
    "dividents": [
      {
        "DATE": "2018-07-16",
        "VALUE": "0.27"
      },
      {
        "DATE": "2017-07-13",
        "VALUE": "0.30"
      },
      {
        "DATE": "2016-06-24",
        "VALUE": "0.27"
      },
      {
        "DATE": "2015-06-25",
        "VALUE": "0.15"
      },
      {
        "DATE": "2014-07-09",
        "VALUE": "0.03"
      },
      {
        "DATE": "2013-06-03",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-05-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-07-12",
        "VALUE": "0.01"
      },
      {
        "DATE": "2010-06-18",
        "VALUE": "0.00"
      },
      {
        "DATE": "2009-05-05",
        "VALUE": "0.01"
      },
      {
        "DATE": "2008-05-07",
        "VALUE": "0.00"
      },
      {
        "DATE": "2005-05-16",
        "VALUE": "0.00"
      },
      {
        "DATE": "2003-06-02",
        "VALUE": "0.00"
      },
      {
        "DATE": "2002-05-15",
        "VALUE": "0.00"
      },
      {
        "DATE": "2001-03-29",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 8.23,
    "EPS_avg_7": "0.53",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.63"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.74"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.80"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.88"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.83"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.31"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.08"
      }
    ]
  },
  {
    "code": "sh600676",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.10",
    "NAV_per_share_year1": "5.13",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 6.56,
    "EPS_year1": "0.43",
    "price_change_percent_in_one_year": "-26.87",
    "dividents": [
      {
        "DATE": "2018-07-18",
        "VALUE": "0.14"
      },
      {
        "DATE": "2017-06-08",
        "VALUE": "0.10"
      },
      {
        "DATE": "2016-05-18",
        "VALUE": "0.10"
      },
      {
        "DATE": "2015-05-27",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.09"
      },
      {
        "DATE": "2013-06-28",
        "VALUE": "0.08"
      },
      {
        "DATE": "2012-07-19",
        "VALUE": "0.08"
      },
      {
        "DATE": "2011-06-03",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-05-14",
        "VALUE": "0.07"
      },
      {
        "DATE": "2008-07-21",
        "VALUE": "0.08"
      },
      {
        "DATE": "2007-07-16",
        "VALUE": "0.03"
      },
      {
        "DATE": "2006-05-29",
        "VALUE": "0.03"
      },
      {
        "DATE": "2005-06-10",
        "VALUE": "0.03"
      },
      {
        "DATE": "2004-06-18",
        "VALUE": "0.03"
      },
      {
        "DATE": "2002-06-25",
        "VALUE": "0.02"
      },
      {
        "DATE": "2001-05-28",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 4.93,
    "EPS_avg_7": "0.31",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.20"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.43"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.31"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.29"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.17"
      }
    ]
  },
  {
    "code": "sh600697",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.35",
    "NAV_per_share_year1": "5.87",
    "year1": "2017",
    "pay_divident_since": "1996",
    "price_year1": 25.72,
    "EPS_year1": "1.92",
    "price_change_percent_in_one_year": "-19.70",
    "dividents": [
      {
        "DATE": "2018-07-05",
        "VALUE": "0.37"
      },
      {
        "DATE": "2017-07-06",
        "VALUE": "0.35"
      },
      {
        "DATE": "2016-07-06",
        "VALUE": "0.35"
      },
      {
        "DATE": "2015-07-02",
        "VALUE": "0.33"
      },
      {
        "DATE": "2014-07-03",
        "VALUE": "0.33"
      },
      {
        "DATE": "2013-07-01",
        "VALUE": "0.30"
      },
      {
        "DATE": "2012-07-02",
        "VALUE": "0.30"
      },
      {
        "DATE": "2011-07-04",
        "VALUE": "0.30"
      },
      {
        "DATE": "2010-07-12",
        "VALUE": "0.30"
      },
      {
        "DATE": "2009-07-08",
        "VALUE": "0.30"
      },
      {
        "DATE": "2008-07-02",
        "VALUE": "0.30"
      },
      {
        "DATE": "2007-08-02",
        "VALUE": "0.30"
      },
      {
        "DATE": "2006-06-08",
        "VALUE": "0.27"
      },
      {
        "DATE": "2005-07-11",
        "VALUE": "0.18"
      },
      {
        "DATE": "2004-06-30",
        "VALUE": "0.18"
      },
      {
        "DATE": "2003-04-07",
        "VALUE": "0.15"
      },
      {
        "DATE": "2002-05-22",
        "VALUE": "0.15"
      },
      {
        "DATE": "2001-08-16",
        "VALUE": "0.15"
      },
      {
        "DATE": "1998-08-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "1996-07-30",
        "VALUE": "0.13"
      }
    ],
    "last_close_date_price": 20.08,
    "EPS_avg_7": "1.68",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.25"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.92"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "2.06"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "2.04"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.88"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.54"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.27"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.02"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.83"
      }
    ]
  },
  {
    "code": "sh600717",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.23",
    "NAV_per_share_year1": "6.18",
    "year1": "2017",
    "pay_divident_since": "1997",
    "price_year1": 10.49,
    "EPS_year1": "0.49",
    "price_change_percent_in_one_year": "4.07",
    "dividents": [
      {
        "DATE": "2018-06-14",
        "VALUE": "0.15"
      },
      {
        "DATE": "2017-06-21",
        "VALUE": "0.23"
      },
      {
        "DATE": "2016-06-22",
        "VALUE": "0.22"
      },
      {
        "DATE": "2015-06-18",
        "VALUE": "0.21"
      },
      {
        "DATE": "2014-05-20",
        "VALUE": "0.19"
      },
      {
        "DATE": "2013-06-07",
        "VALUE": "0.18"
      },
      {
        "DATE": "2012-07-06",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-06-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2010-06-17",
        "VALUE": "0.10"
      },
      {
        "DATE": "2008-06-30",
        "VALUE": "0.10"
      },
      {
        "DATE": "2007-06-12",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-06-23",
        "VALUE": "0.13"
      },
      {
        "DATE": "2004-10-11",
        "VALUE": "0.06"
      },
      {
        "DATE": "2002-06-13",
        "VALUE": "0.03"
      },
      {
        "DATE": "2001-04-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2000-06-29",
        "VALUE": "0.07"
      },
      {
        "DATE": "1998-04-29",
        "VALUE": "0.07"
      },
      {
        "DATE": "1997-05-16",
        "VALUE": "0.04"
      }
    ],
    "last_close_date_price": 7.46,
    "EPS_avg_7": "0.64",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.39"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.49"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.75"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.73"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.64"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.60"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.56"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.48"
      }
    ]
  },
  {
    "code": "sh600720",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.06",
    "NAV_per_share_year1": "5.75",
    "year1": "2017",
    "pay_divident_since": "1997",
    "price_year1": 10.35,
    "EPS_year1": "0.74",
    "price_change_percent_in_one_year": "26.68",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.23"
      },
      {
        "DATE": "2017-07-17",
        "VALUE": "0.06"
      },
      {
        "DATE": "2016-08-04",
        "VALUE": "0.07"
      },
      {
        "DATE": "2015-07-30",
        "VALUE": "0.22"
      },
      {
        "DATE": "2014-08-18",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-07-12",
        "VALUE": "0.04"
      },
      {
        "DATE": "2012-04-20",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-08-03",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-06-18",
        "VALUE": "0.09"
      },
      {
        "DATE": "2009-05-20",
        "VALUE": "0.08"
      },
      {
        "DATE": "2008-07-24",
        "VALUE": "0.03"
      },
      {
        "DATE": "2003-05-13",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-05-13",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-05-10",
        "VALUE": "0.02"
      },
      {
        "DATE": "2001-10-25",
        "VALUE": "0.02"
      },
      {
        "DATE": "2000-09-22",
        "VALUE": "0.01"
      },
      {
        "DATE": "1997-05-05",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 6.88,
    "EPS_avg_7": "0.46",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.71"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.74"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.72"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.60"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.43"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.63"
      }
    ]
  },
  {
    "code": "sh600729",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.56",
    "NAV_per_share_year1": "11.33",
    "year1": "2017",
    "pay_divident_since": "1998",
    "price_year1": 25.06,
    "EPS_year1": "1.49",
    "price_change_percent_in_one_year": "6.96",
    "dividents": [
      {
        "DATE": "2018-06-01",
        "VALUE": "0.60"
      },
      {
        "DATE": "2017-08-14",
        "VALUE": "0.56"
      },
      {
        "DATE": "2016-06-30",
        "VALUE": "0.28"
      },
      {
        "DATE": "2015-06-15",
        "VALUE": "0.36"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.65"
      },
      {
        "DATE": "2013-05-15",
        "VALUE": "0.52"
      },
      {
        "DATE": "2012-08-16",
        "VALUE": "0.41"
      },
      {
        "DATE": "2011-06-08",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-05-14",
        "VALUE": "0.10"
      },
      {
        "DATE": "2009-07-03",
        "VALUE": "0.10"
      },
      {
        "DATE": "2008-08-21",
        "VALUE": "0.10"
      },
      {
        "DATE": "2007-07-09",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-06-16",
        "VALUE": "0.08"
      },
      {
        "DATE": "2005-05-19",
        "VALUE": "0.08"
      },
      {
        "DATE": "2004-04-09",
        "VALUE": "0.08"
      },
      {
        "DATE": "2003-08-21",
        "VALUE": "0.08"
      },
      {
        "DATE": "2002-07-30",
        "VALUE": "0.07"
      },
      {
        "DATE": "2001-07-10",
        "VALUE": "0.14"
      },
      {
        "DATE": "2000-08-08",
        "VALUE": "0.12"
      },
      {
        "DATE": "1999-06-30",
        "VALUE": "0.13"
      },
      {
        "DATE": "1998-07-14",
        "VALUE": "0.15"
      }
    ],
    "last_close_date_price": 29.6,
    "EPS_avg_7": "1.43",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.89"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.49"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.03"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.90"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.21"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "2.16"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.72"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.49"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.71"
      }
    ]
  },
  {
    "code": "sh600736",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.08",
    "NAV_per_share_year1": "5.22",
    "year1": "2017",
    "pay_divident_since": "2000",
    "price_year1": 5.91,
    "EPS_year1": "0.50",
    "price_change_percent_in_one_year": "-34.55",
    "dividents": [
      {
        "DATE": "2018-05-10",
        "VALUE": "0.15"
      },
      {
        "DATE": "2017-05-11",
        "VALUE": "0.08"
      },
      {
        "DATE": "2016-05-19",
        "VALUE": "0.05"
      },
      {
        "DATE": "2015-05-06",
        "VALUE": "0.05"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.06"
      },
      {
        "DATE": "2013-05-10",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-05-23",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-05-05",
        "VALUE": "0.01"
      },
      {
        "DATE": "2010-05-24",
        "VALUE": "0.08"
      },
      {
        "DATE": "2009-05-20",
        "VALUE": "0.07"
      },
      {
        "DATE": "2008-04-30",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-06-14",
        "VALUE": "0.07"
      },
      {
        "DATE": "2006-06-21",
        "VALUE": "0.07"
      },
      {
        "DATE": "2005-06-29",
        "VALUE": "0.06"
      },
      {
        "DATE": "2004-06-03",
        "VALUE": "0.05"
      },
      {
        "DATE": "2003-05-20",
        "VALUE": "0.05"
      },
      {
        "DATE": "2002-06-17",
        "VALUE": "0.04"
      },
      {
        "DATE": "2001-07-17",
        "VALUE": "0.06"
      },
      {
        "DATE": "2000-07-19",
        "VALUE": "0.04"
      }
    ],
    "last_close_date_price": 6.31,
    "EPS_avg_7": "0.24",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.30"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.20"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.16"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.27"
      }
    ]
  },
  {
    "code": "sh600741",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "1.00",
    "NAV_per_share_year1": "12.18",
    "year1": "2017",
    "pay_divident_since": "1998",
    "price_year1": 29.69,
    "EPS_year1": "2.08",
    "price_change_percent_in_one_year": "86.14",
    "dividents": [
      {
        "DATE": "2018-07-13",
        "VALUE": "1.05"
      },
      {
        "DATE": "2017-07-07",
        "VALUE": "1.00"
      },
      {
        "DATE": "2016-06-22",
        "VALUE": "0.81"
      },
      {
        "DATE": "2015-07-22",
        "VALUE": "0.43"
      },
      {
        "DATE": "2014-08-07",
        "VALUE": "0.39"
      },
      {
        "DATE": "2013-07-05",
        "VALUE": "0.30"
      },
      {
        "DATE": "2012-06-21",
        "VALUE": "0.25"
      },
      {
        "DATE": "2011-06-20",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-06-17",
        "VALUE": "0.27"
      },
      {
        "DATE": "2005-07-20",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-07-23",
        "VALUE": "0.01"
      },
      {
        "DATE": "2003-07-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-06-14",
        "VALUE": "0.02"
      },
      {
        "DATE": "2001-07-03",
        "VALUE": "0.03"
      },
      {
        "DATE": "1999-05-28",
        "VALUE": "0.03"
      },
      {
        "DATE": "1998-05-11",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 17.4,
    "EPS_avg_7": "1.42",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "2.02"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "2.08"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.93"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.52"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.41"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.10"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.98"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.95"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.79"
      }
    ]
  },
  {
    "code": "sh600742",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.42",
    "NAV_per_share_year1": "8.58",
    "year1": "2017",
    "pay_divident_since": "1997",
    "price_year1": 16.51,
    "EPS_year1": "0.92",
    "price_change_percent_in_one_year": "2.36",
    "dividents": [
      {
        "DATE": "2018-06-07",
        "VALUE": "0.42"
      },
      {
        "DATE": "2017-06-19",
        "VALUE": "0.42"
      },
      {
        "DATE": "2016-06-20",
        "VALUE": "0.21"
      },
      {
        "DATE": "2015-06-08",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-06-17",
        "VALUE": "0.23"
      },
      {
        "DATE": "2012-06-04",
        "VALUE": "0.08"
      },
      {
        "DATE": "2011-07-06",
        "VALUE": "0.12"
      },
      {
        "DATE": "2010-06-28",
        "VALUE": "0.07"
      },
      {
        "DATE": "2009-06-01",
        "VALUE": "0.06"
      },
      {
        "DATE": "2004-06-29",
        "VALUE": "0.02"
      },
      {
        "DATE": "2003-07-14",
        "VALUE": "0.03"
      },
      {
        "DATE": "2002-06-17",
        "VALUE": "0.10"
      },
      {
        "DATE": "2001-06-05",
        "VALUE": "0.06"
      },
      {
        "DATE": "2000-07-12",
        "VALUE": "0.09"
      },
      {
        "DATE": "1998-09-07",
        "VALUE": "0.09"
      },
      {
        "DATE": "1997-06-17",
        "VALUE": "0.09"
      }
    ],
    "last_close_date_price": 11.56,
    "EPS_avg_7": "0.86",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.76"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.92"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.84"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.84"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.09"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.72"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.84"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "1.12"
      }
    ]
  },
  {
    "code": "sh600743",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.10",
    "NAV_per_share_year1": "3.08",
    "year1": "2017",
    "pay_divident_since": "2009",
    "price_year1": 3.66,
    "EPS_year1": "0.35",
    "price_change_percent_in_one_year": "-17.75",
    "dividents": [
      {
        "DATE": "2018-06-04",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-06-05",
        "VALUE": "0.10"
      },
      {
        "DATE": "2016-06-07",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-06-09",
        "VALUE": "0.09"
      },
      {
        "DATE": "2014-05-15",
        "VALUE": "0.09"
      },
      {
        "DATE": "2013-04-24",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-07-04",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-04-07",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-03-05",
        "VALUE": "0.03"
      },
      {
        "DATE": "2010-03-05",
        "VALUE": "0.03"
      },
      {
        "DATE": "2009-04-22",
        "VALUE": "0.08"
      }
    ],
    "last_close_date_price": 2.67,
    "EPS_avg_7": "0.28",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.12"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.31"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.20"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.17"
      }
    ]
  },
  {
    "code": "sh600748",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.04",
    "NAV_per_share_year1": "5.24",
    "year1": "2017",
    "pay_divident_since": "2004",
    "price_year1": 6.41,
    "EPS_year1": "0.47",
    "price_change_percent_in_one_year": "-21.73",
    "dividents": [
      {
        "DATE": "2018-07-19",
        "VALUE": "0.05"
      },
      {
        "DATE": "2017-06-23",
        "VALUE": "0.04"
      },
      {
        "DATE": "2016-05-26",
        "VALUE": "0.03"
      },
      {
        "DATE": "2015-07-29",
        "VALUE": "0.04"
      },
      {
        "DATE": "2014-08-05",
        "VALUE": "0.03"
      },
      {
        "DATE": "2013-07-11",
        "VALUE": "0.04"
      },
      {
        "DATE": "2012-06-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-05-23",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-05-05",
        "VALUE": "0.02"
      },
      {
        "DATE": "2009-08-12",
        "VALUE": "0.02"
      },
      {
        "DATE": "2008-05-14",
        "VALUE": "0.00"
      },
      {
        "DATE": "2007-08-03",
        "VALUE": "0.03"
      },
      {
        "DATE": "2006-08-11",
        "VALUE": "0.03"
      },
      {
        "DATE": "2005-08-08",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-08-02",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 4.98,
    "EPS_avg_7": "0.34",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.16"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.18"
      }
    ]
  },
  {
    "code": "sh600755",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.22",
    "NAV_per_share_year1": "12.53",
    "year1": "2017",
    "pay_divident_since": "2003",
    "price_year1": 10.1,
    "EPS_year1": "0.89",
    "price_change_percent_in_one_year": "23.17",
    "dividents": [
      {
        "DATE": "2018-07-06",
        "VALUE": "0.20"
      },
      {
        "DATE": "2017-07-05",
        "VALUE": "0.11"
      },
      {
        "DATE": "2017-07-05",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-06-20",
        "VALUE": "0.09"
      },
      {
        "DATE": "2015-06-10",
        "VALUE": "0.09"
      },
      {
        "DATE": "2014-05-22",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-07-01",
        "VALUE": "0.07"
      },
      {
        "DATE": "2012-06-29",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-06-30",
        "VALUE": "0.06"
      },
      {
        "DATE": "2010-07-12",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-15",
        "VALUE": "0.04"
      },
      {
        "DATE": "2008-06-30",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-05-18",
        "VALUE": "0.03"
      },
      {
        "DATE": "2006-06-21",
        "VALUE": "0.02"
      },
      {
        "DATE": "2005-07-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2004-05-14",
        "VALUE": "0.03"
      },
      {
        "DATE": "2003-06-27",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 7.32,
    "EPS_avg_7": "0.48",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.70"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.89"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.57"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.36"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.29"
      }
    ]
  },
  {
    "code": "sh600761",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.25",
    "NAV_per_share_year1": "5.84",
    "year1": "2017",
    "pay_divident_since": "1999",
    "price_year1": 10.52,
    "EPS_year1": "0.55",
    "price_change_percent_in_one_year": "-17.30",
    "dividents": [
      {
        "DATE": "2018-06-20",
        "VALUE": "0.50"
      },
      {
        "DATE": "2017-07-20",
        "VALUE": "0.25"
      },
      {
        "DATE": "2016-06-22",
        "VALUE": "0.17"
      },
      {
        "DATE": "2015-06-25",
        "VALUE": "0.25"
      },
      {
        "DATE": "2014-06-23",
        "VALUE": "0.21"
      },
      {
        "DATE": "2013-06-18",
        "VALUE": "0.15"
      },
      {
        "DATE": "2012-06-18",
        "VALUE": "0.12"
      },
      {
        "DATE": "2011-06-13",
        "VALUE": "0.14"
      },
      {
        "DATE": "2010-06-21",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-06-19",
        "VALUE": "0.05"
      },
      {
        "DATE": "2008-06-02",
        "VALUE": "0.10"
      },
      {
        "DATE": "2007-07-11",
        "VALUE": "0.10"
      },
      {
        "DATE": "2006-05-26",
        "VALUE": "0.06"
      },
      {
        "DATE": "2005-05-18",
        "VALUE": "0.06"
      },
      {
        "DATE": "2004-06-15",
        "VALUE": "0.06"
      },
      {
        "DATE": "2002-06-10",
        "VALUE": "0.06"
      },
      {
        "DATE": "2001-06-14",
        "VALUE": "0.08"
      },
      {
        "DATE": "1999-06-16",
        "VALUE": "0.10"
      }
    ],
    "last_close_date_price": 9.57,
    "EPS_avg_7": "0.58",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.60"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.55"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.68"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.49"
      }
    ]
  },
  {
    "code": "sh600795",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.11",
    "NAV_per_share_year1": "2.47",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 3.12,
    "EPS_year1": "0.11",
    "price_change_percent_in_one_year": "-1.58",
    "dividents": [
      {
        "DATE": "2018-07-09",
        "VALUE": "0.08"
      },
      {
        "DATE": "2017-07-03",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-07-05",
        "VALUE": "0.11"
      },
      {
        "DATE": "2015-07-07",
        "VALUE": "0.15"
      },
      {
        "DATE": "2014-06-12",
        "VALUE": "0.11"
      },
      {
        "DATE": "2013-05-22",
        "VALUE": "0.11"
      },
      {
        "DATE": "2012-06-11",
        "VALUE": "0.08"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-04-30",
        "VALUE": "0.02"
      },
      {
        "DATE": "2009-07-03",
        "VALUE": "0.01"
      },
      {
        "DATE": "2008-03-14",
        "VALUE": "0.02"
      },
      {
        "DATE": "2007-05-23",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-06-30",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-07-07",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-04-07",
        "VALUE": "0.00"
      },
      {
        "DATE": "2003-06-11",
        "VALUE": "0.00"
      },
      {
        "DATE": "2002-04-05",
        "VALUE": "0.01"
      },
      {
        "DATE": "2001-03-15",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 2.48,
    "EPS_avg_7": "0.24",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.13"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.26"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.16"
      }
    ]
  },
  {
    "code": "sh600801",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.10",
    "NAV_per_share_year1": "5.63",
    "year1": "2017",
    "pay_divident_since": "1996",
    "price_year1": 14.13,
    "EPS_year1": "1.39",
    "price_change_percent_in_one_year": "82.32",
    "dividents": [
      {
        "DATE": "2018-06-08",
        "VALUE": "0.28"
      },
      {
        "DATE": "2017-06-08",
        "VALUE": "0.10"
      },
      {
        "DATE": "2016-06-06",
        "VALUE": "0.05"
      },
      {
        "DATE": "2015-06-11",
        "VALUE": "0.17"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.12"
      },
      {
        "DATE": "2013-06-05",
        "VALUE": "0.11"
      },
      {
        "DATE": "2012-05-24",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-05-25",
        "VALUE": "0.05"
      },
      {
        "DATE": "2010-06-04",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-05-20",
        "VALUE": "0.04"
      },
      {
        "DATE": "2008-06-06",
        "VALUE": "0.03"
      },
      {
        "DATE": "2007-05-15",
        "VALUE": "0.01"
      },
      {
        "DATE": "2006-05-16",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-06-15",
        "VALUE": "0.01"
      },
      {
        "DATE": "2004-06-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2003-05-22",
        "VALUE": "0.01"
      },
      {
        "DATE": "2002-06-13",
        "VALUE": "0.01"
      },
      {
        "DATE": "2001-06-11",
        "VALUE": "0.01"
      },
      {
        "DATE": "1998-08-24",
        "VALUE": "0.01"
      },
      {
        "DATE": "1996-07-29",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 18.19,
    "EPS_avg_7": "0.65",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "2.28"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.39"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.07"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.79"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.37"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.38"
      }
    ]
  },
  {
    "code": "sh600826",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.60",
    "NAV_per_share_year1": "8.18",
    "year1": "2017",
    "pay_divident_since": "1998",
    "price_year1": 13.17,
    "EPS_year1": "0.69",
    "price_change_percent_in_one_year": "-51.79",
    "dividents": [
      {
        "DATE": "2018-07-30",
        "VALUE": "0.21"
      },
      {
        "DATE": "2017-07-13",
        "VALUE": "0.60"
      },
      {
        "DATE": "2016-06-28",
        "VALUE": "0.38"
      },
      {
        "DATE": "2015-07-21",
        "VALUE": "0.38"
      },
      {
        "DATE": "2014-07-18",
        "VALUE": "0.05"
      },
      {
        "DATE": "2013-05-24",
        "VALUE": "0.04"
      },
      {
        "DATE": "2012-07-30",
        "VALUE": "0.03"
      },
      {
        "DATE": "2011-05-30",
        "VALUE": "0.02"
      },
      {
        "DATE": "2002-06-26",
        "VALUE": "0.07"
      },
      {
        "DATE": "2000-07-10",
        "VALUE": "0.13"
      },
      {
        "DATE": "1998-06-12",
        "VALUE": "0.37"
      }
    ],
    "last_close_date_price": 11.12,
    "EPS_avg_7": "0.79",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.57"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "2.00"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.21"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.25"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.12"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.12"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.12"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.22"
      }
    ]
  },
  {
    "code": "sh600835",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.43",
    "NAV_per_share_year1": "9.42",
    "year1": "2017",
    "pay_divident_since": "2000",
    "price_year1": 24.5,
    "EPS_year1": "1.36",
    "price_change_percent_in_one_year": "25.51",
    "dividents": [
      {
        "DATE": "2018-06-14",
        "VALUE": "0.48"
      },
      {
        "DATE": "2017-06-06",
        "VALUE": "0.43"
      },
      {
        "DATE": "2016-06-20",
        "VALUE": "0.26"
      },
      {
        "DATE": "2015-06-01",
        "VALUE": "0.34"
      },
      {
        "DATE": "2014-07-23",
        "VALUE": "0.28"
      },
      {
        "DATE": "2013-07-02",
        "VALUE": "0.21"
      },
      {
        "DATE": "2012-07-02",
        "VALUE": "0.30"
      },
      {
        "DATE": "2011-06-03",
        "VALUE": "0.20"
      },
      {
        "DATE": "2010-06-21",
        "VALUE": "0.10"
      },
      {
        "DATE": "2009-07-03",
        "VALUE": "0.10"
      },
      {
        "DATE": "2008-07-08",
        "VALUE": "0.08"
      },
      {
        "DATE": "2007-07-10",
        "VALUE": "0.08"
      },
      {
        "DATE": "2006-07-10",
        "VALUE": "0.08"
      },
      {
        "DATE": "2005-05-20",
        "VALUE": "0.17"
      },
      {
        "DATE": "2004-07-05",
        "VALUE": "0.07"
      },
      {
        "DATE": "2003-06-20",
        "VALUE": "0.06"
      },
      {
        "DATE": "2002-08-12",
        "VALUE": "0.08"
      },
      {
        "DATE": "2001-07-19",
        "VALUE": "0.15"
      },
      {
        "DATE": "2000-08-09",
        "VALUE": "0.05"
      }
    ],
    "last_close_date_price": 15.79,
    "EPS_avg_7": "1.10",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.01"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.36"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.42"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.79"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.84"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.92"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.70"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.65"
      }
    ]
  },
  {
    "code": "sh600837",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.22",
    "NAV_per_share_year1": "9.79",
    "year1": "2017",
    "pay_divident_since": "2002",
    "price_year1": 12.87,
    "EPS_year1": "0.75",
    "price_change_percent_in_one_year": "-18.29",
    "dividents": [
      {
        "DATE": "2018-07-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2017-07-26",
        "VALUE": "0.22"
      },
      {
        "DATE": "2016-07-14",
        "VALUE": "0.45"
      },
      {
        "DATE": "2015-07-03",
        "VALUE": "0.25"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2013-07-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-08-16",
        "VALUE": "0.12"
      },
      {
        "DATE": "2011-06-22",
        "VALUE": "0.11"
      },
      {
        "DATE": "2010-06-28",
        "VALUE": "0.14"
      },
      {
        "DATE": "2009-06-05",
        "VALUE": "0.07"
      },
      {
        "DATE": "2008-05-21",
        "VALUE": "0.04"
      },
      {
        "DATE": "2007-08-09",
        "VALUE": "0.09"
      },
      {
        "DATE": "2006-06-26",
        "VALUE": "0.00"
      },
      {
        "DATE": "2004-06-23",
        "VALUE": "0.00"
      },
      {
        "DATE": "2002-06-26",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 9.57,
    "EPS_avg_7": "0.64",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.31"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.75"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.70"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.48"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.67"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.32"
      }
    ]
  },
  {
    "code": "sh600858",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.02",
    "NAV_per_share_year1": "2.78",
    "year1": "2017",
    "pay_divident_since": "2007",
    "price_year1": 7.32,
    "EPS_year1": "0.09",
    "price_change_percent_in_one_year": "-21.79",
    "dividents": [
      {
        "DATE": "2018-08-15",
        "VALUE": "0.03"
      },
      {
        "DATE": "2017-08-16",
        "VALUE": "0.02"
      },
      {
        "DATE": "2016-08-24",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-08-25",
        "VALUE": "0.11"
      },
      {
        "DATE": "2014-08-19",
        "VALUE": "0.07"
      },
      {
        "DATE": "2013-07-24",
        "VALUE": "0.07"
      },
      {
        "DATE": "2012-04-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2012-04-11",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-05-27",
        "VALUE": "0.03"
      },
      {
        "DATE": "2010-06-09",
        "VALUE": "0.04"
      },
      {
        "DATE": "2009-08-06",
        "VALUE": "0.03"
      },
      {
        "DATE": "2008-07-10",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-07-30",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 5.21,
    "EPS_avg_7": "0.30",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.07"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.09"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.67"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.22"
      }
    ]
  },
  {
    "code": "sh600859",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.43",
    "NAV_per_share_year1": "10.72",
    "year1": "2017",
    "pay_divident_since": "1997",
    "price_year1": 20.4,
    "EPS_year1": "1.17",
    "price_change_percent_in_one_year": "25.31",
    "dividents": [
      {
        "DATE": "2018-06-06",
        "VALUE": "0.36"
      },
      {
        "DATE": "2017-05-25",
        "VALUE": "0.43"
      },
      {
        "DATE": "2016-06-07",
        "VALUE": "0.52"
      },
      {
        "DATE": "2015-07-22",
        "VALUE": "0.25"
      },
      {
        "DATE": "2014-07-10",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-07-18",
        "VALUE": "0.42"
      },
      {
        "DATE": "2012-08-08",
        "VALUE": "0.18"
      },
      {
        "DATE": "2011-07-21",
        "VALUE": "0.16"
      },
      {
        "DATE": "2010-08-11",
        "VALUE": "0.15"
      },
      {
        "DATE": "2009-06-05",
        "VALUE": "0.10"
      },
      {
        "DATE": "2008-08-08",
        "VALUE": "0.10"
      },
      {
        "DATE": "2007-08-17",
        "VALUE": "0.20"
      },
      {
        "DATE": "2006-07-24",
        "VALUE": "0.03"
      },
      {
        "DATE": "2005-07-29",
        "VALUE": "0.03"
      },
      {
        "DATE": "2003-09-18",
        "VALUE": "0.03"
      },
      {
        "DATE": "2002-08-05",
        "VALUE": "0.03"
      },
      {
        "DATE": "2001-07-26",
        "VALUE": "0.03"
      },
      {
        "DATE": "1998-07-28",
        "VALUE": "0.05"
      },
      {
        "DATE": "1997-05-05",
        "VALUE": "0.13"
      }
    ],
    "last_close_date_price": 15.09,
    "EPS_avg_7": "0.90",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.27"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.17"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.89"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.85"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.89"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.87"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.51"
      }
    ]
  },
  {
    "code": "sh600873",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.30",
    "NAV_per_share_year1": "2.62",
    "year1": "2017",
    "pay_divident_since": "1997",
    "price_year1": 5.16,
    "EPS_year1": "0.38",
    "price_change_percent_in_one_year": "-20.86",
    "dividents": [
      {
        "DATE": "2018-07-27",
        "VALUE": "0.33"
      },
      {
        "DATE": "2017-04-10",
        "VALUE": "0.30"
      },
      {
        "DATE": "2016-06-17",
        "VALUE": "0.10"
      },
      {
        "DATE": "2015-06-03",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-06-19",
        "VALUE": "0.10"
      },
      {
        "DATE": "2013-07-04",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-11-08",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-04-08",
        "VALUE": "0.16"
      },
      {
        "DATE": "2007-05-24",
        "VALUE": "0.00"
      },
      {
        "DATE": "1997-07-14",
        "VALUE": "0.00"
      }
    ],
    "last_close_date_price": 4.29,
    "EPS_avg_7": "0.23",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.23"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.14"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.13"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.24"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.03"
      }
    ]
  },
  {
    "code": "sh600886",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.20",
    "NAV_per_share_year1": "3.78",
    "year1": "2017",
    "pay_divident_since": "2005",
    "price_year1": 7.34,
    "EPS_year1": "0.48",
    "price_change_percent_in_one_year": "10.04",
    "dividents": [
      {
        "DATE": "2018-08-06",
        "VALUE": "0.17"
      },
      {
        "DATE": "2017-08-24",
        "VALUE": "0.20"
      },
      {
        "DATE": "2016-07-04",
        "VALUE": "0.28"
      },
      {
        "DATE": "2015-06-25",
        "VALUE": "0.29"
      },
      {
        "DATE": "2014-06-25",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-05-21",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-06-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-07-01",
        "VALUE": "0.01"
      },
      {
        "DATE": "2010-07-02",
        "VALUE": "0.06"
      },
      {
        "DATE": "2009-05-18",
        "VALUE": "0.05"
      },
      {
        "DATE": "2008-05-09",
        "VALUE": "0.02"
      },
      {
        "DATE": "2007-06-01",
        "VALUE": "0.02"
      },
      {
        "DATE": "2006-04-20",
        "VALUE": "0.01"
      },
      {
        "DATE": "2005-11-03",
        "VALUE": "0.04"
      },
      {
        "DATE": "2005-04-18",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 7.21,
    "EPS_avg_7": "0.49",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.53"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.58"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.80"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.16"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.07"
      }
    ]
  },
  {
    "code": "sh600897",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "1.01",
    "NAV_per_share_year1": "10.98",
    "year1": "2017",
    "pay_divident_since": "2001",
    "price_year1": 22.48,
    "EPS_year1": "1.38",
    "price_change_percent_in_one_year": "-0.57",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "1.04"
      },
      {
        "DATE": "2017-07-13",
        "VALUE": "1.01"
      },
      {
        "DATE": "2016-06-23",
        "VALUE": "0.38"
      },
      {
        "DATE": "2015-06-18",
        "VALUE": "0.47"
      },
      {
        "DATE": "2014-06-18",
        "VALUE": "0.45"
      },
      {
        "DATE": "2013-05-31",
        "VALUE": "0.39"
      },
      {
        "DATE": "2012-05-18",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-05-20",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-05-19",
        "VALUE": "0.08"
      },
      {
        "DATE": "2009-06-23",
        "VALUE": "0.06"
      },
      {
        "DATE": "2008-06-30",
        "VALUE": "0.05"
      },
      {
        "DATE": "2007-05-16",
        "VALUE": "0.35"
      },
      {
        "DATE": "2006-05-10",
        "VALUE": "0.30"
      },
      {
        "DATE": "2005-05-09",
        "VALUE": "0.50"
      },
      {
        "DATE": "2004-04-08",
        "VALUE": "0.40"
      },
      {
        "DATE": "2003-08-19",
        "VALUE": "0.10"
      },
      {
        "DATE": "2002-07-02",
        "VALUE": "0.15"
      },
      {
        "DATE": "2001-06-20",
        "VALUE": "0.10"
      }
    ],
    "last_close_date_price": 20.98,
    "EPS_avg_7": "1.34",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.28"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.38"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.34"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.24"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.54"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.48"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.27"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.10"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.94"
      }
    ]
  },
  {
    "code": "sh600983",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.10",
    "NAV_per_share_year1": "4.69",
    "year1": "2017",
    "pay_divident_since": "2005",
    "price_year1": 7.2,
    "EPS_year1": "-0.13",
    "price_change_percent_in_one_year": "-38.25",
    "dividents": [
      {
        "DATE": "2018-07-16",
        "VALUE": "0.05"
      },
      {
        "DATE": "2017-07-11",
        "VALUE": "0.10"
      },
      {
        "DATE": "2016-07-15",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-07-07",
        "VALUE": "0.05"
      },
      {
        "DATE": "2014-06-18",
        "VALUE": "0.06"
      },
      {
        "DATE": "2013-07-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-05-14",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.07"
      },
      {
        "DATE": "2010-10-21",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-06-07",
        "VALUE": "0.04"
      },
      {
        "DATE": "2009-05-12",
        "VALUE": "0.08"
      },
      {
        "DATE": "2008-04-29",
        "VALUE": "0.06"
      },
      {
        "DATE": "2007-05-10",
        "VALUE": "0.04"
      },
      {
        "DATE": "2006-03-29",
        "VALUE": "0.04"
      },
      {
        "DATE": "2005-04-25",
        "VALUE": "0.04"
      }
    ],
    "last_close_date_price": 5.74,
    "EPS_avg_7": "0.36",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.46"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "-0.13"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.37"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.40"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.40"
      }
    ]
  },
  {
    "code": "sh600987",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.26",
    "NAV_per_share_year1": "5.38",
    "year1": "2017",
    "pay_divident_since": "2005",
    "price_year1": 11.28,
    "EPS_year1": "0.90",
    "price_change_percent_in_one_year": "-8.59",
    "dividents": [
      {
        "DATE": "2018-05-17",
        "VALUE": "0.28"
      },
      {
        "DATE": "2017-06-01",
        "VALUE": "0.26"
      },
      {
        "DATE": "2016-05-18",
        "VALUE": "0.23"
      },
      {
        "DATE": "2015-05-14",
        "VALUE": "0.21"
      },
      {
        "DATE": "2014-05-08",
        "VALUE": "0.20"
      },
      {
        "DATE": "2013-06-14",
        "VALUE": "0.13"
      },
      {
        "DATE": "2012-06-01",
        "VALUE": "0.13"
      },
      {
        "DATE": "2011-06-02",
        "VALUE": "0.12"
      },
      {
        "DATE": "2010-05-31",
        "VALUE": "0.10"
      },
      {
        "DATE": "2009-05-14",
        "VALUE": "0.10"
      },
      {
        "DATE": "2008-05-13",
        "VALUE": "0.09"
      },
      {
        "DATE": "2007-05-16",
        "VALUE": "0.06"
      },
      {
        "DATE": "2006-05-12",
        "VALUE": "0.04"
      },
      {
        "DATE": "2005-05-31",
        "VALUE": "0.04"
      }
    ],
    "last_close_date_price": 9.11,
    "EPS_avg_7": "0.67",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.66"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.90"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.85"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.76"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.70"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.65"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.41"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.37"
      }
    ]
  },
  {
    "code": "sh600999",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.19",
    "NAV_per_share_year1": "11.82",
    "year1": "2017",
    "pay_divident_since": "2010",
    "price_year1": 17.16,
    "EPS_year1": "0.78",
    "price_change_percent_in_one_year": "5.08",
    "dividents": [
      {
        "DATE": "2018-08-16",
        "VALUE": "0.35"
      },
      {
        "DATE": "2017-07-20",
        "VALUE": "0.19"
      },
      {
        "DATE": "2016-09-28",
        "VALUE": "0.13"
      },
      {
        "DATE": "2016-06-16",
        "VALUE": "0.21"
      },
      {
        "DATE": "2015-10-09",
        "VALUE": "0.44"
      },
      {
        "DATE": "2015-05-20",
        "VALUE": "0.23"
      },
      {
        "DATE": "2014-11-04",
        "VALUE": "0.13"
      },
      {
        "DATE": "2013-07-19",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-08-01",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-07-13",
        "VALUE": "0.16"
      },
      {
        "DATE": "2010-07-12",
        "VALUE": "0.27"
      }
    ],
    "last_close_date_price": 14.17,
    "EPS_avg_7": "0.69",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.37"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.78"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.91"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.63"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.48"
      }
    ]
  },
  {
    "code": "sh601006",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.25",
    "NAV_per_share_year1": "6.29",
    "year1": "2017",
    "pay_divident_since": "2007",
    "price_year1": 9.07,
    "EPS_year1": "0.90",
    "price_change_percent_in_one_year": "28.11",
    "dividents": [
      {
        "DATE": "2018-06-27",
        "VALUE": "0.47"
      },
      {
        "DATE": "2017-06-28",
        "VALUE": "0.25"
      },
      {
        "DATE": "2016-07-06",
        "VALUE": "0.45"
      },
      {
        "DATE": "2015-06-18",
        "VALUE": "0.48"
      },
      {
        "DATE": "2014-06-20",
        "VALUE": "0.43"
      },
      {
        "DATE": "2013-06-04",
        "VALUE": "0.39"
      },
      {
        "DATE": "2012-07-18",
        "VALUE": "0.39"
      },
      {
        "DATE": "2011-06-28",
        "VALUE": "0.35"
      },
      {
        "DATE": "2010-06-23",
        "VALUE": "0.26"
      },
      {
        "DATE": "2009-06-30",
        "VALUE": "0.26"
      },
      {
        "DATE": "2008-06-30",
        "VALUE": "0.26"
      },
      {
        "DATE": "2007-06-15",
        "VALUE": "0.26"
      }
    ],
    "last_close_date_price": 7.89,
    "EPS_avg_7": "0.80",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.82"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.90"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.85"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.95"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.85"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.79"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.70"
      }
    ]
  },
  {
    "code": "sh601009",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.19",
    "NAV_per_share_year1": "7.90",
    "year1": "2017",
    "pay_divident_since": "2008",
    "price_year1": 7.74,
    "EPS_year1": "1.09",
    "price_change_percent_in_one_year": "-28.60",
    "dividents": [
      {
        "DATE": "2018-08-07",
        "VALUE": "0.35"
      },
      {
        "DATE": "2017-07-17",
        "VALUE": "0.19"
      },
      {
        "DATE": "2016-06-06",
        "VALUE": "0.16"
      },
      {
        "DATE": "2015-09-22",
        "VALUE": "0.20"
      },
      {
        "DATE": "2014-07-24",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-07-17",
        "VALUE": "0.14"
      },
      {
        "DATE": "2012-06-15",
        "VALUE": "0.11"
      },
      {
        "DATE": "2011-06-14",
        "VALUE": "0.07"
      },
      {
        "DATE": "2010-06-08",
        "VALUE": "0.02"
      },
      {
        "DATE": "2009-06-15",
        "VALUE": "0.06"
      },
      {
        "DATE": "2008-08-01",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 7.08,
    "EPS_avg_7": "0.71",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.01"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.09"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.95"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.88"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.66"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.38"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.32"
      }
    ]
  },
  {
    "code": "sh601088",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "2.97",
    "NAV_per_share_year1": "13.23",
    "year1": "2017",
    "pay_divident_since": "2008",
    "price_year1": 23.17,
    "EPS_year1": "2.26",
    "price_change_percent_in_one_year": "43.20",
    "dividents": [
      {
        "DATE": "2018-07-06",
        "VALUE": "0.91"
      },
      {
        "DATE": "2017-07-07",
        "VALUE": "2.97"
      },
      {
        "DATE": "2016-07-01",
        "VALUE": "0.32"
      },
      {
        "DATE": "2015-06-12",
        "VALUE": "0.74"
      },
      {
        "DATE": "2014-07-11",
        "VALUE": "0.91"
      },
      {
        "DATE": "2013-07-05",
        "VALUE": "0.96"
      },
      {
        "DATE": "2012-06-08",
        "VALUE": "0.90"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.75"
      },
      {
        "DATE": "2010-07-02",
        "VALUE": "0.53"
      },
      {
        "DATE": "2009-06-19",
        "VALUE": "0.46"
      },
      {
        "DATE": "2008-06-03",
        "VALUE": "0.18"
      }
    ],
    "last_close_date_price": 19.25,
    "EPS_avg_7": "1.86",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "1.77"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "2.26"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.14"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.81"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "1.85"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "2.30"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "2.40"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "2.25"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "1.87"
      }
    ]
  },
  {
    "code": "sh601098",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.50",
    "NAV_per_share_year1": "7.02",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 13.89,
    "EPS_year1": "0.84",
    "price_change_percent_in_one_year": "-16.63",
    "dividents": [
      {
        "DATE": "2018-07-05",
        "VALUE": "0.60"
      },
      {
        "DATE": "2017-06-20",
        "VALUE": "0.50"
      },
      {
        "DATE": "2016-06-17",
        "VALUE": "0.29"
      },
      {
        "DATE": "2015-06-12",
        "VALUE": "0.27"
      },
      {
        "DATE": "2014-06-25",
        "VALUE": "0.20"
      },
      {
        "DATE": "2013-06-13",
        "VALUE": "0.18"
      },
      {
        "DATE": "2012-06-20",
        "VALUE": "0.12"
      },
      {
        "DATE": "2011-06-03",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 11.45,
    "EPS_avg_7": "0.74",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.48"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.84"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.00"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.94"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.62"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.41"
      }
    ]
  },
  {
    "code": "sh601107",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.11",
    "NAV_per_share_year1": "-3.63",
    "year1": "2017",
    "pay_divident_since": "2009",
    "price_year1": 4.12,
    "EPS_year1": "0.29",
    "price_change_percent_in_one_year": "-18.58",
    "dividents": [
      {
        "DATE": "2018-06-21",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-06-22",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-06-15",
        "VALUE": "0.08"
      },
      {
        "DATE": "2015-06-11",
        "VALUE": "0.08"
      },
      {
        "DATE": "2014-06-23",
        "VALUE": "0.08"
      },
      {
        "DATE": "2013-06-14",
        "VALUE": "0.08"
      },
      {
        "DATE": "2012-06-12",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.09"
      },
      {
        "DATE": "2010-06-17",
        "VALUE": "0.06"
      },
      {
        "DATE": "2009-09-03",
        "VALUE": "0.13"
      }
    ],
    "last_close_date_price": 3.46,
    "EPS_avg_7": "0.35",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.30"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.29"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.39"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.43"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.37"
      }
    ]
  },
  {
    "code": "sh601117",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.11",
    "NAV_per_share_year1": "5.36",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 6.75,
    "EPS_year1": "0.32",
    "price_change_percent_in_one_year": "-0.30",
    "dividents": [
      {
        "DATE": "2018-06-26",
        "VALUE": "0.10"
      },
      {
        "DATE": "2017-07-13",
        "VALUE": "0.11"
      },
      {
        "DATE": "2016-07-14",
        "VALUE": "0.09"
      },
      {
        "DATE": "2015-07-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-07-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2013-07-09",
        "VALUE": "0.06"
      },
      {
        "DATE": "2012-07-09",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-07-05",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 5.78,
    "EPS_avg_7": "0.53",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.33"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.36"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.58"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.64"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.68"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.48"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.34"
      }
    ]
  },
  {
    "code": "sh601126",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.18",
    "NAV_per_share_year1": "4.40",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 7.83,
    "EPS_year1": "0.29",
    "price_change_percent_in_one_year": "-19.53",
    "dividents": [
      {
        "DATE": "2018-05-23",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-05-04",
        "VALUE": "0.18"
      },
      {
        "DATE": "2016-06-23",
        "VALUE": "0.16"
      },
      {
        "DATE": "2015-05-26",
        "VALUE": "0.12"
      },
      {
        "DATE": "2014-06-27",
        "VALUE": "0.14"
      },
      {
        "DATE": "2013-05-29",
        "VALUE": "0.13"
      },
      {
        "DATE": "2012-05-21",
        "VALUE": "0.13"
      },
      {
        "DATE": "2011-06-02",
        "VALUE": "0.10"
      }
    ],
    "last_close_date_price": 5.45,
    "EPS_avg_7": "0.37",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.29"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.36"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.46"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.37"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.24"
      }
    ]
  },
  {
    "code": "sh601158",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.28",
    "NAV_per_share_year1": "2.74",
    "year1": "2017",
    "pay_divident_since": "2010",
    "price_year1": 6.46,
    "EPS_year1": "0.43",
    "price_change_percent_in_one_year": "-13.06",
    "dividents": [
      {
        "DATE": "2018-06-07",
        "VALUE": "0.30"
      },
      {
        "DATE": "2017-06-02",
        "VALUE": "0.28"
      },
      {
        "DATE": "2016-06-02",
        "VALUE": "0.26"
      },
      {
        "DATE": "2015-05-27",
        "VALUE": "0.25"
      },
      {
        "DATE": "2014-05-22",
        "VALUE": "0.27"
      },
      {
        "DATE": "2013-05-17",
        "VALUE": "0.26"
      },
      {
        "DATE": "2012-06-14",
        "VALUE": "0.23"
      },
      {
        "DATE": "2011-06-03",
        "VALUE": "0.19"
      },
      {
        "DATE": "2010-07-02",
        "VALUE": "0.08"
      }
    ],
    "last_close_date_price": 5.53,
    "EPS_avg_7": "0.34",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.29"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.43"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.39"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.39"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.34"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.28"
      }
    ]
  },
  {
    "code": "sh601166",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.61",
    "NAV_per_share_year1": "20.02",
    "year1": "2017",
    "pay_divident_since": "2007",
    "price_year1": 16.99,
    "EPS_year1": "2.74",
    "price_change_percent_in_one_year": "5.27",
    "dividents": [
      {
        "DATE": "2018-06-14",
        "VALUE": "0.65"
      },
      {
        "DATE": "2017-06-13",
        "VALUE": "0.61"
      },
      {
        "DATE": "2016-06-03",
        "VALUE": "0.56"
      },
      {
        "DATE": "2015-05-26",
        "VALUE": "0.52"
      },
      {
        "DATE": "2014-07-17",
        "VALUE": "0.42"
      },
      {
        "DATE": "2013-07-02",
        "VALUE": "0.35"
      },
      {
        "DATE": "2012-05-04",
        "VALUE": "0.19"
      },
      {
        "DATE": "2011-05-05",
        "VALUE": "0.13"
      },
      {
        "DATE": "2010-04-09",
        "VALUE": "0.12"
      },
      {
        "DATE": "2009-06-10",
        "VALUE": "0.11"
      },
      {
        "DATE": "2008-05-26",
        "VALUE": "0.08"
      },
      {
        "DATE": "2007-05-18",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 15.86,
    "EPS_avg_7": "2.12",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "2.36"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "2.74"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "2.54"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "2.41"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "2.27"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "1.98"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.67"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "1.23"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.95"
      }
    ]
  },
  {
    "code": "sh601169",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.18",
    "NAV_per_share_year1": "8.24",
    "year1": "2017",
    "pay_divident_since": "2008",
    "price_year1": 7.15,
    "EPS_year1": "0.85",
    "price_change_percent_in_one_year": "-26.74",
    "dividents": [
      {
        "DATE": "2018-07-11",
        "VALUE": "0.27"
      },
      {
        "DATE": "2017-07-11",
        "VALUE": "0.18"
      },
      {
        "DATE": "2016-07-08",
        "VALUE": "0.15"
      },
      {
        "DATE": "2015-07-16",
        "VALUE": "0.12"
      },
      {
        "DATE": "2014-07-16",
        "VALUE": "0.07"
      },
      {
        "DATE": "2013-07-19",
        "VALUE": "0.17"
      },
      {
        "DATE": "2012-07-10",
        "VALUE": "0.07"
      },
      {
        "DATE": "2011-06-10",
        "VALUE": "0.06"
      },
      {
        "DATE": "2010-07-19",
        "VALUE": "0.05"
      },
      {
        "DATE": "2009-07-17",
        "VALUE": "0.05"
      },
      {
        "DATE": "2008-07-21",
        "VALUE": "0.04"
      }
    ],
    "last_close_date_price": 6.01,
    "EPS_avg_7": "0.69",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.76"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.85"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.83"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.80"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.74"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.64"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.57"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.32"
      }
    ]
  },
  {
    "code": "sh601186",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.16",
    "NAV_per_share_year1": "8.03",
    "year1": "2017",
    "pay_divident_since": "2009",
    "price_year1": 11.14,
    "EPS_year1": "1.16",
    "price_change_percent_in_one_year": "-6.86",
    "dividents": [
      {
        "DATE": "2018-07-17",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-07-18",
        "VALUE": "0.16"
      },
      {
        "DATE": "2016-07-18",
        "VALUE": "0.15"
      },
      {
        "DATE": "2015-06-23",
        "VALUE": "0.14"
      },
      {
        "DATE": "2014-07-25",
        "VALUE": "0.12"
      },
      {
        "DATE": "2013-07-19",
        "VALUE": "0.10"
      },
      {
        "DATE": "2012-07-27",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-07-15",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-02-11",
        "VALUE": "0.05"
      },
      {
        "DATE": "2010-07-16",
        "VALUE": "0.15"
      },
      {
        "DATE": "2009-07-10",
        "VALUE": "0.09"
      }
    ],
    "last_close_date_price": 10.96,
    "EPS_avg_7": "0.85",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.90"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "1.16"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "1.03"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.98"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.84"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.76"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.58"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.31"
      }
    ]
  },
  {
    "code": "sh601188",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.07",
    "NAV_per_share_year1": "3.02",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 4.12,
    "EPS_year1": "0.27",
    "price_change_percent_in_one_year": "-24.26",
    "dividents": [
      {
        "DATE": "2018-07-30",
        "VALUE": "0.08"
      },
      {
        "DATE": "2017-08-22",
        "VALUE": "0.07"
      },
      {
        "DATE": "2016-07-20",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-07-15",
        "VALUE": "0.07"
      },
      {
        "DATE": "2014-07-21",
        "VALUE": "0.05"
      },
      {
        "DATE": "2013-05-23",
        "VALUE": "0.01"
      },
      {
        "DATE": "2012-08-22",
        "VALUE": "0.01"
      },
      {
        "DATE": "2011-07-21",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 3.2,
    "EPS_avg_7": "0.19",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.19"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.09"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.10"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.07"
      }
    ]
  },
  {
    "code": "sh601288",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.16",
    "NAV_per_share_year1": "4.00",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 3.83,
    "EPS_year1": "0.54",
    "price_change_percent_in_one_year": "23.55",
    "dividents": [
      {
        "DATE": "2018-05-24",
        "VALUE": "0.17"
      },
      {
        "DATE": "2017-07-12",
        "VALUE": "0.16"
      },
      {
        "DATE": "2016-07-06",
        "VALUE": "0.15"
      },
      {
        "DATE": "2015-07-09",
        "VALUE": "0.17"
      },
      {
        "DATE": "2014-07-02",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-06-27",
        "VALUE": "0.15"
      },
      {
        "DATE": "2012-06-19",
        "VALUE": "0.12"
      },
      {
        "DATE": "2011-06-16",
        "VALUE": "0.05"
      }
    ],
    "last_close_date_price": 3.6,
    "EPS_avg_7": "0.47",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.51"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.31"
      }
    ]
  },
  {
    "code": "sh601328",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.27",
    "NAV_per_share_year1": "8.99",
    "year1": "2017",
    "pay_divident_since": "2008",
    "price_year1": 6.21,
    "EPS_year1": "0.91",
    "price_change_percent_in_one_year": "7.63",
    "dividents": [
      {
        "DATE": "2018-07-13",
        "VALUE": "0.29"
      },
      {
        "DATE": "2017-07-06",
        "VALUE": "0.27"
      },
      {
        "DATE": "2016-07-12",
        "VALUE": "0.27"
      },
      {
        "DATE": "2015-06-02",
        "VALUE": "0.25"
      },
      {
        "DATE": "2014-07-10",
        "VALUE": "0.24"
      },
      {
        "DATE": "2013-07-10",
        "VALUE": "0.22"
      },
      {
        "DATE": "2012-05-30",
        "VALUE": "0.08"
      },
      {
        "DATE": "2011-07-18",
        "VALUE": "0.02"
      },
      {
        "DATE": "2011-07-18",
        "VALUE": "0.02"
      },
      {
        "DATE": "2010-09-10",
        "VALUE": "0.08"
      },
      {
        "DATE": "2010-05-05",
        "VALUE": "0.07"
      },
      {
        "DATE": "2009-09-18",
        "VALUE": "0.07"
      },
      {
        "DATE": "2009-05-26",
        "VALUE": "0.07"
      },
      {
        "DATE": "2008-09-24",
        "VALUE": "0.07"
      },
      {
        "DATE": "2008-06-19",
        "VALUE": "0.10"
      }
    ],
    "last_close_date_price": 5.83,
    "EPS_avg_7": "0.83",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.74"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.91"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.89"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.90"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.82"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.81"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.68"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.55"
      }
    ]
  },
  {
    "code": "sh601369",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "3.49",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 7.6,
    "EPS_year1": "0.15",
    "price_change_percent_in_one_year": "10.95",
    "dividents": [
      {
        "DATE": "2018-06-25",
        "VALUE": "0.16"
      },
      {
        "DATE": "2017-06-08",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-06-06",
        "VALUE": "0.20"
      },
      {
        "DATE": "2015-04-29",
        "VALUE": "0.25"
      },
      {
        "DATE": "2014-04-24",
        "VALUE": "0.35"
      },
      {
        "DATE": "2013-04-19",
        "VALUE": "0.35"
      },
      {
        "DATE": "2012-05-04",
        "VALUE": "0.35"
      },
      {
        "DATE": "2011-04-21",
        "VALUE": "0.33"
      }
    ],
    "last_close_date_price": 6.4,
    "EPS_avg_7": "0.36",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.23"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.15"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.56"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.51"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.42"
      }
    ]
  },
  {
    "code": "sh601390",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.09",
    "NAV_per_share_year1": "4.54",
    "year1": "2017",
    "pay_divident_since": "2010",
    "price_year1": 8.39,
    "EPS_year1": "0.67",
    "price_change_percent_in_one_year": "-5.30",
    "dividents": [
      {
        "DATE": "2018-07-17",
        "VALUE": "0.11"
      },
      {
        "DATE": "2017-08-03",
        "VALUE": "0.09"
      },
      {
        "DATE": "2016-08-11",
        "VALUE": "0.09"
      },
      {
        "DATE": "2015-06-09",
        "VALUE": "0.07"
      },
      {
        "DATE": "2014-08-05",
        "VALUE": "0.06"
      },
      {
        "DATE": "2013-08-02",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-07-27",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-07-18",
        "VALUE": "0.05"
      },
      {
        "DATE": "2010-07-15",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 7.44,
    "EPS_avg_7": "0.46",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.56"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.67"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.52"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.41"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.29"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.33"
      }
    ]
  },
  {
    "code": "sh601398",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.23",
    "NAV_per_share_year1": "5.97",
    "year1": "2017",
    "pay_divident_since": "2007",
    "price_year1": 6.2,
    "EPS_year1": "0.79",
    "price_change_percent_in_one_year": "40.59",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.24"
      },
      {
        "DATE": "2017-07-10",
        "VALUE": "0.23"
      },
      {
        "DATE": "2016-07-07",
        "VALUE": "0.23"
      },
      {
        "DATE": "2015-07-06",
        "VALUE": "0.26"
      },
      {
        "DATE": "2014-06-19",
        "VALUE": "0.26"
      },
      {
        "DATE": "2013-06-25",
        "VALUE": "0.23"
      },
      {
        "DATE": "2012-06-13",
        "VALUE": "0.20"
      },
      {
        "DATE": "2011-06-14",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-05-26",
        "VALUE": "0.16"
      },
      {
        "DATE": "2009-06-03",
        "VALUE": "0.15"
      },
      {
        "DATE": "2008-06-17",
        "VALUE": "0.12"
      },
      {
        "DATE": "2007-06-20",
        "VALUE": "0.01"
      },
      {
        "DATE": "2007-06-20",
        "VALUE": "0.01"
      }
    ],
    "last_close_date_price": 5.36,
    "EPS_avg_7": "0.73",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.67"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.79"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.74"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.67"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.59"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.47"
      }
    ]
  },
  {
    "code": "sh601518",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.04",
    "NAV_per_share_year1": "2.13",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 3.53,
    "EPS_year1": "0.22",
    "price_change_percent_in_one_year": "-17.33",
    "dividents": [
      {
        "DATE": "2018-05-15",
        "VALUE": "0.07"
      },
      {
        "DATE": "2017-06-05",
        "VALUE": "0.04"
      },
      {
        "DATE": "2016-06-17",
        "VALUE": "0.03"
      },
      {
        "DATE": "2015-06-11",
        "VALUE": "0.06"
      },
      {
        "DATE": "2014-06-25",
        "VALUE": "0.06"
      },
      {
        "DATE": "2013-07-02",
        "VALUE": "0.06"
      },
      {
        "DATE": "2012-05-08",
        "VALUE": "0.04"
      },
      {
        "DATE": "2011-06-24",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 2.83,
    "EPS_avg_7": "0.18",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.16"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.14"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.16"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.10"
      }
    ]
  },
  {
    "code": "sh601668",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.15",
    "NAV_per_share_year1": "4.80",
    "year1": "2017",
    "pay_divident_since": "2010",
    "price_year1": 9.02,
    "EPS_year1": "0.76",
    "price_change_percent_in_one_year": "1.81",
    "dividents": [
      {
        "DATE": "2018-06-28",
        "VALUE": "0.15"
      },
      {
        "DATE": "2017-06-15",
        "VALUE": "0.15"
      },
      {
        "DATE": "2016-06-15",
        "VALUE": "0.14"
      },
      {
        "DATE": "2015-06-15",
        "VALUE": "0.12"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.10"
      },
      {
        "DATE": "2013-07-24",
        "VALUE": "0.08"
      },
      {
        "DATE": "2012-06-11",
        "VALUE": "0.06"
      },
      {
        "DATE": "2011-06-02",
        "VALUE": "0.04"
      },
      {
        "DATE": "2010-06-01",
        "VALUE": "0.02"
      }
    ],
    "last_close_date_price": 5.52,
    "EPS_avg_7": "0.54",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.62"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.76"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.60"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.49"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.37"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.22"
      }
    ]
  },
  {
    "code": "sh601717",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.01",
    "NAV_per_share_year1": "5.41",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 6.58,
    "EPS_year1": "0.17",
    "price_change_percent_in_one_year": "-6.40",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.05"
      },
      {
        "DATE": "2017-07-21",
        "VALUE": "0.01"
      },
      {
        "DATE": "2016-06-28",
        "VALUE": "0.01"
      },
      {
        "DATE": "2015-06-29",
        "VALUE": "0.04"
      },
      {
        "DATE": "2014-07-03",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-06-25",
        "VALUE": "0.28"
      },
      {
        "DATE": "2012-03-12",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-03-12",
        "VALUE": "0.05"
      },
      {
        "DATE": "2012-03-12",
        "VALUE": "0.05"
      },
      {
        "DATE": "2011-10-18",
        "VALUE": "0.18"
      }
    ],
    "last_close_date_price": 6.1,
    "EPS_avg_7": "0.37",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.40"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.17"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.03"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.12"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.50"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "1.05"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.69"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.58"
      }
    ]
  },
  {
    "code": "sh601788",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.20",
    "NAV_per_share_year1": "10.15",
    "year1": "2017",
    "pay_divident_since": "2009",
    "price_year1": 13.43,
    "EPS_year1": "0.65",
    "price_change_percent_in_one_year": "-16.01",
    "dividents": [
      {
        "DATE": "2018-07-05",
        "VALUE": "0.20"
      },
      {
        "DATE": "2017-07-18",
        "VALUE": "0.20"
      },
      {
        "DATE": "2016-05-17",
        "VALUE": "0.51"
      },
      {
        "DATE": "2015-05-13",
        "VALUE": "0.06"
      },
      {
        "DATE": "2014-06-16",
        "VALUE": "0.01"
      },
      {
        "DATE": "2013-04-25",
        "VALUE": "0.07"
      },
      {
        "DATE": "2012-06-04",
        "VALUE": "0.19"
      },
      {
        "DATE": "2011-06-02",
        "VALUE": "0.33"
      },
      {
        "DATE": "2010-04-29",
        "VALUE": "0.37"
      },
      {
        "DATE": "2009-10-26",
        "VALUE": "0.43"
      }
    ],
    "last_close_date_price": 10.68,
    "EPS_avg_7": "0.61",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.26"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.65"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.74"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "1.81"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.22"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.33"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.47"
      }
    ]
  },
  {
    "code": "sh601818",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.09",
    "NAV_per_share_year1": "5.76",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 4.05,
    "EPS_year1": "0.57",
    "price_change_percent_in_one_year": "3.58",
    "dividents": [
      {
        "DATE": "2018-07-26",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-07-04",
        "VALUE": "0.09"
      },
      {
        "DATE": "2016-07-12",
        "VALUE": "0.17"
      },
      {
        "DATE": "2015-06-02",
        "VALUE": "0.16"
      },
      {
        "DATE": "2014-07-16",
        "VALUE": "0.15"
      },
      {
        "DATE": "2013-06-05",
        "VALUE": "0.04"
      },
      {
        "DATE": "2012-05-30",
        "VALUE": "0.10"
      },
      {
        "DATE": "2011-06-15",
        "VALUE": "0.07"
      }
    ],
    "last_close_date_price": 3.85,
    "EPS_avg_7": "0.51",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.50"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.57"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.55"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.55"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.55"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.58"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.45"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.35"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.28"
      }
    ]
  },
  {
    "code": "sh601857",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.11",
    "NAV_per_share_year1": "5.90",
    "year1": "2017",
    "pay_divident_since": "2008",
    "price_year1": 8.09,
    "EPS_year1": "0.12",
    "price_change_percent_in_one_year": "1.76",
    "dividents": [
      {
        "DATE": "2018-09-20",
        "VALUE": "0.09"
      },
      {
        "DATE": "2018-06-20",
        "VALUE": "0.06"
      },
      {
        "DATE": "2017-09-14",
        "VALUE": "0.07"
      },
      {
        "DATE": "2017-06-21",
        "VALUE": "0.04"
      },
      {
        "DATE": "2016-09-20",
        "VALUE": "0.02"
      },
      {
        "DATE": "2016-06-07",
        "VALUE": "0.02"
      },
      {
        "DATE": "2015-09-17",
        "VALUE": "0.06"
      },
      {
        "DATE": "2015-07-08",
        "VALUE": "0.10"
      },
      {
        "DATE": "2014-09-18",
        "VALUE": "0.17"
      },
      {
        "DATE": "2014-06-04",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-09-11",
        "VALUE": "0.16"
      },
      {
        "DATE": "2013-06-05",
        "VALUE": "0.13"
      },
      {
        "DATE": "2012-09-17",
        "VALUE": "0.15"
      },
      {
        "DATE": "2012-06-06",
        "VALUE": "0.16"
      },
      {
        "DATE": "2011-09-14",
        "VALUE": "0.16"
      },
      {
        "DATE": "2011-05-31",
        "VALUE": "0.18"
      },
      {
        "DATE": "2010-09-15",
        "VALUE": "0.16"
      },
      {
        "DATE": "2010-06-02",
        "VALUE": "0.13"
      },
      {
        "DATE": "2009-09-16",
        "VALUE": "0.12"
      },
      {
        "DATE": "2009-05-27",
        "VALUE": "0.15"
      },
      {
        "DATE": "2008-09-18",
        "VALUE": "0.13"
      },
      {
        "DATE": "2008-05-28",
        "VALUE": "0.16"
      }
    ],
    "last_close_date_price": 7.73,
    "EPS_avg_7": "0.43",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.26"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.12"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.04"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.19"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.59"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.71"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.63"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.73"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.76"
      }
    ]
  },
  {
    "code": "sh601939",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.28",
    "NAV_per_share_year1": "7.04",
    "year1": "2017",
    "pay_divident_since": "2008",
    "price_year1": 7.68,
    "EPS_year1": "0.96",
    "price_change_percent_in_one_year": "41.18",
    "dividents": [
      {
        "DATE": "2018-07-16",
        "VALUE": "0.29"
      },
      {
        "DATE": "2017-06-29",
        "VALUE": "0.28"
      },
      {
        "DATE": "2016-06-29",
        "VALUE": "0.27"
      },
      {
        "DATE": "2015-06-30",
        "VALUE": "0.30"
      },
      {
        "DATE": "2014-07-09",
        "VALUE": "0.30"
      },
      {
        "DATE": "2013-06-20",
        "VALUE": "0.27"
      },
      {
        "DATE": "2012-06-21",
        "VALUE": "0.24"
      },
      {
        "DATE": "2011-06-23",
        "VALUE": "0.21"
      },
      {
        "DATE": "2010-07-07",
        "VALUE": "0.19"
      },
      {
        "DATE": "2009-06-23",
        "VALUE": "0.08"
      },
      {
        "DATE": "2008-11-14",
        "VALUE": "0.10"
      },
      {
        "DATE": "2008-06-23",
        "VALUE": "0.06"
      }
    ],
    "last_close_date_price": 6.69,
    "EPS_avg_7": "0.86",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.86"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.96"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.92"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.91"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.91"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.86"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.77"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.68"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.56"
      }
    ]
  },
  {
    "code": "sh601988",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.17",
    "NAV_per_share_year1": "5.01",
    "year1": "2017",
    "pay_divident_since": "2007",
    "price_year1": 3.97,
    "EPS_year1": "0.56",
    "price_change_percent_in_one_year": "15.41",
    "dividents": [
      {
        "DATE": "2018-07-12",
        "VALUE": "0.18"
      },
      {
        "DATE": "2017-07-13",
        "VALUE": "0.17"
      },
      {
        "DATE": "2016-06-23",
        "VALUE": "0.18"
      },
      {
        "DATE": "2015-07-02",
        "VALUE": "0.19"
      },
      {
        "DATE": "2014-06-26",
        "VALUE": "0.19"
      },
      {
        "DATE": "2013-06-17",
        "VALUE": "0.17"
      },
      {
        "DATE": "2012-06-12",
        "VALUE": "0.15"
      },
      {
        "DATE": "2011-06-09",
        "VALUE": "0.14"
      },
      {
        "DATE": "2010-06-03",
        "VALUE": "0.12"
      },
      {
        "DATE": "2009-06-25",
        "VALUE": "0.11"
      },
      {
        "DATE": "2008-06-26",
        "VALUE": "0.09"
      },
      {
        "DATE": "2007-07-02",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 3.61,
    "EPS_avg_7": "0.52",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.50"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.56"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.54"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.56"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.58"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.53"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.47"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.42"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.37"
      }
    ]
  },
  {
    "code": "sh601992",
    "last_close_date": "2018-11-22",
    "divident_per_share_year1": "0.05",
    "NAV_per_share_year1": "3.52",
    "year1": "2017",
    "pay_divident_since": "2011",
    "price_year1": 5.43,
    "EPS_year1": "0.27",
    "price_change_percent_in_one_year": "21.75",
    "dividents": [
      {
        "DATE": "2018-07-11",
        "VALUE": "0.05"
      },
      {
        "DATE": "2017-07-05",
        "VALUE": "0.05"
      },
      {
        "DATE": "2016-07-05",
        "VALUE": "0.02"
      },
      {
        "DATE": "2015-06-18",
        "VALUE": "0.02"
      },
      {
        "DATE": "2014-07-17",
        "VALUE": "0.03"
      },
      {
        "DATE": "2013-07-09",
        "VALUE": "0.03"
      },
      {
        "DATE": "2012-07-13",
        "VALUE": "0.03"
      },
      {
        "DATE": "2011-07-08",
        "VALUE": "0.03"
      }
    ],
    "last_close_date_price": 3.64,
    "EPS_avg_7": "0.27",
    "profits": [
      {
        "DATE": "2018-09-30",
        "VALUE": "0.29"
      },
      {
        "DATE": "2017-12-31",
        "VALUE": "0.27"
      },
      {
        "DATE": "2016-12-31",
        "VALUE": "0.25"
      },
      {
        "DATE": "2015-12-31",
        "VALUE": "0.21"
      },
      {
        "DATE": "2014-12-31",
        "VALUE": "0.23"
      },
      {
        "DATE": "2013-12-31",
        "VALUE": "0.30"
      },
      {
        "DATE": "2012-12-31",
        "VALUE": "0.28"
      },
      {
        "DATE": "2011-12-31",
        "VALUE": "0.32"
      },
      {
        "DATE": "2010-12-31",
        "VALUE": "0.28"
      }
    ]
  }
];
			}
		});

		return data;
	}());
}(window._investor = window._investor || {}));
