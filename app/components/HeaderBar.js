import React from 'react'

export default (props) => {
    const logIn = (e) => {
        e.preventDefault()
        props.logIn('testEmail','testPW')
    }
    const logOut = (e) =>{
        e.preventDefault()
        props.logOut()
    }
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
    	  <div className="container">
    	    <div className="navbar-header">
    	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    	        <span className="sr-only">Toggle navigation</span>
    	        <span className="icon-bar"></span>
    	        <span className="icon-bar"></span>
    	        <span className="icon-bar"></span>
    	      </button>
    	      <a className="navbar-brand" href="/">{props.headerInfo.title}</a>
    	    </div>
    	    <div id="navbar" className="navbar-collapse collapse">

    	    {!props.headerInfo.loggedIn ? (
    	      <form id="login-form" className="navbar-form navbar-right">
    	        <a id="user-name" className="navbar-username" href="#">{props.headerInfo.userName}</a>
    	        	<div className="form-group">
	    	          <input type="text" placeholder="Email" name="email" className="form-control"/>
	    	        </div>
	    	        <div className="form-group">
	    	          <input type="password" placeholder="Password" name="password" className="form-control"/>
	    	        </div>
	    	        <button type="submit" className="btn" onClick={logIn}>Sign in</button>
    	      </form>
    	      ):(
    	      	<form id="login-form" className="navbar-form navbar-right">
    	        	<a id="user-name" className="navbar-username" href="#">{props.headerInfo.userName}</a>
    	      		<button className="btn" onClick={logOut}>Sign out</button>
    	      	</form>
    	      )
	      	}
    	    </div>
    	  </div>
    	</nav>
	)
}
