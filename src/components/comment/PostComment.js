import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Time = styled.small`
	font-style: italic;
	margin-left: 10px;
`
const Thumbs = styled.span`cursor: pointer;`
const CommentBody = styled.p`
	border-left: 3px solid #ccc;
	padding: 4px 0px 4px 6px;
	margin-left: 1px;
`

const PostComment = props => {
	const { comment, voteComment, deleteComment, edit } = props
	return (
		<div className="mb-4">
			<div className="row">
				<div className="col-12">
					<h6 className="card-subtitle mb-1">
						{comment.author}{' '}
						<Time className="text-muted">
							{moment(comment.timestamp).format('L')}{' '}
							{moment(comment.timestamp).format('LT')}
						</Time>
					</h6>
				</div>
			</div>

			<div className="row mb-1">
				<div className="col-12">
					<CommentBody className="card-text">{comment.body}</CommentBody>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<small className="float-left">
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

					<small className="float-right">
						<Thumbs className="mr-3" onClick={() => edit(comment.id)}>Edit</Thumbs>

						<Thumbs onClick={() => deleteComment(comment.id)}>
							<i className="fa fa-trash-o" aria-hidden="true" />
						</Thumbs>
					</small>
				</div>
			</div>
		</div>
	)
}

export default PostComment
