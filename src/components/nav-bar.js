import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default function NavBar(props) {
    return (
        <Grid className="app">
            <Link to="/flights" className="broken">Flights</Link>
            <Link to="/hotels" className="broken">Hotles</Link>
            <Link to="/cars" className="broken">Cars</Link>
            <Link to="/cruises" className="broken">Cruises</Link>
            <Link to="/rewards" className="broken">Rewards</Link>
        </Grid>
    )
}