import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as sortAction from '../actions/sort'
import * as postAction from '../actions/post'
import PostCard from '../components/post/PostCard'
import SortList from '../components/sort/SortList'

class App extends Component {
	componentDidMount() {
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
						<SortList
							sort={this.props.sort}
							handleSortChange={this.handleSortChange}
						/>
					</div>
				</div>

				<div className="row">
					{this.props.post.map((p, index) => (
						<div className="col-12 col-md-6 col-lg-4" key={index}>
							<PostCard post={p} votePost={this.props.votePost} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ category, post, sort }) => {
	return {
		category: Object.keys(category).map(num => category[num]),
		post: Object.keys(post)
			.map(num => post[num])
			.filter(p => !p.deleted),
		sort
	}
}

export default connect(mapStateToProps, {
	...postAction,
	...sortAction
})(App)
