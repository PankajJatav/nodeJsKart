var Table = require('cli-table');
var Discount = require('./discount');
var discount = new Discount();

var table = new Table({
	head: ['Item', 'Price']
});

function bill() {
	this.items = []
};

bill.prototype.addItem = function(item) {
	this.items.push({
		item: item
	})
};

bill.prototype.show = function() {
	let that = this;
	let checkoutItem = [];
	that.items.forEach(function(item){
		console.log(item);
		let offer = discount.offer.find(function(offer){ return item.item == offer.product });
		console.log(offer);
	});

	that.items.forEach(function(item){
		table.push(
	    	[item.item, '0']
		);
	});
	that.items.forEach(function(item){
		let offer = discount.offer.find(function(offer){ return item.item == offer.product })
		console.log(offer);
		// item.code == 
	});
	console.log(table.toString());
};

module.exports = bill;
