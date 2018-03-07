import React from 'react';
import { connect } from 'react-redux';
import { getCategoryPostsAsync } from '../actions/categories';

const withPost = (categoryName) => Component => {
  class EnhancedComponent extends React.Component {
    componentWillMount() {
      this.props.getCategoryPosts(categoryName);
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getCategoryPosts: (categoryName) => dispatch(getCategoryPostsAsync(categoryName))
    };
  };
  const mapStateToProps = state => {
    return {
      posts: state.categories.categoryPosts
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent);
};

export default withPost;
