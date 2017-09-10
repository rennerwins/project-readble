import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Time = styled.small`
	font-style: italic;
	margin-left: 10px;
`
const Thumbs = styled.span`cursor: pointer;`

const PostDetails = props => {
	const { post, votePost } = props
	return (
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

				<small className="float-right">
					<Link to={`/${post.category}/${post.id}/edit`}>
						<span className="mr-3">Edit</span>
					</Link>

					<i className="fa fa-trash-o" aria-hidden="true" />
				</small>
			</div>
		</div>
	)
}

export default PostDetails
