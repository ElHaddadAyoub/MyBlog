//talk about application and his role 
//scrool vertical for showong blogs and analytics 

import React from 'react';
import {  Button, View,StyleSheet , Text ,Image } from 'react-native';
import { auth } from '../firebase';
import AppIntroSlider from "react-native-app-intro-slider";




const Home = ({navigation}) => {
 

  const logoutMethod = () => {
     auth.signOut()
     .then(() =>  {
      navigation.replace("Login")
      })

  }
  return ( 

    
    <View style={styles.Container}>
      {/* <Drawer2/> */}
      <Text style={styles.Title}>Welcome to our Blog & Analytics Mobile App</Text>
      <Text style={styles.sous_Title}>MyBlog is a mobile application that canprovide for you a lot of things for exemple create new blog , read the others blogs </Text>
      <Image source={require('../images/two.png')}
      style={{
        resizeMode: "cover",
        height: "50%",
        width: "100%",
      }}
      />
      <Button title="log out" onPress={logoutMethod}></Button>
    </View>

 
   );
}
 
export default Home;


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Title:{
    fontSize:35,
    fontFamily:'RobotoBold',
    // fontWeight:'bold',
    textAlign: 'justify',
    color:'#6E3CBC'
  },
  sous_Title:{
    width:'85%',
    fontFamily:'Roboto',
    fontSize:20,
    textAlign: 'justify'

  }
  // TextInputContainer:{
  //     width:'80%'
  // },
  // TextInput:{
  //   backgroundColor:'#F0F0F0',
  //   paddingHorizontal:15,
  //   paddingVertical:10,
  //   borderRadius:10,
  //   marginTop:5
  // },
  // btnContainer:{
  //     width:'60%',
  //     marginTop:10
  // }

});