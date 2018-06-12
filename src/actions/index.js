export const CREATE_SEARCH = 'CREATE_SEARCH';
export const createSearch = (search) => dispatch => {
    fetch('http://localhost:8080/search', {
        body: JSON.stringify(search),
        method: 'POST',
        headers: { 'content-type': 'application/json' }
    })
        .then(res => {
            if (!res.created) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(search => {
            dispatch(createSearchSuccess(search));
        }).catch(err => {
            dispatch(createSearchError(err));
        });
};

export const CREATE_SEARCH_SUCCESS = 'CREATE_SEARCH_SUCCESS';
export const createSearchSuccess = (search) => ({
    type: CREATE_SEARCH_SUCCESS,
    search
})

export const CREATE_SEARCH_ERROR = 'CREATE_SEARCH_ERROR';
export const createSearchError = (error) => ({
    type: CREATE_SEARCH_ERROR,
    error
})