import React from 'react';
import { connect } from 'react-redux';

export function LiveBoard(props) {
    const arr = props.searches.map((search, idx) => {
        return (
            <div>
                <p>Legs: {search.legs}</p>
                <p>Passengers: {search.passengers}</p>
                <p>From: {search.from}</p>
                <p>To: {search.to}</p>
                <p>Date: {search.date}</p>
                <p>Flexible: {search.flexible}</p>
                <p>Class: {search.class}</p>
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