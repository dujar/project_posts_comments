import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import CRUDbuttons from './CRUDbuttons';
import HandlePostForm from '../containers/handlePostForm';
import AddCommentIcon from 'react-icons/lib/md/add-circle-outline';

const Div = styled.div`
  background-color: blue;
  max-width: 100%;
  min-width: 100%;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px 20px 20px 20px;
  height: 300px;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  min-width: 360px;
  border: 1px solid black;
  border-radius: 5px;
  ${props =>
    props.location !== '/'
      ? null
      : `&:hover {
    background-color: pink;
    cursor: pointer;
  }`};
`;
const Cat = styled(Div)`
  background-color: green;
  &:hover {
    background-color: orange;
    cursor: pointer;
  }
`;
const post = props => {
  if (props.title) {
    return (
      <Main
        onClick={() =>
          props.history.location.pathname !== `/posts/${props.id}`
            ? props.history.push(`/posts/${props.id}`)
            : null
        }
        location={props.location.pathname}
      >
        {props.location.pathname !== '/' && (
          <CRUDbuttons
            handleLike={vote => props.handleLike(props.id, vote)}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        )}
        <Div> title: {props.title} </Div>
        <Div> body: {props.body} </Div>
        <Div> author: {props.author} </Div>
        <Cat
          onClick={e => {
            e.stopPropagation();
            props.history.push(`/categories/${props.category}`);
          }}
        >
          {' '}
          category: {props.category}{' '}
        </Cat>
        <Div> date: {props.timestamp} </Div>
        <Div> vote Score:{props.voteScore} </Div>
        <Div> comments: {props.commentCount} </Div>
        {props.location.pathname !== '/' && (
          <button onClick={props.handleAddCommentClick}>
            <AddCommentIcon />Add Comment
          </button>
        )}
      </Main>
    );
  } else {
    return (
      <div>
        Oopss, it seems that the page does not exist! Probably deleted or god
        knows what!
      </div>
    );
  }
};

export default withRouter(post);
