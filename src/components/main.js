import React, { Component } from 'react';

import SearchForm from './search-form';
import LiveBoard from './live-board';
import Statistics from './statistics';
import TopBoard from './top-board';


class Main extends Component {
    render() {
        return (
            <div className="App">
                <SearchForm />
                <LiveBoard />
                <Statistics />
                <TopBoard />
            </div>
        );
    }
}

export default Main;