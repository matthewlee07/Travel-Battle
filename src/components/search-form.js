import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createSearch } from '../actions';
export class SearchForm extends React.Component {


    onSubmit(values) {
        console.log(values);
        this.props.dispatch(createSearch(values));
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <h2>Search Form</h2>
                <Field name="legs" placeholder='One-Way' id="legs" type="text" component="input" /> <br />
                <Field name="passengers" placeholder='# Passengers' id="passenger" type="text" component="input" /><br />
                <Field name="from" placeholder='From?' id="from" type="text" component="input" /><br />
                <Field name="to" placeholder='To?' id="to" type="text" component="input" /><br />
                <Field name="date" placeholder='Date?' id="date" type="text" component="input" /><br />
                <Field name="flexible" placeholder='Flexible?' id="flexible" type="text" component="input" /><br />
                <Field name="class" placeholder='Class?' id="class" type="text" component="input" /><br />
                <button type="submit">Submit</button>
            </form >
        )
    }
}

const mapStateToProps = state => ({});
const connectedForm = connect(mapStateToProps)(SearchForm);
export default reduxForm({ form: 'search' })(connectedForm);