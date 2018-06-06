import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import SearchForm from './components/search-form';
import LiveBoard from './components/live-board';
import Statistics from './components/statistics';
import TopBoard from './components/top-board';
import BattleForm from './components/battle-form';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Route path="/" component={Main} exact/>
          <Route path="/battle" component={BattleForm} />
        </div>
      </Router>
    );
  }
}

export default App;
