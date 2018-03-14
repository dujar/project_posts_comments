import React from 'react';
import { connect } from 'react-redux';
import { getCategoryPostsAsync } from '../actions/categories';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const withCategory = (categoryName) => Component => {
  class EnhancedComponent extends React.Component {
    componentWillMount() {
      this.props.getCategoryPosts(categoryName);
    }
    render() {
      return (
        <Main>
          <Component {...this.props} />;
        </Main>
      )

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

export default withCategory;
