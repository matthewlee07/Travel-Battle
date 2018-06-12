import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search-form';

export function LiveBoard(props) {
    const arr = props.searches.map((search, idx) => {
        return (
            <div>
                <p>{search.legs}</p>
                <p>{search.passengers}</p>
            </div>
        )
    });
    return (
        <div>
            <h2>Live Board</h2>
            <p>{props.searches.length}</p>
            <p>{arr}</p>
        </div>

    )
}

const mapStateToProps = state => ({
    searches: state.flights.searches
});

export default connect(mapStateToProps)(LiveBoard);