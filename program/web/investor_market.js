(function(investor) {
	"use strict";
	investor.market = investor.market || (function(){
		
		function _retrieve(){
			var model = investor.model;
			var promise = new Promise(function(resolve, reject){
				var script = document.createElement("script");
				script.onload = function() {
					script.onload = null;
					resolve();
				}
				script.onerror = function() {
					script.onerror = null;
					reject();
				}
				script.src = "http://hq.sinajs.cn/list=" + model.stockCodes.toString();

				document.head.appendChild( script );
			});
			return promise;
		}
		
		return {
			retrieve: _retrieve
		}
	}());
}(window._investor = window._investor || {}));