import React from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import posts from './components/posts'
import withPosts from './HoCs/withPosts'
import withPost from './HoCs/withPost'
import withCategory from './HoCs/withCategory'
import HandlePost from './containers/handlePost'



class Routing extends React.Component {

  render() {

    return(
      <Switch>
        <Route path="/" exact render={() => {
          const EnhancedPosts = withPosts(posts)
          return(
            <EnhancedPosts/>
          )
        }}
        />
        <Route path="/categories/:category" exact render={({match}) => {
          const categoryName = match.params.category
          const EnhancedCategory = withCategory(categoryName)(posts)
          return <EnhancedCategory/>
        }} />
        <Route path="/posts/:id" exact render={({match}) => {
          const postId = match.params.id
          console.log("/posts/:d",postId)
          const EnhancedPost = withPost(postId)(HandlePost)
          return <EnhancedPost />
        }}
        />
      </Switch>
    )
  }
}

export default (Routing)