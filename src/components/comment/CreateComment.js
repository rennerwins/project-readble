import React, { Component } from 'react'
import InputText from '../input/InputText'
import TextArea from '../input/TextArea'
import { connect } from 'react-redux'
import { createNewComment, clearNewPost } from '../../actions/create'
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

		api.createNewComment(comment).then(() => {
			this.props.fetchComments(parentId)
		})
		this.handleClearForm()
	}

	handleClearForm = () => {
		this.props.clearNewPost()
	}

	render() {
		const { createComment } = this.props
		return (
			<div>
				<TextArea
					label="Body"
					change={e => this.props.createNewComment({ body: e.target.value })}
					value={createComment.body}
				/>

				<InputText
					label="Author"
					change={e => this.props.createNewComment({author: e.target.value})}
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
							<button className="btn btn-primary" onClick={this.handleComment}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, {
	createNewComment,
	clearNewPost,
	fetchComments
})(CreateComment)
