import React from 'react'
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'
import CRUDbuttons from './CRUDbuttons'

const Div = styled.div`
  background-color: blue;
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
const Cat = styled(Div)`
  background-color: green;
`
const post = props => {

  if(props.title){
  return (
    <Main onClick={() => props.history.location.pathname !== `/posts/${props.id}`? props.history.push(`/posts/${props.id}`) : null}>
      <CRUDbuttons/>
      <Div> {props.title} </Div>
      <Div> {props.body} </Div>
      <Div> {props.author} </Div>
      <Cat onClick={(e) => {
        e.stopPropagation()
        props.history.push(`/categories/${props.category}`)
        }
      }> {props.category} </Cat>
      <Div> {props.timestamp} </Div>
      <Div> {props.voteScore} </Div>
      <Div> {props.commentCount} </Div>
    </Main>
  )
  } else {
    return <ReactLoading type={'bubbles'} color={'blue'} height='100' width='275' />
  }

}

export default withRouter(post)