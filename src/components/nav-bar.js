import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div className="container">
            <Link to="/">Flights</Link>
            <Link to="/notflights">Hotles</Link>
            <Link to="/notflights">Cars</Link>
            <Link to="/notflights">Cruises</Link>
            <Link to="/notflights">Rewards</Link>
        </div>
    )
}