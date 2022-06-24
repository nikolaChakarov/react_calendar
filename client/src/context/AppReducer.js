const AppReducer = (state, action) => {
    switch (action.type) {

        case 'GET_MONTH_EVENTS':
            return {
                ...state,
                events: [...action.payload]
            };

        case 'ADD_EVENT':
            return {
                ...state,
                events: [...action.payload]
            };

        default:
            return state;
    }
};

export default AppReducer;