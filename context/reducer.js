const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return {
                ...state,
                loading: false,
                token: action.token,
                user: action.id
            }
        case 'REGISTER':
            return {
                ...state,
                loading: false,
                token: action.token,
                user: action.id
            }
        case 'LOGOUT':
            return {
                ...state,
                loading: false,
                token: null,
                user: null
            }
        default: 
            return state
    }
}


export default reducer