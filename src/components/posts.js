import React from 'react';
import Post from './post';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const posts = ({ posts }) => {
  if (posts) {
    return (
      <Main>
        {posts.map(post => (
          !post.deleted? ( <Post {...post} key={post.id} />) : null
        )
      )}
      </Main>
    );
  } else {
    return (
      <div>
        Unfortunately page not found!
      </div>
    );
  }
};

export default posts;

