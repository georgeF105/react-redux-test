import { connect } from 'react-redux'

import ProductList from '../ProductList'
import { addItemToCart } from '../../actions'

const mapStateToProps = (state) => {
	return { 
		products: state.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItemToCart: (id) => {
			dispatch(addItemToCart(id))
		}
	}
}

const ProductListContainer = connect(mapStateToProps,mapDispatchToProps)(ProductList)

export default ProductListContainer