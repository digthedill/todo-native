import { createContext, useReducer, useMemo } from "react";
import initState from "./initState";
import reducer from "./reducer";

const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(reducer, initState)
    
    const authContext = useMemo(() => ({
        signIn: async(foundUser) => {
            let token = foundUser.token
            let user = foundUser.user.username
            dispatch({ type: 'LOGIN', id: user, token: token });
        },
        signOut: async() => {
            dispatch({ type: 'LOGOUT' });
        },
        signUp: async (newUser) => {
            let token = foundUser.token
            let user = foundUser.user.username       
            dispatch({ type: 'REGISTER', id: user, token: token });     
        },
        
    }), []);

    return <AuthContext.Provider value={{ authContext, authState }}>
        {children}
    </AuthContext.Provider>

}

export { AuthProvider, AuthContext}
