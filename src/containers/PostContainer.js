import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, votePost, fetchComments } from '../actions'
import styled from 'styled-components'
import moment from 'moment'

const PostTitle = styled.h1`
	border-bottom: 2px solid #ddd;
	padding-bottom: 6px;
`

const Time = styled.small`
	font-style: italic;
	margin-left: 10px;
`
const Thumbs = styled.span`cursor: pointer;`

class PostContainer extends Component {
	componentDidMount() {
		let { post_id } = this.props.match.params
		this.props.fetchPost(post_id)
		this.props.fetchComments(post_id)
	}

	render() {
		const { post, votePost } = this.props

		return (
			<div>
				{post !== undefined && (
					<div className="row my-3 justify-content-lg-center">
						<div className="col-12 col-lg-8">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">{post.title}</h4>
									<h6 className="card-subtitle mb-2 text-muted">
										{post.author}{' '}
										<Time>
											{moment(post.timestamp).format('L')}{' '}
											{moment(post.timestamp).format('LT')}
										</Time>
									</h6>
									<p className="card-text mt-4">{post.body}</p>

									<small className="float-left">
										<Thumbs
											className="mr-3"
											onClick={() => votePost(post.id, 'upVote')}
										>
											<i className="fa fa-thumbs-o-up" aria-hidden="true" />
										</Thumbs>
										<span>
											<b>{post.voteScore}</b>
										</span>
										<Thumbs
											className="ml-3"
											onClick={() => votePost(post.id, 'downVote')}
										>
											<i className="fa fa-thumbs-o-down" aria-hidden="true" />
										</Thumbs>
									</small>
								</div>
							</div>
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

export default connect(mapStateToProps, { fetchPost, votePost, fetchComments })(PostContainer)
