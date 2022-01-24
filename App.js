import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from './context/auth';
import { Router } from './Router';

export default function App() {
  

  return (
      <AuthProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </AuthProvider>
  )
}


