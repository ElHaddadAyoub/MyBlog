import React from 'react'
import { View, Text, Button } from 'react-native'

import { auth } from '../firebase';


const SignOut = ({navigation}) => {

  const logoutMethod = () => {
    auth.signOut()
    .then(() =>  {
     navigation.replace("Login")
     })
  
  }

  return (
    <View>
      <Button title="logout" onPress={logoutMethod}></Button>
    </View>
  )
}

// const SignOut = ({navigator}) => (
//   auth.signOut()
// //     .then(() =>  {
// //      navigation.replace("Login")
// //      })
// )

export default SignOut
