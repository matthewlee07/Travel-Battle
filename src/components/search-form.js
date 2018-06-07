import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class SearchForm extends React.Component {
    state = {
        legs: '',
        passengers: '',
        from: '',
        to: '',
        date: '',
        flexible: '',
        class: ''
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit(values) {
        console.log(values);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <h2>Search Form</h2>
                <Field name="legs" id="legs" type="text" component="input" placeholder='One-Way'/> <br />
                <input name="passengers" placeholder='# Passengers' value={this.state.passengers} onChange={e => this.setState({ passengers: e.target.value })} /><br />
                <input name="from" placeholder='From?' value={this.state.from} onChange={e => this.setState({ from: e.target.value })} /><br />
                <input name="to" placeholder='To?' value={this.state.to} onChange={e => this.setState({ to: e.target.value })} /><br />
                <input name="date" placeholder='Date?' value={this.state.date} onChange={e => this.setState({ date: e.target.value })} /><br />
                <input name="flexible" placeholder='Flexible?' value={this.state.flexible} onChange={e => this.setState({ flexible: e.target.value })} /><br />
                <input name="class" placeholder='Class?' value={this.state.class} onChange={e => this.setState({ class: e.target.value })} /><br />
                <br />
                <button type="submit">Submit</button>
            </form >
        )
    }
}

export default reduxForm({ form: 'search' })(SearchForm);