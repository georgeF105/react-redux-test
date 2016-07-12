
export function logIn (email, password) {
	return {
		type: 'LOGIN',
		email: email,
		password: password
	}
}

export function logOut () {
	return {
		type: 'LOGOUT'
	}
}


export function addItemToCart (id) {
	return {
		type: 'ADD_TO_CART',
		id: id
	}
}