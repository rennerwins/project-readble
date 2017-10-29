import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const PostComment = ({
  comment, voteComment, deleteComment, edit
}) => (
  <div className="mb-4">
    <div className="row">
      <div className="col-12">
        <h6 className="card-subtitle mb-1">
          {comment.author}{' '}
          <small className="text-muted time">
            {moment(comment.timestamp).format('L')} {moment(comment.timestamp).format('LT')}
          </small>
        </h6>
      </div>
    </div>

    <div className="row mb-1">
      <div className="col-12">
        <p className="card-text comment-body">{comment.body}</p>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <small className="float-left">
          <span className="mr-3 thumbs" onClick={() => voteComment(comment.id, 'upVote')}>
            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
          </span>
          <span>
            <b>{comment.voteScore}</b>
          </span>
          <span className="ml-3 thumbs" onClick={() => voteComment(comment.id, 'downVote')}>
            <i className="fa fa-thumbs-o-down" aria-hidden="true" />
          </span>
        </small>

        <small className="float-right">
          <span className="mr-3 thumbs" onClick={() => edit(comment.id)}>
            Edit
          </span>

          <span className="thumbs" onClick={() => deleteComment(comment.id)}>
            <i className="fa fa-trash-o" aria-hidden="true" />
          </span>
        </small>
      </div>
    </div>
  </div>
);

PostComment.propTypes = {
  comment: PropTypes.object,
  voteComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default PostComment;
