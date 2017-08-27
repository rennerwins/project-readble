import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
			<Link to="/" className="navbar-brand">
				Home
			</Link>

			<Link to="/create" className="btn btn-danger">
				New Post
			</Link>
		</nav>
	)
}

export default Navbar
