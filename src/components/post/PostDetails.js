import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostDetails = ({ post, votePost, deletePost }) => (
  <div className="card">
    <div className="card-body">
      <div className="row mb-3">
        <div className="col-12">
          <h3 className="card-title">{post.title}</h3>
          <h6 className="card-subtitle mb-2 text-muted">
            {post.author}{' '}
            <small className="time">
              {moment(post.timestamp).format('L')} {moment(post.timestamp).format('LT')}
            </small>
          </h6>
          <p className="card-text mt-4 mb-0">{post.body}</p>
          <Link to={`/${post.category}`} className="badge badge-light">
            {post.category}
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <small className="float-left">
            <span className="mr-3 thumbs" onClick={() => votePost(post.id, 'upVote')}>
              <i className="fa fa-thumbs-o-up" aria-hidden="true" />
            </span>
            <span>
              <b>{post.voteScore}</b>
            </span>
            <span className="ml-3 thumbs" onClick={() => votePost(post.id, 'downVote')}>
              <i className="fa fa-thumbs-o-down" aria-hidden="true" />
            </span>
          </small>

          <small className="float-right">
            <Link to={`/${post.category}/${post.id}/edit`}>
              <span className="mr-3 thumbs">Edit</span>
            </Link>

            <span onClick={() => deletePost(post.id)}>
              <i className="fa fa-trash-o thumbs" aria-hidden="true" />
            </span>
          </small>
        </div>
      </div>
    </div>
  </div>
);

PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  votePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostDetails;
