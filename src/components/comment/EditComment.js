import React, { Component } from 'react';
import TextArea from '../input/TextArea';
import { createNewComment } from '../../actions/create';
import { fetchComments } from '../../actions/comment';
import { connect } from 'react-redux';
import api from '../../api';

class EditComment extends Component {
  componentDidMount() {
    const { comment, createComment } = this.props;
    let body = comment[createComment.id].body;
    this.props.createNewComment({ body });
  }

  handleClearForm = e => {
    e.preventDefault();
    this.props.createNewComment({
      id: '',
      editing: false,
      body: '',
    });
  };

  submitEditComment = (e, commentId) => {
    e.preventDefault();
    const { body } = this.props.createComment;
    const { postId } = this.props;
    let timestamp = Date.now();
    let comment = {
      timestamp,
      body,
      commentId,
    };

    if (body.length > 0) {
      api.editComment(comment).then(res => {
        this.handleClearForm();
        this.props.fetchComments(postId);
      });
    }
  };

  render() {
    const { createComment } = this.props;

    return (
      <div className="row my-3">
        <div className="col-12">
          <form onSubmit={e => this.submitEditComment(e, createComment.id)}>
            <div className="col-12">
              <TextArea
                disabled={!createComment.editing}
                change={e => this.props.createNewComment({ body: e.target.value })}
                value={createComment.editing ? createComment.body : ''}
              />
            </div>

            <div className="col-12">
              <div className="float-left">
                <button className="btn btn-default" onClick={this.handleClearForm}>
                  Cancel
                </button>
              </div>

              <div className="float-right">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ comment, createComment }) => {
  return {
    comment,
    createComment,
  };
};

export default connect(mapStateToProps, { createNewComment, fetchComments })(EditComment);
