import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	fetchCategory,
	fetchAllPost,
	votePost,
	sortByRecent,
	sortByScore
} from '../actions'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import SortList from '../components/SortList'

class App extends Component {
	componentDidMount() {
		this.props.fetchCategory()
		this.props.fetchAllPost()
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
		return (
			<div>
				<div className="row my-3">
					<div className="col-12">
						{this.props.category.map(c =>
							<Link to={c.path} className="badge badge-light mr-3" key={c.path}>
								{c.name}
							</Link>
						)}
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
					{this.props.post.map((p, index) =>
						<div className="col-12 col-md-6 col-lg-4" key={index}>
							<PostCard post={p} votePost={this.props.votePost} />
						</div>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ category, post, sort }) => {
	return {
		category: Object.keys(category).map(num => category[num]),
		post: Object.keys(post).map(num => post[num]).filter(p => !p.deleted),
		sort
	}
}

export default connect(mapStateToProps, {
	fetchCategory,
	fetchAllPost,
	votePost,
	sortByRecent,
	sortByScore
})(App)
