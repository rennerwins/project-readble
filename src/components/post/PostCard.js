import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Thumbs = styled.span`cursor: pointer;`

const PostCard = ({ post, votePost, index }) => {
	return (
		<div className="card my-2">
			<div className="card-body">
				<Link to={`${post.category}/${post.id}`}>
					<h4 className="card-title">{post.title}</h4>
				</Link>

				<h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
				<p className="card-text mt-4 mb-0">{post.body}</p>

				<Link to={post.category} className="badge badge-light">
					{post.category}
				</Link>
			</div>

			<div className="card-footer">
				<small className="float-left">
					<Thumbs className="mr-3" onClick={() => votePost(post.id, 'upVote')}>
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

				<small className="text-muted float-right">
					{moment(post.timestamp).format('L')}{' '}
					{moment(post.timestamp).format('LT')}
				</small>
			</div>
		</div>
	)
}

PostCard.propTypes = {
	post: PropTypes.object,
	votePost: PropTypes.func.isRequired,
	index: PropTypes.number
}

export default PostCard
