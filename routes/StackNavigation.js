import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import BlogDetails from '../screens/blog/BlogDetails'
import Login from '../screens/Login';
import TabNavigation from './TabNavigation';
import DeatailAnyltics from '../screens/DeatailAnyltics'

const Stack = createStackNavigator();
const StackNavigation = () => {
  return ( 
   <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="TabNavigation" component={TabNavigation} 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="DeatailAnyltics" component={DeatailAnyltics} 
        options={{
          headerShown:false
        }}
      />
      {/* <Stack.Screen name="BlogDetails" component={BlogDetails}
        options={{
          headerShown:false
        }}
      /> */}

    </Stack.Navigator>
   );
}
 
export default StackNavigation;