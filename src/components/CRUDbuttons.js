import React from 'react';
import styled from 'styled-components';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';
import MdDelete from 'react-icons/lib/md/delete';
import TiEdit from 'react-icons/lib/ti/edit';

const CRUDbuttons = props => {
  const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: flex-end;
    max-width: 100%;
    min-width: 100%;
  `;
  return (
    <Main>
      <FaThumbsDown onClick={() => props.handleLike("downVote")}/>
      <FaThumbsUp onClick={() => props.handleLike("upVote")}/>
      <MdDelete onClick={props.handleDelete}/>
      <TiEdit onClick={props.handleEdit}/>
    </Main>
  );
};

export default CRUDbuttons;
