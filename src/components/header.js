import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <header className="container">
            <span id="logo">Travel Battle Logo</span>
            <span className="right">
                <a href="#about">About</a>
                <a href="#account">My Account</a>
            </span>

        </header>
    )
}