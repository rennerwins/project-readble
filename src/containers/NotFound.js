import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
	render() {
		return (
			<div className="row my-3 justify-content-lg-center">
				<div className="col-12 col-lg-8">
					<h1>404 Page Not Found</h1>
					<Link to="/">Home</Link>
				</div>
			</div>
		)
	}
}

export default NotFound
