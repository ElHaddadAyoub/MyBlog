import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

const BlogDetails=({navigation}) => {

  // console.log(item)//will provide data comes in each array object
 return(
   
<View style={styles.Container}>
   <View
       style={styles.blogRect}>
        
       <Text style={styles.Title}>lorem</Text>
       <Text>decripn foerjioe regoirehgio iergio lorem</Text>
        {/* <Text>{item.description}</Text>//data inside each array object */}
         
    </View>
</View>

    )
}

export default BlogTemplate;

const styles = StyleSheet.create({
  Container:{
    alignItems:'center',
  },
  blogRect :{
    
    width:'88%',
    backgroundColor:'#333',
    marginTop:10,
    padding:20,
    borderRadius:24,
  },

  Title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#FFF'
  }
})
