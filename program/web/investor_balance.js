(function(investor) {
	"use strict";
	investor.balance = investor.balance || (function(){
		var balance = {};
		
		Object.defineProperty(balance, 'investments', {
			get: function(){
return [
	{"code":'sh601988', "name":'中国银行', "amount":2100},
	{"code":'sh600469', "name":'风神股份', "amount":700},
	{"code":'sz000039', "name":'中集集团', "amount":500},
	{"code":'sh601668', "name":'中国建筑', "amount":7960},
	{"code":'sh600028', "name":'中国石化', "amount":1900},
	{"code":'sh601117', "name":'中国化学', "amount":1000},
	{"code":'sh600350', "name":'山东高速', "amount":3200},
	{"code":'sh601618', "name":'中国中冶', "amount":3000},
	{"code":'sh600166', "name":'福田汽车', "amount":2400},
	{"code":'sh601088', "name":'中国神华', "amount":200},
	{"code":'sh601808', "name":'中海油服', "amount":600},
	{"code":'sh600743', "name":'华远地产', "amount":1000},
	{"code":'sh600395', "name":'盘江股份', "amount":1000}
];
			}
		});

		Object.defineProperty(balance, 'depositAmount', {
			get: function(){
				return 135000;
			}
		});
		
		return balance;
	}());
}(window._investor = window._investor || {}));
