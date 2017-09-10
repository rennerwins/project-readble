import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Time = styled.small`
	font-style: italic;
	margin-left: 10px;
`
const Thumbs = styled.span`cursor: pointer;`

const PostComment = props => {
	const { comment, voteComment } = props
	return (
		<div className="mb-4">
			<h6 className="card-subtitle mb-1">
				{comment.author}{' '}
				<Time className="text-muted">
					{moment(comment.timestamp).format('L')}{' '}
					{moment(comment.timestamp).format('LT')}
				</Time>
				<small className="float-right">
					<Thumbs
						className="mr-3"
						onClick={() => voteComment(comment.id, 'upVote')}
					>
						<i className="fa fa-thumbs-o-up" aria-hidden="true" />
					</Thumbs>
					<span>
						<b>{comment.voteScore}</b>
					</span>
					<Thumbs
						className="ml-3"
						onClick={() => voteComment(comment.id, 'downVote')}
					>
						<i className="fa fa-thumbs-o-down" aria-hidden="true" />
					</Thumbs>
				</small>
			</h6>
			<p className="card-text pl-2 py-0">{comment.body}</p>
		</div>
	)
}

export default PostComment
