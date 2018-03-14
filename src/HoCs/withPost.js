import React from 'react';
import { connect } from 'react-redux';
import { getPostAsync } from '../actions/posts';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const withPost = (postId) => Component => {
  class EnhancedComponent extends React.Component {
    componentWillMount() {
      console.log("props[withPost]",postId)
      this.props.getPost(postId);
    }

    render() {
      return this.props.post? (
        <Main>
          <Component {...this.props} />
        </Main>
      ) : null;
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getPost: (id) => dispatch(getPostAsync(id))
    };
  };
  const mapStateToProps = state => {
    return {
      post: state.posts.post
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent);
};

export default withPost;
