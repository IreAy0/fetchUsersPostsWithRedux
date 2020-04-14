/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class userHeader extends PureComponent {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="header">
        By:
        {user.name}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.userId),
});
export default connect(mapStateToProps, { fetchUser })(userHeader);
