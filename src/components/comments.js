import React from 'react';
import withComments from '../HoCs/withComments';
import Comment from './comment';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const comments = props => {
  if (props.comments) {
    return props.comments.map(comment => {

      if(!comment.deleted && !comment.parentDeleted && props.postId === comment.parentId){
      return (
        <Main>
          <Comment {...comment} key={comment.id}/>
        </Main>
      );
    }
    });
  } else {
    return (
      <ReactLoading type={'bubbles'} color={'blue'} height="100" width="100" />
    );
  }
};
export default comments;
