import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import { reducer as formReducer } from 'redux-form';

export default createStore(
    combineReducers({
        form: formReducer,
        flights: reducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
