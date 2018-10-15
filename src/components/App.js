import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import SignUp from './SignUp';
import { withCookies } from 'react-cookie';

const mapStateToProps = store => ({
  user: store.user
});

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home cookies={this.props.cookies} />}
          />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.user.isLoggedIn ? (
                <Redirect to="/profile" />
              ) : (
                <Login cookies={this.props.cookies} />
              )
            }
          />
          <Route
            exact
            path="/profile"
            render={() =>
              this.props.user.isLoggedIn ? (
                <Profile cookies={this.props.cookies} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.user.isLoggedIn ? (
                <Redirect to="/profile" />
              ) : (
                <SignUp cookies={this.props.cookies} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default withCookies(withRouter(connect(mapStateToProps)(App)));
