import React from 'react'

export default (props) => {
	const addItemToCart = (e) => {
		e.preventDefault()
		props.addItemToCart(props.product.id)
	}
	return (
		<tr className="product-detail">
			<td>{props.product.name}</td>
			<td>{props.product.price}</td>
			<td><button onClick={addItemToCart}>Add to Cart</button></td>
		</tr>
	)
}