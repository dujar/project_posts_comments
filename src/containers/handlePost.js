import React from 'react';
import Post from '../components/post';
import { withRouter } from 'react-router-dom';
import comments from '../components/comments'
import withComments from '../HoCs/withComments'

class HandlePost extends React.Component {

  render() {
  console.log("id post [HANDLEPOST]", this.props.post)
   const EnhancedComments = this.props.post && this.props.post.commentCount > 0
                           ? withComments(this.props.post.id)(comments)
                           : null

    return (
      <div>
        <Post {...this.props.post}/>
        { this.props.post.commentCount > 0 ? <EnhancedComments /> : null}
      </div>
    );
  }
}

export default withRouter(HandlePost);
