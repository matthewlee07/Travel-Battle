import React from 'react';
import SearchForm from './search-form';
import { connect } from 'react-redux';
export function LiveBoard(props) {
    return (
        <div>
            <h2>Live Board</h2>
            <p>{props.searches.length}</p>

        </div>

    )
}

const mapStateToProps = state => ({ searches: state.flights.searches });
export default connect(mapStateToProps)(LiveBoard);