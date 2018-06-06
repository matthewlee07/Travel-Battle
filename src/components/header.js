import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="container">
            <span id="logo">Travel Battle Logo</span>
            <span className="right">
                <Link to="/about">About</Link>
                <Link to="/account">My Account</Link>
            </span>

        </header>
    )
}