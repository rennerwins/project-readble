import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, votePost } from '../actions'
import PostCard from '../components/PostCard'

class PostContainer extends Component {
	componentDidMount() {
		let { post_id } = this.props.match.params
		this.props.fetchPost(post_id)
	}

	render() {
		const { post, votePost } = this.props

		return (
			<div>
				{post !== undefined && (
					<div className="row">
						<div className="col-12">
							<PostCard post={post} votePost={votePost} />
						</div>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ post }, ownProps) => {
	let { post_id } = ownProps.match.params
	return {
		post: post[post_id]
	}
}

export default connect(mapStateToProps, { fetchPost, votePost })(PostContainer)
