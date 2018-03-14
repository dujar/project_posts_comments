import React from 'react';
import CommentForm from '../components/commentForm';
import axiosInstance from '../axiosInstance';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';

class HandleCommentForm extends React.Component {
  handleSubmit = comment => {
    console.log('comment submitted', comment);
    if (comment.id) {
      axiosInstance
        .put(`/comments/${comment.id}`, {
          timestamp: new Date().valueOf(),
          body: comment.body
        })
        .then(resp =>
          this.props.history.push(`/posts/${comment.parentId}`, { edit: false })
        );
    } else {
      axiosInstance
        .post('/comments', {
          ...comment,
          id: uuid(),
          timestamp: new Date().valueOf()
        })
        .then(resp =>
          this.props.history.push(`/posts/${comment.parentId}`, { edit: false })
        );
    }
  };

  handleChange = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <CommentForm
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleChange}
          formTitle={'Comment Form'}
          formData={this.props}
        />
      </div>
    );
  }
}

export default withRouter(HandleCommentForm);
