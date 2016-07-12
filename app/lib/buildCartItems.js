

export default (props) => {
	const products = props.products
	const cartItems = props.cartItems
	
	// filter products by cartItems
		// find cart item qyt by product id
	// map qyt from cartItems to products
		// find cart item qyt by product id


	// return cartItems.find(item => item.id === 1)
	return products.filter(p => {return findCartQyt(cartItems, p.id)})
		.map(p => {return Object.assign({}, p, {qyt:findCartQyt(cartItems,p.id)}, {total:p.price * findCartQyt(cartItems,p.id)})})
}

const findCartQyt = (cartItems, id) => {
	
	return cartItems.find(item => item.id === id) ? cartItems.find(item => item.id === id).qyt:false
}
