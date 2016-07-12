
const INITAL_STATE = {
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

export default (state = INITAL_STATE, action) => {
	switch(action.type) {
		case 'ADD_PRODUCT':
			console.log('ADD_PRODUCT id:', action.id)
			return state
		case 'ADD_TO_CART':
			console.log('ADD_PRODUCT id:', action.id)
			return state  
		case 'LOGIN':
			const logInHeaderInfo = Object.assign({}, state.headerInfo, {loggedIn:true,userName:action.email})
			return Object.assign({}, state, {headerInfo: logInHeaderInfo})
		case 'LOGOUT':
			const logOutHeaderInfo = Object.assign({}, state.headerInfo, {loggedIn:false})
			return Object.assign({}, state, {headerInfo: logOutHeaderInfo})
		default:
			console.log('type not found:', action.type)
			return state
	}
}