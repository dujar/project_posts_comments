import React from 'react';
import PostForm from '../components/postForm';
import axiosInstance from '../axiosInstance'
import uuid from 'uuid/v4'
import {withRouter} from 'react-router-dom'

class HandlePostForm extends React.Component {

  handleSubmit =(post) => {
    axiosInstance.post("/posts", {
      ...post,
      id: uuid(),
      timestamp: new Date().valueOf()
    }
    )
    this.props.history.push("/")
  }

  handleChange = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <PostForm onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default withRouter(HandlePostForm)