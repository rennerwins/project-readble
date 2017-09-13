import React, { Component } from 'react'
import InputText from '../components/input/InputText'
import TextArea from '../components/input/TextArea'
import SelectOption from '../components/input/SelectOption'
import * as createAction from '../actions/create'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import api from '../api'

class CreatePostContainer extends Component {
	componentDidMount() {
		if (this.props.post) {
			const { title, body, id, category } = this.props.post
			this.props.createNewPost({
				title,
				body,
				id,
				category
			})
		}
	}

	handleCreatePost = () => {
		const { title, body, category, id } = this.props.create
		let lowerCategory = category.toLowerCase()

		let post = {
			title,
			body,
			id
		}

		api.editPost(post)
		this.props.history.push(`/${lowerCategory}/${id}`)
	}

	handleClearForm = () => {
		const { category, id } = this.props.create
		let lowerCategory = category.toLowerCase()
		this.props.history.push(`/${lowerCategory}/${id}`)
	}

	render() {
		const { create, post } = this.props

		return (
			<div>
				{!post ? (
					<Redirect to="/" />
				) : (
					<div>
						<div className="row my-3 justify-content-lg-center">
							<div className="col-12 col-lg-8 mt-2">
								<h1>Edit Post</h1>
							</div>
						</div>
						<form onSubmit={this.handleCreatePost}>
							<div className="row justify-content-lg-center">
								<div className="col-12 col-lg-8">
									<InputText
										label="Title"
										change={e =>
											this.props.createNewPost({ title: e.target.value })}
										value={create.title}
									/>

									<TextArea
										label="Body"
										change={e =>
											this.props.createNewPost({ body: e.target.value })}
										value={create.body}
									/>

									<SelectOption
										disabled
										label="Category"
										value={post.category}
										change={e =>
											this.props.createNewPost('category', e.target.value)}
									/>

									<InputText
										disabled
										label="Author"
										change={e =>
											this.props.createNewPost('author', e.target.value)}
										value={post.author}
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
												<button className="btn btn-primary">Submit</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ post, create }, ownProps) => {
	let postID = ownProps.match.params.post_id
	return {
		post: post[postID],
		create
	}
}

export default connect(mapStateToProps, createAction)(CreatePostContainer)
