import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default function NavBar(props) {
    return (
        <Grid className="container">
            <Link to="/">Flights</Link>
            <Link to="/notflights">Hotles</Link>
            <Link to="/notflights">Cars</Link>
            <Link to="/notflights">Cruises</Link>
            <Link to="/notflights">Rewards</Link>
        </Grid>
    )
}