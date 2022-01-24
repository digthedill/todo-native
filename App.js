import { NavigationContainer } from '@react-navigation/native';
import { createClient, Provider } from "urql"
import {AuthProvider} from './context/auth';
import { Router } from './Router';

export default function App() {
  
  const client = createClient({
    url: 'http://localhost:4000/graphql'
  })

  return (
    <Provider value={client}>
      <AuthProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  )
}


