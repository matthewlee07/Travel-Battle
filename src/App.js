import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

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


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: []
    }
  }

  onSubmit = fields => { console.log('App Component: ', fields) };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <Route path="/" exact component={Main} />
          <Route path="/battle" component={BattleForm} />
          <Route path="/notflights" component={NotFlights} />
          <Route path="/about" component={About} />
          <Route path="/account" component={Account} />
        </div>
      </Router>
    );
  }
}
