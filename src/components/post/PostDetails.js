import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Time = styled.small`
	font-style: italic;
	margin-left: 10px;
`
const Thumbs = styled.span`cursor: pointer;`

const PostDetails = ({ post, votePost, deletePost }) => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="row mb-3">
					<div className="col-12">
						<h3 className="card-title">{post.title}</h3>
						<h6 className="card-subtitle mb-2 text-muted">
							{post.author}{' '}
							<Time>
								{moment(post.timestamp).format('L')}{' '}
								{moment(post.timestamp).format('LT')}
							</Time>
						</h6>
						<p className="card-text mt-4 mb-0">{post.body}</p>
						<Link to={post.category} className="badge badge-light">
							{post.category}
						</Link>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
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

						<small className="float-right">
							<Link to={`/${post.category}/${post.id}/edit`}>
								<Thumbs className="mr-3">Edit</Thumbs>
							</Link>

							<Thumbs onClick={() => deletePost(post.id)}>
								<i className="fa fa-trash-o" aria-hidden="true" />
							</Thumbs>
						</small>
					</div>
				</div>
			</div>
		</div>
	)
}

PostDetails.propTypes = {
	post: PropTypes.object.isRequired,
	votePost: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired
}

export default PostDetails
