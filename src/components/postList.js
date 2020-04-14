/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import UserHeader from './userHeader';

class postList extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>

      </div>
    ));
  }

  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed list divided">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => ({ posts: state.posts });
export default connect(mapStateToProps, { fetchPosts })(postList);
