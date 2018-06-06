import React from 'react';
import './notflights.css';
import { Link } from 'react-router-dom';

export default function NotFlights(props) {
    return (
        <div>
            <p>Hotels, Cars, Cruises, and Rewards tabs are non funcational as they're outside the scope of this MVP
        </p>
            <Link to="/">Return Home</Link>
        </div>
    );
}