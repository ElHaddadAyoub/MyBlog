import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const ModalComp = ({onPressHandlers}) => {

  const {
    // onUpdateBlog,
   //  viewBlog,
    onDeleteBlog,
    onCloseModal
 } = onPressHandlers

  return (
    <View style={styles.container}>
         <View style={styles.modalViewContainer}>
            {/* <TouchableOpacity
               style={styles.touchableBtn}
               onPress={viewBlog}
            >
               <Text style={styles.btnText}>View Details</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
               style={styles.touchableBtn}
               onPress={onDeleteBlog}
            >
               <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
               style={styles.touchableBtn}
               onPress={() => onCloseModal()}
            >
               <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
         </View>
      </View> 
  )
}

export default ModalComp

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 }, 
 touchableBtn: {
    // ...globalStyles.primaryTouchableBtn,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 5
 },
 modalViewContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 500,
    padding: 10,
    width: '85%',
    shadowOffset: {
       width: 10,
       height: 10
    },
    shadowColor: 'black',
    elevation: 10
    
 },
 btnText: {
  // fontFamily: 'Nunito-SemiBold',
  fontSize: 18,
  color: 'black',
  textAlign: 'center'
},
})
