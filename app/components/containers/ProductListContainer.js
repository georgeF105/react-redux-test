import { connect } from 'react-redux'

import ProductList from '../ProductList'

const mapStateToProps = (state) => {
	return { 
		products: state.products
	}
}

const ProductListContainer = connect(mapStateToProps)(ProductList)

export default ProductListContainer