import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsFromCategory } from '../actions'
import PostCard from '../components/PostCard'

class CategoryContainer extends Component {
	componentDidMount() {
		const { category } = this.props.match.params
		this.props.fetchPostsFromCategory(category)
	}

	render() {
		const { category } = this.props.match.params

		return (
			<div>
				<div className="row mt-3">
					<div className="col-12">
						<h1 className="text-capitalize">{category}</h1>
					</div>
				</div>

				<hr />

				<div className="row">
					{this.props.post.map((p, index) => (
						<div className="col-12 col-md-6 col-lg-4" key={p.id}>
							<PostCard post={p} votePost={this.props.votePost} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ post }) => {
	return {
		post: Object.keys(post).map(num => post[num])
	}
}

export default connect(mapStateToProps, { fetchPostsFromCategory })(
	CategoryContainer
)
