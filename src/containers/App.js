import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategory, fetchAllPost } from '../actions'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'

class App extends Component {
	componentDidMount() {
		this.props.fetchCategory()
		this.props.fetchAllPost()
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

				<div className="row">
					<div className="col-12">
						<h3>Sort by : </h3>
					</div>
				</div>

				<div className="row">
					{this.props.post.map(p =>
						<div className="col-12 col-md-6 col-lg-4" key={p.id}>
							<PostCard post={p} />
						</div>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ category, post }) => {
	return {
		category: Object.keys(category).map(num => category[num]),
		post: Object.keys(post).map(num => post[num])
	}
}

export default connect(mapStateToProps, { fetchCategory, fetchAllPost })(App)
