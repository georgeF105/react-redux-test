import { connect } from 'react-redux'

import ShoppingCart from '../ShoppingCart'

const mapStateToProps = (state) => {
	return { 
		products: state.products,
		cartItems: state.cartItems
	}
}

const ShoppingCartContainer = connect(mapStateToProps)(ShoppingCart)

export default ShoppingCartContainer