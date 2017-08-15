import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategory } from '../actions'
import { Link } from 'react-router-dom'

class App extends Component {
	componentDidMount() {
		this.props.fetchCategory()
	}
	render() {
		console.log(this.props.category)
		return (
			<div>
				<ul>
					{this.props.category.map(c =>
						<li key={c.path}>
							<Link to={c.path}>
								{c.name}
							</Link>
						</li>
					)}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({ category }) => {
	return {
		category: Object.keys(category).map(name => category[name])
	}
}

export default connect(mapStateToProps, { fetchCategory })(App)
