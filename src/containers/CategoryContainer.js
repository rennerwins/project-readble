import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortByRecent, sortByScore } from '../actions'
import { fetchPostsFromCategory, votePost } from '../actions/post'
import PostCard from '../components/PostCard'
import SortList from '../components/SortList'

class CategoryContainer extends Component {
	componentDidMount() {
		const { category } = this.props.match.params
		this.props.fetchPostsFromCategory(category)
		this.props.sortByScore('high')
	}

	handleSortChange = e => {
		const { value } = e.target
		if (value === 'new' || value === 'old') {
			this.props.sortByRecent(value)
		}

		if (value === 'high' || value === 'low') {
			this.props.sortByScore(value)
		}
	}

	render() {
		const { category } = this.props.match.params

		return (
			<div>
				<div className="row mt-3">
					<div className="col-12">
						<h1 className="text-capitalize">{category}</h1>
					</div>
				</div>

				<div className="row my-3">
					<div className="col-12">
						<SortList
							sort={this.props.sort}
							handleSortChange={this.handleSortChange}
						/>
					</div>
				</div>

				<div className="row">
					{this.props.post.map((p, index) => (
						<div className="col-12 col-md-6 col-lg-4" key={p.id}>
							<PostCard post={p} votePost={this.props.votePost} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ post, sort }) => {
	return {
		post: Object.keys(post).map(num => post[num]),
		sort
	}
}

export default connect(mapStateToProps, {
	fetchPostsFromCategory,
	sortByRecent,
	sortByScore,
	votePost
})(CategoryContainer)
