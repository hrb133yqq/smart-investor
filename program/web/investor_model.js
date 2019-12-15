(function(investor) {
	"use strict";
	investor.model = investor.model || (function(){
		// EPS earning per share
		// PER price earning ratio
		// NAV net asset value
		var model = {};
		var currentYear = 2019
		var lastYear = currentYear-1
		var beforeLastYear = lastYear - 1
		var sevenYearBefore = currentYear - 7

		var Stock = (function(){
			var Stock = function(){};

			Object.defineProperty(Stock.prototype, 'PER_avg_7', {
				get: function(){
					return (this.latest_price/this.EPS_avg_7).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'PER_year1', {
				get: function(){
					return (this.latest_price/this.EPS_year1).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'price_to_dividend_ratio_year1', {
				get: function(){
					return (this.divident_per_share_lastYear/this.latest_price*100).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'book_to_price_ratio', {
				get: function(){
					return (this.NAV_per_share_lastYear/this.latest_price).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'EPS25_avg_7_minus_price', {
				get: function(){
					return (this.EPS_avg_7*25 - this.latest_price).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'PER20_year1_minus_price', {
				get: function(){
					return (this.EPS_year1*20 - this.latest_price).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'safe_price', {
				get: function(){
					return Math.min((this.EPS_avg_7*25).toFixed(1), (this.EPS_year1*20).toFixed(1));
				}
			});
			Object.defineProperty(Stock.prototype, 'price_diff', {
				get: function(){
					return (this.safe_price - this.latest_price).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'price_diff_ratio', {
				get: function(){
					if(this.safe_price<0){
						return -1000000;
					}
					return (this.price_diff/this.latest_price*100).toFixed(1);
				}
			});
			Object.defineProperty(Stock.prototype, 'market_value', {
				get: function(){
					return (this.latest_price*this.total_shares/100000000).toFixed(1);
				}
			});
			return Stock;
		}());

		Object.defineProperty(model, 'stockCodes', {
			get: function(){
				var rawData = investor.data.stocks;
				return rawData.map(function(data){
					return data.code;
				});
			}
		});

		Object.defineProperty(model, 'header', {
			get: function(){
				return {
					name: '名称',
					code: '代码',
					price_year1: '价格 '+lastYear.toString()+'.12.31',
					price_change_percent_in_one_year: '价格变动自'+beforeLastYear.toString()+'.12 (%)',
					latest_price: '最近价格',
					// pay_divident_since: '每年股利支付自',
					//EPS_avg_7: '每股市场收益 2010-2016 (7年平均收益)',
					//EPS_2016: '每股收益 2016',
					//divident_per_share_2016: '每股股利 2016',
					//NAV_per_share_2016: '每股净资产价值 2016',
					PER_avg_7: sevenYearBefore.toString()+'-'+lastYear.toString()+'市场与收益(7年平均)',
					PER_year1: '市场与收益 '+lastYear.toString(),
					price_to_dividend_ratio_year1: '股利率 '+lastYear.toString(),
					book_to_price_ratio: '净有形资产比市价比率',
					debt_asset_ratio_lastYear: '资产负债率',
					current_debt_divide_current_asset_lastYear: '流动资产与流动负债比率',
					//EPS25_avg_7_minus_price: '25倍(7年平均收益)-价格',
					//PER20_year1_minus_price: '20倍('+lastYear.toString()+'年收益)-价格',
					safe_price: '安全边际价格',
					//price_diff: '价差',
					price_diff_ratio:'价差比率',
					market_value: '市值',
					//profits: '收益历史记录',
					profit_history: '收益历史记录',
					//dividents: '股息历史记录',
					divident_history: '股息历史记录',
					debt_asset_ratio_history: '资产负债率历史记录',
					NAV_per_share_history: '账户净值历史记录',
					goodwill_assets_history: '商誉历史记录',
				};
			}
		});

		Object.defineProperty(model, 'words', {
			get: function(){
				return [
					'每一个公司应该是大的、突出的、谨慎投资的。',
					'每个公司应该具有一个长期的连续的红利支付记录。',
					'联系到过去7年的平均收益，投资者应表明他愿意为一个证券所支付的价格的界限。（平均收益的25倍，并且不多于最近12月的20倍）',
					'应该有适当的但不是长度的多样化，就也许意味着有最少10种和最多大约30种不同的证券。',
					'',
					'发现廉价的普通股有两种方法：',
					'1。',
					'2。把更多的注意力放在实际资产价值上，特别强调流动资产或流动资本。',
					'',
					'影响资本化率的因素',
					'管理：',
					'公平地说，一个杰出的公司会有显著的良好的管理，它显示在以往的记录中，还会显示在下一个5年的预测中，并更多的作为影响长期前景的因素出现。在另一个时间，它会带着乐观的考虑估计它的趋势，并易导致价值的高估。',
					'财力和资本结构',
					'大量公积金，银行贷款。债券 （偶尔地，资本过大的结构--普通股相对债券和优先股太少--也许在顺利的状态下给普通股造成巨大的“投机”利润，这就是所谓的“杠杆作用”因素）。',
					'',
					'股利记录',
					'',
					'当期股利率（p176）',
					'幸运的是，大部分公司有所谓的标准股利政策。它意味着它们平均收益约2/3用于分配，除非近期高利润和通货膨胀要求更多的资本，使这个比率相对趋于降低。',
					'',
				];
			}
		});

		Object.defineProperty(model, 'tableData', {
			get: function(){
				var stocks = investor.data.stocks;
				var tableData = [];
				stocks.forEach(function(item){
					var stock = new Stock();

					for(var attr in item){
						if(item.hasOwnProperty(attr)){
							stock[attr] = item[attr];
						}
					}
					//Object.assign(stock, item); //too new

					var live_market_data = window['hq_str_'+stock.code];
					if(live_market_data){
						//var hq_str_sh601006="大秦铁路, 27.55, 27.25, 26.91, 27.55, 26.20, 26.91, 26.92, 22114263, 589824680, 4695, 26.91, 57590, 26.90, 14700, 26.89, 14300, 26.88, 15100, 26.87, 3100, 26.92, 8900, 26.93, 14230, 26.94, 25150, 26.95, 15220, 26.96, 2008-01-11, 15:05:32";
						var price = parseFloat(live_market_data.split(',')[3]);
						if(price==0){
							price = parseFloat(live_market_data.split(',')[2]);
						}
						stock.latest_price = price;
						stock.name = live_market_data.split(',')[0];
					}

					tableData.push(stock);
				});

				return tableData;
			}
		});

		return model;
	}());
}(window._investor = window._investor || {}));


/*
0：”大秦铁路”，股票名字；
1：”27.55″，今日开盘价；
2：”27.25″，昨日收盘价；
3：”26.91″，当前价格；
4：”27.55″，今日最高价；
5：”26.20″，今日最低价；
6：”26.91″，竞买价，即“买一”报价；
7：”26.92″，竞卖价，即“卖一”报价；
8：”22114263″，成交的股票数，由于股票交易以一百股为基本单位，所以在使用时，通常把该值除以一百；
9：”589824680″，成交金额，单位为“元”，为了一目了然，通常以“万元”为成交金额的单位，所以通常把该值除以一万；
10：”4695″，“买一”申请4695股，即47手；
11：”26.91″，“买一”报价；
12：”57590″，“买二”
13：”26.90″，“买二”
14：”14700″，“买三”
15：”26.89″，“买三”
16：”14300″，“买四”
17：”26.88″，“买四”
18：”15100″，“买五”
19：”26.87″，“买五”
20：”3100″，“卖一”申报3100股，即31手；
21：”26.92″，“卖一”报价
(22, 23), (24, 25), (26,27), (28, 29)分别为“卖二”至“卖四的情况”
30：”2008-01-11″，日期；
31：”15:05:32″，时间；
*/
