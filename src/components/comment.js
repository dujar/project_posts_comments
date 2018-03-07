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
  margin: 20 25 24 23;
  height: 200px;
  justify-content: center;
  align-items: center;
`
const comment = props => {

  if(props.body){
  return (
    <Main>
      <CRUDbuttons/>
      <Div> {props.body} </Div>
      <Div> {props.author} </Div>
      <Div> {props.timestamp} </Div>
      <Div> {props.voteScore} </Div>

    </Main>
  )
  } else {
    return <ReactLoading type={'bubbles'} color={'blue'} height='100' width='275' />
  }

}

export default withRouter(comment)