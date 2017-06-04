var Table = require('cli-table');
var table = new Table({
	head: ['Product Code', 'Product Name', 'Product Price']
});

function product(){
}

product.prototype.items = [
	{
		code:'CH1',
		name:'Chai',
		price: 3.11
	},
	{
		code:'AP1',
		name:'Apples',
		price:6.00
	},
	{
		code:'CF1',
		name:'Coffee',
		price:11.23
	},
	{
		code:'MK1',
		name:'Milk',
		price:4.75
	},
	{
		code:'OM1',
		name:'Oatmeal',
		price:3.69
	}
]

product.prototype.list = function(){
	let that = this;
	let items = that.items.map(function(item){
		table.push(
	    	[item.code, item.name, '$'+item.price]
		);
	});
	console.log(table.toString());
}

product.prototype.isValidCode = function(code){
	return this.items.some(function(item){
		return item.code == code;
	})
}

module.exports = product;
