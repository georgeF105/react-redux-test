import React from 'react'
import ProductDetail from './ProductDetail';

export default (props) => {
	const products  = props.products.map( (product) => {
		return <ProductDetail key={product.id} product={product} />
	})
	return (
		<table className="product-list-table">
			<tbody>
				<tr>
					<th>Product Name</th>
					<th>Price</th>
					<th>Buy</th>
				</tr>
				{products}
			</tbody>
		</table>
	)
}