import { NavigationContainer } from '@react-navigation/native';
import { createClient, Provider } from "urql"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from './screens/Todo';
import WelcomeScreen from './screens/Welcome'

const Stack = createNativeStackNavigator()

export default function App() {

  const client = createClient({
    url: 'http://localhost:4000/graphql'
  })


  return (
    <Provider value={client}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
            name="Welcome"
            component={WelcomeScreen}/>
          <Stack.Screen
            name="Todo"
            component={TodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


