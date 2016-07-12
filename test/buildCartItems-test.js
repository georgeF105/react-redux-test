import test from 'tape'
import buildCartItems from '../app/lib/buildCartItems'

const initalState = {
	headerInfo:{
		title:'My Shopping Cart',
		loggedIn: false,
		userName: 'guest'
	},
	products:[
		{id:0,name:'thing one',price:2.5},
		{id:1,name:'thing two',price:11},
		{id:2,name:'thing three',price:25.95}
	],
	cartItems:[
		{id:1,qyt:2},
		{id:2,qyt:5}
	]
}

test('Get products test', function(t) {

	const expectedProducts = [
		{id:1,name:'thing two',price:11,total:22,qyt:2},
		{id:2,name:'thing three',price:25.95,total:25.95*5,qyt:5}
	]

	const actualProcucts = buildCartItems(initalState)

	t.deepEqual(actualProcucts,expectedProducts,'cartItems = expetcted')
	t.end()
})