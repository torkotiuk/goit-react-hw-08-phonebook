import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Container from './components/share/Container';
import AppBar from './components/AppBar';
import authOps from './redux/auth/auth-operations';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOps.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
