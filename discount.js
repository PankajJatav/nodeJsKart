function discount() {
}

discount.prototype.offer = [
	{
		code: 'BOGO',
		discount: 0,
		byeOneGetOne: true,
		product: 'CF1',
		proudctOffer : 'CF1',
		quantity: 1,
		limit: 0
	},
	{
		code: 'APPL',
		discount: 25,
		byeOneGetOne: false,
		product: 'AP1',
		proudctOffer : 'AP1',
		quantity: 3,
		limit: 0
	},
	{
		code: 'CHMK',
		discount: 0,
		byeOneGetOne: true,
		product: 'CH1',
		proudctOffer : 'MK1',
		quantity: 1,
		limit: 1
	},
	{
		code: 'APOM',
		discount: 50,
		byeOneGetOne: false,
		product: 'OM1',
		proudctOffer : 'AP1',
		quantity: 1,
		limit: 0
	}
]

module.exports = discount;