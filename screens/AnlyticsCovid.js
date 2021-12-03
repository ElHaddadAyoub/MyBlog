import React , {useState , useEffect} from 'react'
import { StyleSheet, ActivityIndicator,Text, View ,FlatList } from 'react-native'
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  AnlyticTemplate from './AnlyticTemplate'

const AnalyticsCovid = () => {
  const [analytics, setanalytics] = useState([]);
  const [loading, setloading] = useState(true)
//api from rapid api
var options = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
  headers: {
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
    'x-rapidapi-key': '2e071fd3b1msh99493383b6b4318p130c64jsn766e2d0c367e'
  }
};

function renderAnlyticsTemplate({ item }){ 
  return(
    <AnlyticTemplate 
       item={item}
      //  moveToBlogScreen={moveToBlogScreen}
      //  onModalOpen={onModalOpen}
    />
 )
  }

  

  useEffect(() => {
    //get data from api 
    axios.request(options).then((response)=>{
      setanalytics(response.data.countries_stat)
      setloading(false)
      console.log(analytics.countries_stat)
    }).catch((err) => {
      console.log(err)
    }) 
  }, [])

    return  analytics.length > 0  ? 
      <View style={styles.Container}>
        <FlatList style={styles.flay}
          data={analytics}
          keyExtractor={(item) => item.country_name}
          key={analytics.country_name}
          renderItem={
            renderAnlyticsTemplate
          }
        />       
      </View> :
    (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#333"  />
      </View>
      // <View style={styles.Container}>
      //   <FlatList style={styles.flay}
      //     data={analytics}
      //     keyExtractor={(item) => item.country_name}
      //     key={analytics.country_name}
      //     renderItem={
      //       renderAnlyticsTemplate
      //     }
      //   />       
      // </View>

    )
  
  
}

export default AnalyticsCovid

const styles = StyleSheet.create({
  Container:{
    marginTop:50,
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  Title:{
    fontSize:24,
    fontWeight:'bold'
  },
  flay:{
    width:'90%',
    // marginTop:'10'
  },
  container:{
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }

})
