const initialState = {
    age:21
};

const reducer = (state = initialState, action) => {

    //create a coupy of state using spred operator
    const newState = {...state};

    if(action.type === 'AGE_UP'){
        newState.age++;
    }
    if(action.type === 'AGE_DOWN'){
        newState.age--;
    }

    return newState;

};

export default reducer;