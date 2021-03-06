import TodoScreen from './screens/Todo';
import WelcomeScreen from './screens/Welcome'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { useContext } from "react"
import { AuthContext } from "./context/auth"
const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen 
            name="Welcome"
            component={WelcomeScreen}/>
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Todo"
            component={TodoScreen} />
    </Stack.Navigator>
  );
};

export const Router = () =>{
    
    const ctx = useContext(AuthContext)
    let auth = !!ctx.authState?.token
    return auth ? <AuthStack /> : <AppStack />

}

