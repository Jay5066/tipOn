//var rowLink = "http://google.com";
$.sectionContact.addEventListener('itemclick',function(e){
	if(e.sectionIndex === 0){
		//console.log(JSON.stringify(e.itemIndex));
		switch(e.itemIndex){
		    case 0:
				var emailDialog = Ti.UI.createEmailDialog();
				emailDialog.subject = "tipOn feature request";
				emailDialog.toRecipients = ['tiponapp@gmail.com'];
				// emailDialog.messageBody = 'Appcelerator Titanium Rocks!';
				emailDialog.open();
		    break;
		    
		    case 1:
		    		Ti.Platform.openURL('https://fundly.com/tipon');
		        break;
		}
	}else{

		switch(e.itemIndex){
		    case 0:
		        	Ti.Platform.openURL('https://twitter.com/Jchand5066'); 
		        break;
		    case 1:
		        	Ti.Platform.openURL('https://www.facebook.com/tiponapplication'); 
		        break;
		}

	}
});
