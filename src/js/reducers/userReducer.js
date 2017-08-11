const userReducer = (state = {
    name: "Manoj",
    age: 22
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                name: state.username,
                age: state.age,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                name: state.username,
                age: state.age,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;
