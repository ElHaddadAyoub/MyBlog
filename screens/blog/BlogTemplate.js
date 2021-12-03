import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Modal, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const BlogTemplate = ({navigation,item,index,onModalOpen}) => {
  
  const {title , description } = item


  // console.log(item)//will provide data comes in each array object
 return(
   <TouchableOpacity
      
   >
   <TouchableWithoutFeedback >
            <Ionicons 
               name='ios-ellipsis-vertical-circle'
               size={33}
               color='white'
               style={{ 
                  position: 'absolute',
                  top: 15,
                  right: 30,
                  zIndex: 1,
                  // color:'#D5D5D5'
                }}
               onPress={() => onModalOpen(item.id)}
            />
         </TouchableWithoutFeedback>
         
          <View style={styles.Container}>
            <View
                style={styles.blogRect}>  
                <Text style={styles.Title}>{title}</Text>
                <Text style={styles.Desc}>{description}</Text>
              </View>
          </View>
</TouchableOpacity>
        
    )
}

export default BlogTemplate;

const styles = StyleSheet.create({
  Container:{
    alignItems:'center',
  },
  blogRect :{
    width:'88%',
    height:200,
    backgroundColor:'#D5D5D5',
    
    
    marginTop:10,
    padding:20,
    borderRadius:24,
  },

  Title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#6E3CBC'
  },
  Desc:{
    fontSize:16,
    textAlign: 'justify',

  }
})
