import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  user: store.user
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    let userLoggedIn;
    if (this.props.user.isLoggedIn === false) {
      // If use is not logged in show Login / Sign up
      userLoggedIn = (
        <div className="nav--right">
          <Link className="color--red" to="/login">
            Login
          </Link>
          <div>&nbsp;/&nbsp;</div>
          <Link className="color--red" to="signup">
            Sign up
          </Link>
        </div>
      );
    } else {
      // If user is logged in show Profile link
      userLoggedIn = (
        <div className="nav--right">
          <Link to="/profile">Profile</Link>
          <div>&nbsp;/&nbsp;</div>
          <Link to="/logout">Logout</Link>
        </div>
      );
    }

    return (
      <header className="nav-container">
        <div className="nav--left">{this.props.user.userName}</div>
        <Link className="nav--logo" to="/">
          The Buzz
        </Link>
        {userLoggedIn}
      </header>
    );
  }
}

export default connect(mapStateToProps)(Header);
