import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const AnlyticTemplate = ({item}) => {
  return (
    <View style={{}} style={styles.paysTitle}>
          <Ionicons name="analytics-outline" size={32} style={{color:'#B91646'}} />
          <View>
            <Text style={styles.title1}>{item.country_name}</Text>
            <Text style={styles.title2}> {item.cases} Cases</Text>
          </View>
    </View>
  )
}

export default AnlyticTemplate

const styles = StyleSheet.create({
  paysTitle:{
    flexDirection:'row',
    backgroundColor:'#DFD8CA',
    padding:30,
    marginTop:10,
    borderRadius:10,
    fontFamily:'RobotoBold'
    
  },
  title1:{
    fontSize:24,
    fontWeight:'bold',
    color:'#000000'
  },
  title2:{
    fontSize:12,
    fontWeight:'bold',
    color:'#000000'
  }
})
