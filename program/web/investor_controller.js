(function(investor) {
	"use strict";
	investor.controller = investor.controller || (function(){
		var model = investor.model;
		var headerRowElement;
		var freezeHeaderRowElement;

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
			freezeHeaderRowElement.style.display = 'none';
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
		
		function _debug(text){
			var debugElement = document.querySelector('#debug');
			debugElement.innerHTML = text;
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
			var origX = 0;
			var origY = 0;
			window.addEventListener('scroll', function(e){
				if(origY != window.scrollY){ // handle vertical scroll.
					var rect = headerRowElement.getBoundingClientRect();
					
					_debug(rect.top);
					
					if(rect.top <= 0){
						freezeHeaderRowElement.style.display = "flex";
						_setDynamicHeader();
					}else{
						freezeHeaderRowElement.style.display = "none";
					}

					origY = window.scrollY;
				}
				if(origX != window.scrollX){ // handle horizontal scroll.
					var leftOffset = headerRowElement.offsetLeft;
					freezeHeaderRowElement.style.left = (leftOffset - window.scrollX).toString() + 'px';

					origX = window.scrollX;
				}
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
			
			_setDynamicHeader(this);

			this.classList.add('selected');
		}
		
		function _setDynamicHeader(ele){
			if(ele){
				var rect = ele.getBoundingClientRect();
				freezeHeaderRowElement.style.top = rect.top - freezeHeaderRowElement.offsetHeight;
				freezeHeaderRowElement.style.left = ele.childNodes[1].offsetLeft+ele.childNodes[1].offsetWidth;
			}
			else{				
				var selectedRowElements = document.querySelectorAll('#table .row.selected');
				if(selectedRowElements.length==0){ return; }
				
				ele = selectedRowElements[0];
				var rect = ele.getBoundingClientRect();
				freezeHeaderRowElement.style.top = rect.top - freezeHeaderRowElement.offsetHeight;
				freezeHeaderRowElement.style.left = ele.childNodes[1].offsetLeft+ele.childNodes[1].offsetWidth;
			}
		}

		return {
			displayTable: _displayTable,
			displayWords: _displayWords
		};
	}());
}(window._investor = window._investor || {}));
