import React, {Component} from 'react'
import HeaderBarContainer from './containers/HeaderBarContainer'
import ProductListContainer from './containers/ProductListContainer'
import ShoppingCartContainer from './containers/ShoppingCartContainer'

export default class App extends Component {
	render() {
		return (
			<div>
				<HeaderBarContainer />
					<div className="container">
					<ProductListContainer />
					<ShoppingCartContainer />
				</div>
			</div>
		)
	}
}
