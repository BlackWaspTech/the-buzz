import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  user: store.user
});

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let userLoggedIn;
    if (this.props.user.isLoggedIn === false) {
      // If use is not logged in show Login / Sign up
      userLoggedIn = (
        <div className="nav--right login-sign-up">
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
        </div>
      );
    }

    return (
      <header className="nav-container">
        <div className="nav--left">Name</div>
        <Link className="nav--logo" to="/">
          The Buzz
        </Link>
        <Link to="/profile">Profile</Link>
        {userLoggedIn}
      </header>
    );
  }
}

export default connect(mapStateToProps)(Header);
