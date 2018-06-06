import React, { Component } from 'react';
import './main.css';

import SearchForm from './search-form';
import LiveBoard from './live-board';
import Statistics from './statistics';
import TopBoard from './top-board';


class Main extends Component {
    render() {
        return (
            <div className="main">
                <SearchForm />
                <LiveBoard />
                <Statistics />
                <TopBoard />
            </div>
        );
    }
}

export default Main;