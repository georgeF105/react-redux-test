
const INITAL_STATE = {
	products:[
		{id:0,name:'thing one'}
	]
}

export default (state = INITAL_STATE, action) => {
	switch(action.type) {
		case 'ADD_PRODUCT':
			console.log('ADD_PRODUCT id', action.id)
			return state
		default:
			console.log('type not found:', action.type)
			return state
	}
}