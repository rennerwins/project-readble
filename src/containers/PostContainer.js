import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments, voteComment } from '../actions/comment'
import { sortByRecent, sortByScore } from '../actions/sort'
import { votePost, fetchPost } from '../actions/post'
import PostDetails from '../components/PostDetails'
import PostComment from '../components/PostComment'
import CreateComment from '../components/CreateComment'
import SortList from '../components/SortList'
import api from '../api'

class PostContainer extends Component {
	componentDidMount() {
		let { post_id } = this.props.match.params
		this.props.fetchPost(post_id)
		this.props.fetchComments(post_id)
		this.props.sortByScore('high')
	}

	handleDeletePost = postID => {
		api.deletePost(postID)
		this.props.history.push('/')
	}

	handleDeleteComment = commentID => {
		let { post_id } = this.props.match.params
		api.deleteComment(commentID).then(() => {
			this.props.fetchComments(post_id)
		})
	}

	handleSortChange = e => {
		const { value } = e.target
		if (value === 'new' || value === 'old') {
			this.props.sortByRecent(value)
		}

		if (value === 'high' || value === 'low') {
			this.props.sortByScore(value)
		}
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
										<h5>Comments</h5>
										<SortList
											sort={this.props.sort}
											handleSortChange={this.handleSortChange}
										/>
										<br />
										{comment.map(c => (
											<PostComment
												comment={c}
												key={c.id}
												voteComment={voteComment}
												deleteComment={this.handleDeleteComment}
											/>
										))}
									</div>
								</div>
							</div>
						)}

						<div className="col-12 col-lg-8 mt-3">
							<div className="card">
								<div className="card-body">
									<h5>Add New Comment</h5>
									<hr />
									<CreateComment parentId={post.id} />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ post, comment, sort }, ownProps) => {
	let { post_id } = ownProps.match.params
	return {
		post: post[post_id],
		comment: Object.keys(comment).map(c => comment[c]),
		sort
	}
}

export default connect(mapStateToProps, {
	fetchPost,
	votePost,
	fetchComments,
	voteComment,
	sortByRecent,
	sortByScore
})(PostContainer)
