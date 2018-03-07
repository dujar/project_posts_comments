import React from 'react';
import { connect } from 'react-redux';
import { getCommentsAsync } from '../actions/comments';

const withComments = (postId) => Component => {
  class EnhancedComponent extends React.Component {
    componentWillMount() {
      console.log("postId", postId)
      if(postId){
      this.props.getComments(postId);
      }
    }
    render() {
      return <Component {...this.props} postId={postId}/>;
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getComments: (id) => dispatch(getCommentsAsync(id))
    };
  };
  const mapStateToProps = state => {
    return {
      comments: state.comments.comments
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent);
};

export default withComments;
