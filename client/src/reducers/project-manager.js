const initialState = {
    project:[{}]
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_PROJECT_MANAGER_SUCCESS':{
            return Object.assign({}, state, {
                project: action.data.project
            });
        }
        case 'FETCH_PROJECT_MANAGER_ERROR':
            return Object.assign({}, state, {
                error: action.error
            });
        
        default:
            return state
    }

}
