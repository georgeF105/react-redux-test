import { connect } from 'react-redux'

import HeaderBar from '../HeaderBar'
import { logIn, logOut } from '../../actions'

const mapStateToProps = (state) => {
	return { 
		headerInfo: state.headerInfo
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logIn: (email, password) => {
			dispatch(logIn(email,password))
		},
		logOut: () => {
			dispatch(logOut())
		}
	}
}

const HeaderBarContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderBar)

export default HeaderBarContainer