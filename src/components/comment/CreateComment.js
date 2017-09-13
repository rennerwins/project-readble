import React, { Component } from 'react'
import InputText from '../input/InputText'
import TextArea from '../input/TextArea'
import { connect } from 'react-redux'
import * as createAction from '../../actions/create'
import { fetchComments } from '../../actions/comment'
import uniqid from 'uniqid'
import api from '../../api'

class CreateComment extends Component {
	handleComment = e => {
		const { body, author } = this.props.createComment
		const { parentId } = this.props

		let id = uniqid()
		let timestamp = Date.now()

		let comment = {
			id,
			timestamp,
			body,
			author,
			parentId
		}

		if (body.length > 0 && author.length > 0) {
			api.createNewComment(comment).then(() => {
				this.props.fetchComments(parentId)
			})
			this.handleClearForm()
		}
	}

	handleClearForm = () => {
		this.props.clearNewPost()
	}

	render() {
		const { createComment } = this.props
		return (
			<div>
				<form onSubmit={this.handleComment}>
					<TextArea
						required
						label="Body"
						change={e => this.props.createNewComment({ body: e.target.value })}
						value={createComment.body}
					/>

					<InputText
						required
						label="Author"
						change={e =>
							this.props.createNewComment({ author: e.target.value })}
						value={createComment.author}
					/>

					<div className="row">
						<div className="col-12">
							<div className="float-left">
								<button
									className="btn btn-default"
									onClick={this.handleClearForm}
								>
									Cancel
								</button>
							</div>

							<div className="float-right">
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = ({ createComment }) => {
	return { createComment }
}

export default connect(mapStateToProps, {
	...createAction,
	fetchComments
})(CreateComment)
