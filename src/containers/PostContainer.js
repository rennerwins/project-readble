import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, votePost, fetchComments, voteComment } from '../actions'
import PostDetails from '../components/PostDetails'
import PostComment from '../components/PostComment'
import api from '../api'

class PostContainer extends Component {
	componentDidMount() {
		let { post_id } = this.props.match.params
		this.props.fetchPost(post_id)
		this.props.fetchComments(post_id)
	}

	handleDeletePost = postID => {
		api.deletePost(postID)
		this.props.history.push('/')
	}

	render() {
		const { post, votePost, voteComment, comment } = this.props

		return (
			<div>
				{post !== undefined && (
					<div className="row my-3 justify-content-lg-center">
						<div className="col-12 col-lg-8">
							<PostDetails
								post={post}
								votePost={votePost}
								deletePost={this.handleDeletePost}
							/>
						</div>

						{comment.length > 0 && (
							<div className="col-12 col-lg-8 mt-3">
								<div className="card">
									<div className="card-body pb-0">
										{comment.map(c => (
											<PostComment
												comment={c}
												key={c.id}
												voteComment={voteComment}
											/>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ post, comment }, ownProps) => {
	let { post_id } = ownProps.match.params
	return {
		post: post[post_id],
		comment: Object.keys(comment).map(c => comment[c])
	}
}

export default connect(mapStateToProps, {
	fetchPost,
	votePost,
	fetchComments,
	voteComment
})(PostContainer)
