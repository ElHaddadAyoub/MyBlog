import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native'
import Home from '../screens/Home'
import About from '../screens/About';
import SignOut from '../screens/SignOut';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return ( 
      <Drawer.Navigator >
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="About" component={About} />
        {/* <TouchableOpacity onPress={console.log('test sign out')}> */}
              <Drawer.Screen name="Logout" component={SignOut} />
        {/* </TouchableOpacity> */}
      </Drawer.Navigator>
   );
}
 
export default DrawerNavigation;