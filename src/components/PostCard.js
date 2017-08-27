import React from 'react'
import moment from 'moment'

const PostCard = ({ post }) => {
	return (
		<div className="card my-2">
			<div className="card-body">
				<h4 className="card-title">
					{post.title}
				</h4>
				<h6 className="card-subtitle mb-2 text-muted">
					{post.author}
				</h6>
				<p className="card-text">
					{post.body}
				</p>
			</div>

			<div className="card-footer">
				<small className="text-muted float-left">
					{moment(post.timestamp).format('L')}{' '}
					{moment(post.timestamp).format('LT')}
				</small>

				<small className="float-right">
					<span className="mx-3">
						<i className="fa fa-thumbs-o-up" aria-hidden="true" />
					</span>
					<span>
						<b>
							{post.voteScore}
						</b>
					</span>
					<span className="mx-3">
						<i className="fa fa-thumbs-o-down" aria-hidden="true" />
					</span>
				</small>
			</div>
		</div>
	)
}

export default PostCard
