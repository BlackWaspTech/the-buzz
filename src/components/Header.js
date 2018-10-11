import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav-container">
        <div className="nav--left">Name</div>
        <Link className="nav--logo" to="/">
          The Buzz
        </Link>
        <div className="nav--right login-sign-up">
          <Link className="color--red" to="/login">
            Login
          </Link>
          <div>&nbsp;/&nbsp;</div>
          <Link className="color--red" to="signup">
            Sign up
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
