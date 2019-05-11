(function(investor) {
	"use strict";
	investor.controller = investor.controller || (function(){
		var model = investor.model;
		var balance = investor.balance;
		var headerRowElement;
		var freezeHeaderRowElement;
		var selectedRowElement;

		function _displayTable(){
			var market = investor.market;
			market.retrieve().then(function(){}).catch(function(){}).then(function(){

				var tableElement = document.querySelector('#table');

				var header = model.header;

				var tableData = model.tableData;
				var sortedData = tableData.sort(function(a, b){
					return b.price_diff_ratio - a.price_diff_ratio;
				});
				_addProfitHistory(sortedData)
				_addDividentHistory(sortedData)
				_addDebtAssetRatioHistory(sortedData)
				_addNAVPerSharesHistory(sortedData)
				_table(tableElement, header, sortedData)

				_addOnClickEventToTableRow();
				//_addFreezeClassToHeaderRow();
				//_addFreezeClassToColumn(0);
				_showBalance();
			});

			_addScrollEvent();
		}

		function _addProfitHistory(sortedData){
			sortedData.forEach(
				function(item){
					var profits = item['profits'];
					if(profits){
						var list = _toNoSpaceList(profits);
						item['profit_history'] = list;
					}
				}
			);
		}

		function _addDividentHistory(sortedData){
			sortedData.forEach(
				function(item){
					var dividents = item['dividents'];
					if(dividents){
						var list = _toNoSpaceList(dividents);
						item['divident_history'] = list;
					}
				}
			);
		}

		function _addDebtAssetRatioHistory(sortedData){
			sortedData.forEach(
				function(item){
					var debt_asset_ratios = item['debt_asset_ratios'];
					if(debt_asset_ratios){
						var list = _toNoSpaceList(debt_asset_ratios);
						item['debt_asset_ratio_history'] = list;
					}
				}
			);
		}

		function _addNAVPerSharesHistory(sortedData){
			sortedData.forEach(
				function(item){
					var NAV_per_shares = item['NAV_per_shares'];
					if(NAV_per_shares){
						var list = _toNoSpaceList(NAV_per_shares);
						item['NAV_per_share_history'] = list;
					}
				}
			);
		}
		
		function _toNoSpaceList(objArray){
			return "<div class='noSpace hide'><div class='list'>" + _toString(objArray) + "</div></div>";
		}
		
		function _toString(objArray){
			var strArray = [];
			objArray.forEach(function(item){
				var str = item['DATE'].substr(2, 5).replace('-', '') + ': ' + item['VALUE'];
				strArray.push(str);
			});
			return strArray.join('<br/>');
		}

		function _table(tableElement, header, tableData){
			// header
			var headerProperties = _getHeaderProperties(header);
			headerRowElement = _createRow(header, headerProperties);
			headerRowElement.classList.add('header-row');
			tableElement.appendChild(headerRowElement);

			tableData.forEach(
				function(rowData){
					var newRowElement = _createRow(rowData, headerProperties);
					tableElement.appendChild(newRowElement);
				}
			);

			freezeHeaderRowElement = _createRow(header, headerProperties);
			freezeHeaderRowElement.classList.add('freezeHeader');
			freezeHeaderRowElement.classList.add('header-row');
			freezeHeaderRowElement.style.display = 'flex';
			freezeHeaderRowElement.style.visibility = 'hidden';
			document.body.appendChild(freezeHeaderRowElement);
		}

		function _createRow(rowData, headerProperties){
			var newRowElement = document.createElement('div');
			newRowElement.className = 'row';
			headerProperties.forEach(
				function(headerProperty){
					newRowElement.appendChild(_createCell(rowData[headerProperty]));
				}
			);
			return newRowElement;
		}

		function _createCell(cellData){
			var newCellElement = document.createElement('div');
			newCellElement.innerHTML = cellData;
			newCellElement.className = typeof cellData;
			return newCellElement;
		}

		function _getHeaderProperties(header){
			var properties = [];
			for(var property in header){
				if(header.hasOwnProperty(property)){
					properties.push(property);
				}
			}
			return properties;
		}

		function _displayWords(){
			var words = model.words;
			var wordsElement = document.querySelector('#words');
			words.forEach(
				function(word){
					var wordElement = document.createElement('p');
					wordElement.innerHTML = word;
					wordsElement.appendChild(wordElement);
				}
			);
		}
		
		function _showBalance(){
			var element = document.querySelector('#balance');
			var depositAmount = balance.depositAmount;
			var investmentAmount = _getinvestmentAmount(balance.investments)
			element.innerHTML = _toBalanceGraph(depositAmount, investmentAmount);
		}
		
		function _getinvestmentAmount(investments){
			var total = 0;
			investments.forEach(function(investment){
				var price = _getLastestPrice(investment.code);
				var amount = investment.amount;
				
				total += price*amount;
			})
			return total;
		}
		
		function _getLastestPrice(code){
			var live_market_data = window['hq_str_'+code];
			if(live_market_data){
				//var hq_str_sh601006="大秦铁路, 27.55, 27.25, 26.91, 27.55, 26.20, 26.91, 26.92, 22114263, 589824680, 4695, 26.91, 57590, 26.90, 14700, 26.89, 14300, 26.88, 15100, 26.87, 3100, 26.92, 8900, 26.93, 14230, 26.94, 25150, 26.95, 15220, 26.96, 2008-01-11, 15:05:32";
				var price = parseFloat(live_market_data.split(',')[3]);
				if(price==0){
					price = parseFloat(live_market_data.split(',')[2]);
				}
				return price;
			}
		}

		function _toBalanceGraph(depositAmount, investmentAmount){
			var height = 10;
			var width = 500;
			
			// real
			var investmentRealPercent = investmentAmount*1.0/(depositAmount+investmentAmount);
			var x11 = (width*investmentRealPercent-1).toFixed(0);
			var x12 = (width*investmentRealPercent+1).toFixed(0);
			
			// settings
			var x21 = 0;
			var x22 = width;
			var investmentSettingPercent = 0.5;
			var thresholdPercent = 0.1;
			var x31 = (width*investmentSettingPercent*(1-thresholdPercent)).toFixed(0);
			var x32 = (width*investmentSettingPercent*(1+thresholdPercent)).toFixed(0);

			// difference between real and settings
			var differencePercent = investmentRealPercent-investmentSettingPercent

			var html_svg = '';			
			html_svg += '<svg height="'+height+'" width="'+width+'">';
			html_svg += '<line x1="'+x11+'" y1="2" x2="'+x12+'" y2="2" style="stroke:rgb(100,100,100);stroke-width:4" />';
			html_svg += '<line x1="'+x21+'" y1="5" x2="'+x22+'" y2="5" style="stroke:rgb(100,100,100);stroke-width:2" />';
			html_svg += '<line x1="'+x31+'" y1="7" x2="'+x32+'" y2="7" style="stroke:rgb(100,100,100);stroke-width:2" />';
			html_svg += 'Sorry, your browser does not support inline SVG.'
			html_svg += '</svg>'
			var html_info = ''
			html_info += '<div>当前值：'+(differencePercent*100).toFixed(1)+'%</div>'
			html_info += '<div>预设域值：'+(thresholdPercent*100).toFixed(1)+'%</div>'
			html_info += '<div>预设投资比例：'+(investmentSettingPercent*100).toFixed(1)+'%</div>'
			
			html_info += '<div>建议：'+_getAdvise(differencePercent, thresholdPercent)+'</div>'
			
			return html_svg + html_info;
		}
		
		function _getAdvise(differencePercent, thresholdPercent){
			if(Math.abs(differencePercent)>thresholdPercent){
				if(differencePercent<0) { return '增加'; }
				else { return '减少'; }
			}
			else{
				return '不变';
			}
		}
		/*
		function _addFreezeClassToColumn(index){
			var rowElements = document.querySelectorAll('#table .row');
			Array.prototype.forEach.call(rowElements,
				function(rowElement){
					var cellElements = rowElement.querySelectorAll('div');
					cellElements[index].classList.add('freezeX');
				}
			);
		}

		function _addFreezeClassToHeaderRow(){
			var rowElements = document.querySelectorAll('#table .row');
			var cellElements = rowElements[0].querySelectorAll('div');
			var xyCrossCell = cellElements[0];
			xyCrossCell.style.zIndex = "1";

			Array.prototype.forEach.call(cellElements,
				function(cellElement){
					cellElement.classList.add('freezeY');
				}
			);
		}

		function _addScrollEvent(){
			var freezeXStyle = document.styleSheets[0].rules[0].style;
			var freezeYStyle = document.styleSheets[0].rules[1].style;

			window.addEventListener('scroll', function(e){
				freezeXStyle.left = window.scrollX.toString() + 'px';
				freezeYStyle.top = window.scrollY.toString() + 'px';
				//console.log(window.scrollX);
			});
		}
		*/

		function _addScrollEvent(){
			var timer;
			window.addEventListener('scroll', function(e){
				clearTimeout(timer);
				setTimeout(function(){ _setDynamicHeader(); }, 150);
			});
		}

		function _addOnClickEventToTableRow(){
			var rowElements = document.querySelectorAll('#table .row');
			var i;
			for(i=1; i<rowElements.length; i++){
				rowElements[i].onclick = _rowOnClickHandler;
			}
		}

		function _rowOnClickHandler(){
			var selectedRowElements = document.querySelectorAll('#table .row.selected');

			Array.prototype.forEach.call(selectedRowElements,
				function(selectedRowElement){
					selectedRowElement.classList.remove('selected');
				}
			);
			
			this.classList.add('selected');
			selectedRowElement = this;
			_setDynamicHeader();
		}
		
		function _setDynamicHeader(){
			if(!selectedRowElement) return;
			
			var headerRect = headerRowElement.getBoundingClientRect();
			
			if(headerRect.top <= -10){
				var rect = selectedRowElement.getBoundingClientRect();
				freezeHeaderRowElement.style.top = rect.top - freezeHeaderRowElement.offsetHeight;
				freezeHeaderRowElement.style.left = selectedRowElement.childNodes[1].offsetLeft + selectedRowElement.childNodes[1].offsetWidth - window.scrollX;
				freezeHeaderRowElement.style.visibility = 'visible';

			}else{
				freezeHeaderRowElement.style.visibility = 'hidden';
			}
		}

		return {
			displayTable: _displayTable,
			displayWords: _displayWords
		};
	}());
}(window._investor = window._investor || {}));
