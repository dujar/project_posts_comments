import React from 'react';
import { connect } from 'react-redux';
import { getPostsAsync } from '../actions/posts';

const withPosts  = props => Component => {
  class EnhancedComponent extends React.Component {
    componentWillMount() {
      this.props.getPosts();
    }
    render() {
      return <Component {...this.props} {...props}/>;
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getPosts: () => dispatch(getPostsAsync())
    };
  };
  const mapStateToProps = state => {
    return {
      posts: state.posts.posts
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent);
};

export default withPosts;
