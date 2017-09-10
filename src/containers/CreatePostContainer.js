import React, { Component } from 'react'
import InputText from '../components/input/InputText'
import TextArea from '../components/input/TextArea'
import SelectOption from '../components/input/SelectOption'
import { createNewPost, clearNewPost } from '../actions/create'
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
		this.props.history.push(`/${lowerCategory}/${id}`)
	}

	handleClearForm = () => {
		this.props.clearNewPost()
		this.props.history.push('/')
	}

	render() {
		const { create } = this.props
		return (
			<div>
				<div className="row my-3 justify-content-lg-center">
					<div className="col-12 col-lg-8 mt-2">
						<h1>Create New Post</h1>
					</div>
				</div>

				<div className="row justify-content-lg-center">
					<div className="col-12 col-lg-8">
						<InputText
							label="Title"
							change={e => this.props.createNewPost({ title: e.target.value })}
							value={create.title}
						/>

						<TextArea
							label="Body"
							change={e => this.props.createNewPost({ body: e.target.value })}
							value={create.body}
						/>

						<SelectOption
							label="Category"
							value={create.category}
							change={e =>
								this.props.createNewPost({ category: e.target.value })}
						/>

						<InputText
							label="Author"
							change={e => this.props.createNewPost({ author: e.target.value })}
							value={create.author}
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
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ create }) => {
	return { create }
}

export default connect(mapStateToProps, { createNewPost, clearNewPost })(
	CreatePostContainer
)
