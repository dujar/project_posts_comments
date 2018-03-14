import React from 'react';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom';
import posts from './components/posts';
import withPosts from './HoCs/withPosts';
import withPost from './HoCs/withPost';
import withCategory from './HoCs/withCategory';
import HandlePost from './containers/handlePost';
import styled from 'styled-components';
import AddFormIcon from 'react-icons/lib/md/add-circle-outline';
import HandlePostForm from './containers/handlePostForm';
import HomeIcon from 'react-icons/lib/fa/home';

const Body = styled.div`
  min-height: 600px;
`;
class Routing extends React.Component {
  state = {
    filter: 'timestamp'
  };

  handleFilter = filter => {
    this.setState({
      filter: filter
    });
  };
  render() {
    return (
      <Body>
        <NavLink to="/newpost">
          <AddFormIcon />Addpost
        </NavLink>
        <NavLink to="/">
          <HomeIcon /> Home
        </NavLink>
        {/* {this.props.location.pathname === '/' && ( */}
          <div>
            <button onClick={() => this.handleFilter('title')}>
              filter by title
            </button>
            <button onClick={() => this.handleFilter('category')}>
              filter by category
            </button>
          </div>
        {/* )} */}

        <Switch>
          <Route path="/newpost" exact component={HandlePostForm} />
          <Route
            path="/"
            exact
            render={() => {
              const EnhancedPosts = withPosts({filter: this.state.filter})(posts);
              return <EnhancedPosts />;
            }}
          />

          <Route
            path="/:category/:post_id"
            exact
            render={({ match }) => {
              const categoryId = match.params.category;
              const postId = match.params.post_id;
              console.log('/:category/:post_id', postId);
              const EnhancedPost = withPost(categoryId, postId)(HandlePost);
              return <EnhancedPost />;
            }}
          />

          <Route
            path="/:category"
            exact
            render={({ match }) => {
              const categoryName = match.params.category;
              const EnhancedCategory = withCategory(categoryName)(posts);
              return <EnhancedCategory />;
            }}
          />

          <Route
            path="*"
            render={() => {
              return (
                <div>
                  I wish I could help you body, but really, what is the point of
                  looking around different links in this website? Anyways enjoy
                  the rest of your day. 404: page not found
                </div>
              );
            }}
          />
        </Switch>
      </Body>
    );
  }
}

export default Routing;
