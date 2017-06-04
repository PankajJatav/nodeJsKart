var colors = require('colors');
var stdin = process.openStdin();
var Product = require('./products');
var Bill = require('./bill');
var product = new Product();
var bill = new Bill();
let options = {};
showOtptions();
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    if(options.type){
    	let code = d.toString().trim();
    	if(product.isValidCode(code)){
    		options.code = code;
    		bill.addItem(code);
    		options = {};
    		showOtptions();
    	} else {
    		console.warn('Please enter the valid product code'.red);
    	}	
    } else {
    	let type = parseInt(d.toString().trim());
    	if(type > 0 && type < 4){
    		if(type == 1) {
    			options.type = d.toString().trim();
				product.list();
    		} else if(type == 2) {
    			bill.show();
    		} else {
    			process.exit();
    		}
    		
    	} else {
    		showOtptions();
    	}	
    }
});
function showOtptions(){
	console.log('1. Add Item');
	console.log('2. Show Your bill');
    console.log('3. Quit');
}
