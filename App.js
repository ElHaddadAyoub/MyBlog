import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
// import Home from './screens/Home'
import Login from './screens/Login'
import TabNavigation from './routes/TabNavigation';
import StackNavigation from './routes/StackNavigation'
import DrawerNavigation from './routes/DrawerNavigation';


const Stack = createStackNavigator();

export default function App() {

  // AppRegistry.registerComponent('main', () => App);

  const [loaded] = useFonts({
    Roboto: require('./fonts/Roboto-Regular.ttf'),
    RobotoBold :require('./fonts/Roboto-Bold.ttf')
  });
  if (!loaded) { 
    return null;
  }
  return (

    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
