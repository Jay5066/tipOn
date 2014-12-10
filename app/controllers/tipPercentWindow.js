	
	function plusViewTapped(e){
	    var overlay = Alloy.createWidget('danielhanold.pickerWidget', {
			  id: 'percentAmount',
			  outerView: Alloy.Globals.navMenu,
			  hideNavBar:false,
			  type: 'single-column',
			  selectedValues: [0],
			  pickerValues: [{
				  0:0 + '%',1:5 + '%',2:10 + '%',3:15 + '%',4:20 + '%',5:25 + '%',6:30 + '%',7:35 + '%',8:40 + '%',9:45+ '%',10:50+ '%',
				  11:55 + '%',12:60 + '%',13:65 + '%',14:70 + '%',15:75 + '%',16:80 + '%',17:85 + '%',18:90 + '%',19:95 + '%',20:100+ '%'
			  }],
			  onDone: function(e) {
	   			// Do something
	   			if(e.cancel === true){
	   				Ti.API.info('Entry was cancelled');
	   				//console.log(e);
    				return;
	   			}else{
	   				 var value = e.data[0].value;
   					 var value = value.replace("%",'');
	   				//console.log(value);
	   				var data = {
			        	tipValue:value,
    				};

    			//Create a new Window 
				var tipCalculateWindow = Alloy.createController("tipCalculateWindow",data).getView();
				Alloy.Globals.navMenu.openWindow(tipCalculateWindow);
	   		}
	  		  },
		});
		
	}
	
	function percentViewTapped(e){
		// console.log(this.children[0].title);
	  if(this.children[0].title !=="+"){		
		if(this.children[0].children[0].text){
 			Ti.API.info(JSON.stringify(this.children[0].children[0].text));
			var thisPercentValue = this.children[0].children[0].text;
	
				var data = {
			        tipValue:thisPercentValue,
    			};
				// //Create a new Window 
				var tipCalculateWindow = Alloy.createController("tipCalculateWindow",data).getView();
				Alloy.Globals.navMenu.openWindow(tipCalculateWindow);
				
			}
		}
	}


