const initialState = {
    subscription: 0,
    category: null,   
}


const filters = (state = initialState, action) => {
    if(action.type === 'SET_SUBSCRIPTION')
    {
        return {
            ...state,
            subscription: action.payload
        };
    }
    if(action.type === 'SET_CATEGORY')
    {
        return {
            ...state,
            category: action.payload
        };
    }
    return state;
};

export default filters;