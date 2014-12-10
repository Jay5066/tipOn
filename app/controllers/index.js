
	"use strict";
	Alloy.Globals.navMenu = $.navWin;
        
	//amountSubmit Clicked handeler 
		function submitClicked(){
			Alloy.Globals.billAmount = $.amountTextField.getValue();
			Alloy.Globals.splitNum = $.splitNum.text;
			console.log(isNaN(Alloy.Globals.billAmount));
			if(Alloy.Globals.billAmount !=="$" && Alloy.Globals.billAmount !==""){
			  	// Create a new Window 
			 	var tipPercentWindow = Alloy.createController("tipPercentWindow").getView();
			 	// Get the view of the controller and open it
			 	Alloy.Globals.navMenu.openWindow(tipPercentWindow,{animated:true});
			 }else{
			 	var dialog = Ti.UI.createAlertDialog({
				    message: 'Bill Amount is required.',
				    ok: 'Try Again',
				    title: 'Oops!'
				  }).show();
			 }
		}
		
		//ClearSubmit Clicked handeler 
			function clearClick(e){
				$.amountTextField.setValue('');
					if($.splitNum.text > 1 ){
						$.splitNum.setText("1");
					}
			}
			
		//blurSubmit Clicked handeler 
			function doClick(e) {
				$.amountTextField.blur();  
			}
		
		function subtractNum(e){
			var currentVal = parseInt($.splitNum.getText());
			if (!isNaN(currentVal) && currentVal > 1) {
						$.splitNum.setText(currentVal - 1);
					}else{
						 // Otherwise put a 0 there
						 $.splitNum.setText(1);
				}
		}
		
		function addNum(e){
			var currentVal = parseInt($.splitNum.getText());
		//console.log(currentVal);
			if(!isNaN(currentVal)){
				$.splitNum.setText(currentVal + 1);
			}else{
				// Otherwise put a 0 there
				$.splitNum.setText(0);
			}
		}
		
	 	// //What happens when user touches the text field;
		$.amountTextField.addEventListener('click',function(e){
			if(!this.value){this.value = "$";}
    	});
	   

	    function oWindow(e){
	    //Create a new Window 
			var modalWindow = Alloy.createController("modalWindow").getView();
		// $.navWin.add(modalWindow);
			$.navWin.openWindow(modalWindow);
	    }
	//Open main navWindow 
		$.navWin.open();
		
	
	
	
	

	
	
	

