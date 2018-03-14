import React from 'react'
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'
import CRUDbuttons from './CRUDbuttons'

const Div = styled.div`
  background-color: pink;
  max-width: 500px;
  min-width:360px;
`
const Main = styled.div`

  display: flex;
  flex:1;
  flex-direction: column;
  margin: 20px 20px 20px 20px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
`
const comment = props => {

  if(props.body){
  return (
    <Main>
      <CRUDbuttons
      handleLike={(vote) => props.handleLike(props.id,vote,props.parentId)}
      handleDelete={() => props.handleDelete(props.id,props.parentId)}
      handleEdit={props.handleEdit}
      />
      <Div> body: {props.body} </Div>
      <Div> author: {props.author} </Div>
      <Div> date: {props.timestamp} </Div>
      <Div> vote Score: {props.voteScore} </Div>

    </Main>
  )
  } else {
    return <ReactLoading type={'bubbles'} color={'blue'} height='100' width='275' />
  }

}

export default withRouter(comment)