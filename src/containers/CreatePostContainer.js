import React, { Component } from 'react'
import InputText from '../components/input/InputText'
import TextArea from '../components/input/TextArea'
import SelectOption from '../components/input/SelectOption'
import * as createAction from '../actions/create'
import { connect } from 'react-redux'
import api from '../api'
import uniqid from 'uniqid'

class CreatePostContainer extends Component {
	componentDidMount() {
		this.props.clearNewPost()
	}
	
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

		if (title.length > 0 && body.length > 0 && author.length > 0) {
			api.createNewPost(post)
			this.props.clearNewPost()
			this.props.history.push(`/${lowerCategory}/${id}`)
		}
	}

	handleClearForm = e => {
		e.preventDefault()
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
				<form onSubmit={this.handleCreatePost}>
					<div className="row justify-content-lg-center">
						<div className="col-12 col-lg-8">
							<InputText
								required
								label="Title"
								change={e =>
									this.props.createNewPost({ title: e.target.value })}
								value={create.title}
							/>

							<TextArea
								required
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
								required
								label="Author"
								change={e =>
									this.props.createNewPost({ author: e.target.value })}
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
										<button className="btn btn-primary" type="submit">
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = ({ create }) => {
	return { create }
}

export default connect(mapStateToProps, createAction)(CreatePostContainer)
