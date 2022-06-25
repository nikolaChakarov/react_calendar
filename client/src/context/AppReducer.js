const AppReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };

        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };

        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };

        case 'GET_MONTH_EVENTS':
            return {
                ...state,
                events: [...action.payload],
                isLoading: false,
                error: null
            };

        case 'ADD_EVENT':
            return {
                ...state,
                events: [...action.payload],
                isLoading: false,
                error: null
            };

        case 'IS_LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            };

        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
};

export default AppReducer;