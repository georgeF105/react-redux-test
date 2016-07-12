import React from 'react'

export default (props) => {
	return (
		<tr className="product-detail">
			<td>{props.product.name}</td>
			<td>{props.product.price}</td>
			<td>{props.product.total}</td>
			<td><button>Remove</button></td>
		</tr>
	)
}