import React ,{useState} from 'react'
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { db } from '../../firebase';

const CreateBlog = ({navigation}) => {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')

  const validForm =()=>{
    
    if(title==='' && description===''){
        console.log('input not filed')
        return false;
    }
    else{
      return true;
    }

  }

   const createNewBlog = () => {
    if(validForm()){
      console.log('created')
      db.collection('blogs').add({
        title , 
        description
      })
      settitle('')
      setdescription('')
      navigation.navigate('Blogs')
    }

  }

  return (
    <View style={styles.formulaire}>
      <Text style={styles.titre}>Create New Blogs</Text>
      <View style={styles.formInput}>
        {/* <Text style={styles.label}>Title</Text> */}
        <TextInput 
        style={styles.input} 
        value={title}
        
        onChangeText={(text)=>settitle(text)}
        placeholder=" type the blog's title"
         />
      
      
        {/* <Text>description</Text> */}
        <TextInput 
        style={styles.inputdes} 
        value={description}
        multiline={true}
        onChangeText={(text)=>setdescription(text)}
        placeholder=" type the blog's description"
         />
      </View>
      <View style={styles.btnForm} >
        <Button onPress={createNewBlog} title="create"></Button>
      </View>
    </View>
  )
}

export default CreateBlog

const styles = StyleSheet.create({
  formulaire:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  titre:{
    fontSize: 22,
    textAlign: 'center',  
    color: 'black',
    fontWeight: '600'
  },
  formInput:{
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5
  },
  input:{
    width: 350,
    height: 40,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 3
  },
  inputdes:{
    textAlignVertical: "top",
    width: 350,
    height: 100,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 3
  },
  btnForm:{
    width: 320,
    height: 80,
    padding: 8,
    margin: 8,
    // borderRadius: 8
  }
})
