import React, { Component } from 'react'
import TextArea from '../input/TextArea'
import { createNewComment } from '../../actions/create'
import { fetchComments } from '../../actions/comment'
import { connect } from 'react-redux'
import api from '../../api'

class EditComment extends Component {
	componentDidMount() {
		const { comment, createComment } = this.props
		let body = comment[createComment.id].body
		this.props.createNewComment('body', body)
	}

	handleClearForm = () => {
		this.props.createNewComment('id', '')
		this.props.createNewComment('editing', false)
	}

	submitEditComment = commentId => {
		const { body } = this.props.createComment
		const { postId } = this.props
		let timestamp = Date.now()
		let comment = {
			timestamp,
			body,
			commentId
		}
		api.editComment(comment).then(res => {
			this.props.createNewComment('id', '')
			this.props.createNewComment('body', '')
			this.props.createNewComment('editing', false)
			this.props.fetchComments(postId)
		})
	}

	render() {
		const { createComment } = this.props

		return (
			<div className="row my-3">
				<div className="col-12">
					<TextArea
						change={e => this.props.createNewComment('body', e.target.value)}
						value={createComment.body}
					/>
				</div>

				<div className="col-12">
					<div className="float-left">
						<button className="btn btn-default" onClick={this.handleClearForm}>
							Cancel
						</button>
					</div>

					<div className="float-right">
						<button
							className="btn btn-primary"
							onClick={() => this.submitEditComment(createComment.id)}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ comment, createComment }) => {
	return {
		comment,
		createComment
	}
}

export default connect(mapStateToProps, { createNewComment, fetchComments })(
	EditComment
)
