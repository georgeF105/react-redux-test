import React from 'react'
import ShoppingCartItem from './ShoppingCartItem';

export default (props) => {
	const products  = props.cartItems.map( (product) => {
		return <ShoppingCartItem key={product.id} product={product} />
	})
	return (
		<table className="cart-list-table">
			<tbody>
				<tr>
					<th>Product Name</th>
					<th>Price</th>
					<th>Total</th>
					<th>Remove</th>
				</tr>
				{products}
			</tbody>
		</table>
	)
}