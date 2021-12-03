import * as React from 'react';
import { Button ,View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import About from '../screens/About';
import Blogs from '../screens/blog/Blogs'
import CreateBlog from '../screens/blog/CreateBlog'
// import DrawerNavigation from '../routes/DrawerNavigation'
import AnlyticsCovid from '../screens/AnlyticsCovid';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabNavigation = ({navigation}) => {
  return ( 
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{ 
        headerShown: false ,
        // tabBarIcon:()=>{<Entypo name="home" size={24} color="black" />},
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),

        }}
      />
     <Tab.Screen name="Blogs" component={Blogs} 
      options={{ 
        headerShown: false ,
        headerRight: () => (
          <Button
            // onPress={() => navigation.navigate('CreateBlog')}
            title="+"
            color="#333"
            style={{color:'#333'}}
          />
        ),
        
        // tabBarIcon:()=>{<Entypo name="home" size={24} color="black" />},
        tabBarIcon: ({ color, size }) => (
          
          <Ionicons name="book-outline" color={color} size={size} />
        ),

        }}
      />
      <Tab.Screen
    name="Add" component={CreateBlog}
    options={{
      headerShown: false ,
        tabBarLabel: '',
        tabBarIcon: ({ color ,size }) => (
            <View
            style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
            <Ionicons name="add-circle-outline" color={color} size={70} />
            </View>
        )
    }}
    />


      <Tab.Screen name="About" component={About} 
      options={{ 
        headerShown: false ,
        // tabBarIcon:()=>{<Entypo name="home" size={24} color="black" />},
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="apps" color={color} size={size} />
        ),

        }}
      />
        <Tab.Screen name="AnlyticsCovid" component={AnlyticsCovid} 
      options={{ 
        headerShown: false ,
        // tabBarIcon:()=>{<Entypo name="home" size={24} color="black" />},
        tabBarIcon: ({ color, size }) => (
          
          <Ionicons name="bar-chart-outline" color={color} size={size} />
        ),
    
        }}
      />
        {/* <Tab.Screen name="DrawerNavigation" component={DrawerNavigation} 
      options={{ 
        headerShown: false ,
        // tabBarIcon:()=>{<Entypo name="home" size={24} color="black" />},
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="medkit" color={color} size={size} />
        ),
    
        }}
      /> */}
  </Tab.Navigator>
   );
}
 
export default TabNavigation;