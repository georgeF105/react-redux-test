import React from 'react'
import ShoppingCartItem from './ShoppingCartItem';
import buildCartItems from '../lib/buildCartItems';

export default (props) => {
	const products  = buildCartItems(props).map(p => {return <ShoppingCartItem key={p.id} product={p} />})
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