import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';

const reducers = combineReducers({
    form: formReducer,
    flights: reducer,
    auth: authReducer,
});

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;