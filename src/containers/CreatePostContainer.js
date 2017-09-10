import React, { Component } from 'react'
import InputText from '../components/InputText'
import TextArea from '../components/TextArea'
import { createNewPost, clearNewPost } from '../actions'
import { connect } from 'react-redux'
import api from '../api'
import uniqid from 'uniqid'

class CreatePostContainer extends Component {
	handleCreatePost = e => {
		const { title, body, category, author } = this.props.create
		let id = uniqid()
		let timestamp = Date.now()
		let lowerCategory = category.toLowerCase()

		let post = {
			id,
			timestamp,
			title,
			body,
			author,
			category: lowerCategory
		}

		api.createNewPost(post)
		this.props.clearNewPost()
	}

	handleClearForm = () => {
		this.props.clearNewPost()
	}

	render() {
		const { create } = this.props
		return (
			<div>
				<h1>Create New Post</h1>

				<InputText
					label="Title"
					change={e => this.props.createNewPost('title', e.target.value)}
					value={create.title}
				/>

				<TextArea
					label="Body"
					change={e => this.props.createNewPost('body', e.target.value)}
					value={create.body}
				/>

				<InputText
					label="Category"
					change={e => this.props.createNewPost('category', e.target.value)}
					value={create.category}
				/>

				<InputText
					label="Author"
					change={e => this.props.createNewPost('author', e.target.value)}
					value={create.author}
				/>

				<div className="row">
					<div className="col-12">
						<div className="float-left">
							<button className="btn btn-default" onClick={this.handleClearForm}>
								Clear
							</button>
						</div>

						<div className="float-right">
							<button
								className="btn btn-primary"
								onClick={this.handleCreatePost}
							>
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

export default connect(mapStateToProps, { createNewPost, clearNewPost })(
	CreatePostContainer
)
