import Login from './Screens/Login'
import Register from './Screens/Register'
import Settings from './Screens/Settings'
import Teams from './Screens/Teams';
import themeContext from './themeContext';
import theme from './theme'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import React, {useState, useEffect} from "react";
import EventEmitter from "react-native-eventemitter";
import Home from './Screens/Home';

global.baseurl = "baseUrl";

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventEmitter.addListener("changeTheme", (data) =>{
      setMode(data);
    });
    return () => {
      EventEmitter.removeAllListeners;
    }
  })

  return (
  <themeContext.Provider value = {mode === true ? theme.dark : theme.light }>
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Teams" component={Teams} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
</NavigationContainer>
</themeContext.Provider>
  );
}


