import React from 'react';
import Post from '../components/post';
import { withRouter } from 'react-router-dom';
import comments from '../components/comments';
import withComments from '../HoCs/withComments';
import withModal from '../HoCs/withModal';
import postForm from '../components/postForm';
import handlePostForm from './handlePostForm';
import axiosInstance from '../axiosInstance';
import handleCommentForm from './handleCommentForm';

class HandlePost extends React.Component {
  state = {
    editPost: false,
    editComment: false,
    commentSelected: {},
    addComment: false
  };

  handleCommentLike = (id, vote, parentId) => {
    axiosInstance.post(`/comments/${id}`, {
      option: vote
    });
    this.props.history.push(`/posts/${parentId}`);
  };
  handleCommentDelete = (id,parentId) => {
    console.log('comment id:', id);
    axiosInstance
      .delete(`/comments/${id}`)
      .then(resp => this.props.history.push(`/posts/${parentId}`));
  };
  handleCommentEdit = comment => {
    console.log('edit comment:', comment);
    this.setState({
      editComment: true,
      commentSelected: comment
    });
  };
  handlePostLike = (id, vote) => {
    axiosInstance.post(`/posts/${id}`, {
      option: vote
    });
    this.props.history.push(`/posts/${id}`);
  };
  handlePostDelete = id => {
    console.log('id:', id);
    axiosInstance
      .delete(`/posts/${id}`)
      .then(resp => this.props.history.push('/'));
  };

  handlePostEdit = e => {
    e.preventDefault();
    console.log('edit:', e);
    this.setState({
      editPost: true
    });
  };

  handleBackDropClick = (type) => {
    console.log(type)
    if(type === 'post'){
      this.setState({
        editPost: false
      });
    } else if (type === 'commentToAdd') {
      this.setState({
        addComment: false
      });
    } else {
      this.setState({
        editComment: false
      });
    }
  }

  handleAddCommentClick = (e) => {
    e.preventDefault()
    this.setState({
      addComment: true
    });
  }

  render() {
    console.log('id post [HANDLEPOST]', this.props.post);
    const EnhancedComments =
      this.props.post && this.props.post.commentCount > 0
        ? withComments(this.props.post.id)(comments)
        : null;

    let EnhancedPostEdit = null;
    if (this.state.editPost) {
      EnhancedPostEdit = withModal(this.props.post)(handlePostForm);
    }
    let EnhancedCommentEdit = null;
    if (this.state.editComment) {
      EnhancedCommentEdit = withModal(this.state.commentSelected)(
        handleCommentForm
      );
    }
    let EnhancedCommentAdd = null;
    if (this.state.addComment) {
      EnhancedCommentAdd = withModal({parentId: this.props.post.id})(
        handleCommentForm
      );
    }


    return (
      <div>
        <Post
          {...this.props.post}
          handleLike={(id, vote) => this.handlePostLike(id, vote)}
          handleDelete={() => this.handlePostDelete(this.props.post.id)}
          handleEdit={this.handlePostEdit}
          handleAddCommentClick={this.handleAddCommentClick}
        />


        {this.props.post.commentCount > 0 ? (
          <EnhancedComments
            handleLike={this.handleCommentLike}
            handleDelete={(id,parentId) => this.handleCommentDelete(id,parentId)}
            handleEdit={(id) => this.handleCommentEdit(id)}
          />
        ) : null}
        {this.state.editPost && (
          <EnhancedPostEdit
            handleBackDropClick={() => this.handleBackDropClick('post')}
          />
        )}
        {this.state.editComment && (
          <EnhancedCommentEdit
            handleBackDropClick={() => this.handleBackDropClick('comment')}
          />
        )}
        {this.state.addComment && (
          <EnhancedCommentAdd
            handleBackDropClick={() => this.handleBackDropClick('commentToAdd')}
          />
        )}
        </div>
    );
  }
}

export default withRouter(HandlePost);
