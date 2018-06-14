import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import About from './components/about';
import Account from './components/account';
import BattleForm from './components/battle-form';
import Header from './components/header';
import LiveBoard from './components/live-board';
import Main from './components/main';
import NavBar from './components/nav-bar';
import Navigation from './components/navigation';
import NotFlights from './components/notflights';
import SearchForm from './components/search-form';
import Statistics from './components/statistics';
import TopBoard from './components/top-board';

import RegistrationPage from './components/registration-page';
import { refreshAuthToken } from './actions/auth';


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
