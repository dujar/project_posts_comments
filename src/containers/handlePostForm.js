import React from 'react';
import PostForm from '../components/postForm';
import axiosInstance from '../axiosInstance';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';

class HandlePostForm extends React.Component {
  handleSubmit = post => {
    console.log('post', post);
    if (post.id) {
      axiosInstance.put(`/posts/${post.id}`, {
        title: post.title,
        body: post.body
      });
      this.props.history.push(`/${post.category}/${post.id}`);
    } else {
      axiosInstance.post('/posts', {
        ...post,
        id: uuid(),
        timestamp: new Date().valueOf()
      });
      this.props.history.push('/');
    }
  };

  handleChange = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <PostForm
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleChange}
          formTitle={'Post Form'}
          formData={this.props}
        />
      </div>
    );
  }
}

export default withRouter(HandlePostForm);
