import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsFromCategory } from '../actions'

class CategoryContainer extends Component {
	componentDidMount() {
		const { category } = this.props.match.params
		this.props.fetchPostsFromCategory(category)
	}

	render() {
		const { category } = this.props.match.params

		return (
			<div>
				<h1>
					{category} container
				</h1>

				<hr />

				<ul>
					{this.props.post.map(p =>
						<li key={p.id}>
							{p.title}
						</li>
					)}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({ post }) => {
	return {
		post: Object.keys(post).map(num => post[num])
	}
}

export default connect(mapStateToProps, { fetchPostsFromCategory })(CategoryContainer)
