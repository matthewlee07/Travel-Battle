import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import About from './components/about';
import Account from './components/account';
import BattleForm from './components/battle-form';
import Header from './components/header';
import Main from './components/main';
import NavBar from './components/nav-bar';
import NotFlights from './components/notflights';

import RegistrationPage from './components/registration-page';


class App extends Component {
  onSubmit = fields => { console.log('App Component: ', fields) };

  render() {
    return (

      <div className="App">
        <Header />
        <NavBar />
        <Route path="/" exact component={Main} />
        <Route path="/battle" component={BattleForm} />
        <Route path="/notflights" component={NotFlights} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/registration" component={RegistrationPage}/>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
