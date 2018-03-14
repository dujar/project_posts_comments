import React from 'react';
import CommentForm from '../components/commentForm';
import axiosInstance from '../axiosInstance';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';

class HandleCommentForm extends React.Component {
  handleSubmit = comment => {
    // console.log('comment submitted', comment);
    if (comment.id) {
      axiosInstance
        .put(`/comments/${comment.id}`, {
          timestamp: new Date().valueOf(),
          body: comment.body
        })
        .then(resp =>
          this.props.history.push(`/${this.props.category}/${this.props.parentId}`)
        );
    } else {
      axiosInstance
        .post('/comments', {
          ...comment,
          id: uuid(),
          timestamp: new Date().valueOf(),
          parentId: this.props.parentId
        })
        .then(resp =>
          this.props.history.push(`/${this.props.category}/${this.props.parentId}`)
        );
    }
  };

  handleChange = e => {
    // console.log(e);
  };

  render() {
    return (
      <div>
        <CommentForm
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleChange}
          formTitle={'Comment Form'}
          formData={this.props.formData}
        />
      </div>
    );
  }
}

export default withRouter(HandleCommentForm);
