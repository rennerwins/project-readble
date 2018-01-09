import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as postAction from '../actions/post';
import * as sortAction from '../actions/sort';
import NotFound from './NotFound';
import PostCard from '../components/post/PostCard';
import SortList from '../components/sort/SortList';

class CategoryContainer extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    this.fetchPosts(category);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = prevProps.match.params.category;
    const currentCategory = this.props.match.params.category;

    if (currentCategory !== prevCategory) {
      this.fetchPosts(currentCategory);
    }
  }

  fetchPosts = category => {
    this.props.fetchPostsFromCategory(category);
    this.props.sortOption('high');
  };

  handleSortChange = e => {
    const { value } = e.target;

    this.props.sortOption(value);
  };

  render() {
    const { category } = this.props.match.params;

    return (
      <div>
        {category === 'react' || category === 'redux' || category === 'udacity' ? (
          <div>
            <div className="row mt-3">
              <div className="col-12">
                <h1 className="text-capitalize">{category}</h1>
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12">
                <SortList sort={this.props.sort} handleSortChange={this.handleSortChange} />
              </div>
            </div>

            <div className="row">
              {this.props.post.length > 0 ? (
                this.props.post.map((p, index) => (
                  <div className="col-12 col-md-6 col-lg-4" key={p.id}>
                    <PostCard post={p} votePost={this.props.votePost} />
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <h3>No Post Found</h3>
                </div>
              )}
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ post, sort }) => {
  return {
    post: Object.keys(post).map(num => post[num]),
    sort
  };
};

export default connect(mapStateToProps, {
  ...postAction,
  ...sortAction
})(CategoryContainer);
