import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as commentAction from '../actions/comment'
import * as sortAction from '../actions/sort'
import * as postAction from '../actions/post'
import PostDetails from '../components/post/PostDetails'
import PostComment from '../components/comment/PostComment'
import CreateComment from '../components/comment/CreateComment'
import SortList from '../components/sort/SortList'
import EditComment from '../components/comment/EditComment'
import NotFound from './NotFound'
import { Link } from 'react-router-dom'
import api from '../api'

class PostContainer extends Component {
	componentDidMount() {
		let { post_id } = this.props.match.params
		this.props.fetchPost(post_id)
		this.props.fetchComments(post_id)
		this.props.sortByScore('high')
	}

	handleDeletePost = postID => {
		this.props.deletePost(postID)
	}

	handleDeleteComment = commentID => {
		let { post_id } = this.props.match.params
		api.deleteComment(commentID).then(() => {
			this.props.fetchComments(post_id)
		})
	}

	handleEditComment = commentID => {
		this.props.editComment(commentID, true)
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
		const { post, votePost, voteComment, comment, createComment } = this.props
		console.log(this.props)

		return (
			<div>
				{post !== undefined &&
				!post.deleted && (
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
											<div key={c.id}>
												<PostComment
													comment={c}
													voteComment={voteComment}
													deleteComment={this.handleDeleteComment}
													edit={this.handleEditComment}
												/>
												{createComment.id === c.id &&
												createComment.editing === true && (
													<EditComment postId={c.parentId} />
												)}
											</div>
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

				{post !== undefined &&
				post.deleted && (
					<div className="row my-3 justify-content-lg-center">
						<div className="col-12 col-lg-8">
							<h1>Post Deleted</h1>
							<Link to="/">Home</Link>
						</div>
					</div>
				)}

				{post === undefined && <NotFound />}
			</div>
		)
	}
}

const mapStateToProps = ({ post, comment, sort, createComment }, ownProps) => {
	let { post_id } = ownProps.match.params
	return {
		post: post[post_id],
		comment: Object.keys(comment).map(c => comment[c]),
		sort,
		createComment
	}
}

export default connect(mapStateToProps, {
	...commentAction,
	...sortAction,
	...postAction
})(PostContainer)
