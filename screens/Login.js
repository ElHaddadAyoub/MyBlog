import React , {useState , useEffect} from 'react'
import { StyleSheet,View, Text, KeyboardAvoidingViewBase, Button } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase';

const Login = ({navigation}) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  useEffect(() => {
    const unsibscribe = auth.onAuthStateChanged(user =>  {
      if(user) {
        navigation.navigate("TabNavigation")
      }
      
    })
    return unsibscribe;
  }, [])
  const registerButton = () => {
    auth
      .createUserWithEmailAndPassword(email , password)
      .then(userCredentials => {
        const user = userCredentials.user;
        // console.log(user.email);
      })
      .catch(error => alert(error.message))    
  }


  const loginButton = () => {
    auth.signInWithEmailAndPassword(email , password)
    .then(userCredentials => {
      const user = userCredentials.user;
      // navigation.navigate('Home') and we relpalce it by the functino in side useEffect 
      console.log('logged in '+user.email);
    })
    .catch(error => alert(error.message))    
  }


  return (
    // <KeyboardAvoidingViewBase style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.titre}>Login</Text>
        <View style={styles.TextInputContainer}>
          <TextInput 
          value={email}
          placeholder="your email"
          onChangeText={text => setemail(text)}
          style={styles.TextInput}
          />

          <TextInput 
          value={password}
          placeholder="your password"
          onChangeText={text => setpassword(text)}
          style={styles.TextInput}
          secureTextEntry
          />

          
        </View>
        <View style={styles.btnContainer}> 
            <Button title="login" onPress={loginButton}  color='#6E3CBC'></Button>
        </View>
        <View style={styles.btnContainer}> 
            <Button title="register" onPress={registerButton} color='#6E3CBC'></Button>
        </View>
      </View>
    // {/* </KeyboardAvoidingViewBase> */}
  )
}
export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre:{
    fontSize:44,
    marginBottom:30,
    fontWeight:'bold',
    color:'#6E3CBC'
  },
  TextInputContainer:{
      width:'80%'
  },
  TextInput:{
    backgroundColor:'#F0F0F0',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5
  },
  btnContainer:{
      width:'60%',
      marginTop:10,
     
  }

});