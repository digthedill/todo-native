import { createContext, useReducer, useMemo } from "react";
import { createClient, Provider as GraphqlProvider } from "urql"
import initState from "./initState";
import reducer from "./reducer";

const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(reducer, initState)

    const client = createClient({
        url: 'http://localhost:4000/graphql',
        fetchOptions: () => {
            const token = authState?.token
            return token ? {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            } : {}
        }
    })

    console.log(client)
    
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

    return (
    <AuthContext.Provider value={{ authContext, authState }}>
        <GraphqlProvider value={client}>
            {children}
        </GraphqlProvider>
    </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext}
