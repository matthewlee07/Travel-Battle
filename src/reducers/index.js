import { CREATE_SEARCH, CREATE_SEARCH_SUCCESS } from '../actions';
// import * as actions from '../actions';

const initialState = {
    searches: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SEARCH_SUCCESS: {
            console.log('CREATE_SEARCH');
            return Object.assign({}, state, {
                searches: [...state.searches, action.search]
            })
        }

        default: return state;
    }
}