import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import SignUp from './SignUp';

const mapStateToProps = store => ({
  user: store.user
});

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.user.isLoggedIn ? (
                <Redirect to="/profile" />
              ) : (
                <Login />
              )
            }
          />
          <Route
            exact
            path="/profile"
            render={() =>
              this.props.user.isLoggedIn ? (
                <Profile />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
