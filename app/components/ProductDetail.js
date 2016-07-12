import React from 'react'

export default (props) => {
	return (
		<tr className="product-detail">
			<td>{props.product.name}</td>
			<td>{props.product.price}</td>
			<td><button>Add to Cart</button></td>
		</tr>
	)
}