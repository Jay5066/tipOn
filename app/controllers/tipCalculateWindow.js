
	var data = arguments[0] || {};
	var cleanAmountValue = Alloy.Globals.billAmount;
	var splitNum = Alloy.Globals.splitNum;
	var cleanAmountValue = cleanAmountValue.replace("$", "");
	
	//console.log(cleanAmountValue);
		
	function calculatedTip(percentage){
		var tipValue = [];
			if(percentage){
				tipValue['totalPerPerson'] = cleanAmountValue * (percentage / 100) / splitNum;
				tipValue['totalTip'] = (cleanAmountValue / splitNum)+tipValue['totalPerPerson'];
				tipValue['total'] =  tipValue['totalPerPerson'] * splitNum ;
			}
		return tipValue;
	}
	
	var t = calculatedTip(data.tipValue);
	
	$.tipPerPerson.text = "$"+t['totalPerPerson'].toFixed(2);
	$.totalPerPerson.text = "$"+t['totalTip'].toFixed(2);
	$.total.text = "$"+t['total'].toFixed(2);

	 function oWindow(e){
	    //Create a new Window 
			var modalWindow = Alloy.createController("modalWindow").getView();
			Alloy.Globals.navMenu.add(modalWindow);
			Alloy.Globals.navMenu.openWindow(modalWindow);
	    }