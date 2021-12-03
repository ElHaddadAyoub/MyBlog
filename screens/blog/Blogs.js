import React  , {useEffect , useState}from 'react';
import { StyleSheet, Text,ActivityIndicator, View , FlatList ,Modal,TouchableOpacity } from 'react-native';
import { db } from '../../firebase';
import BlogTemplate from './BlogTemplate';
import { Ionicons } from '@expo/vector-icons';
import ModalComp from './ModalComp';
import { StatusBar } from 'expo-status-bar';


const Blogs = ({navigation}) => {

  const [blogs, setblogs] = useState([])
  const [isOpen, setisOpen] = useState(false)
  const [idBlog, setidBlog] = useState([])
  const [isLoading, setisLoading] = useState(true)



  const data =()=> {
  db.collection('blogs').get()
  .then(collectionSnapshot => {
          // console.log('Total users: ', collectionSnapshot.size , 'collection : ',collectionSnapshot.id);
          const datafromFirebase = [];
          collectionSnapshot
              .forEach(documentSnapshot => {
                datafromFirebase.push({
                  ...documentSnapshot.data(),
                  id:documentSnapshot.id
                })
                  // console.log('User ID: ', documentSnapshot.id,
                  //     documentSnapshot.data());
                      
              });
              setisLoading(false)
              setblogs(datafromFirebase);
      })  
}

function onModalOpen(blogId) {
  setisOpen(true)
  setidBlog(blogId)
  
}
function onCloseModal() {
  setisOpen(false)
  setidBlog(null)
  
}


function onDeleteBlog() {
  setisOpen(false)

  
  db
  .collection('blogs')
  .doc(idBlog)
  .delete()
  .catch((error) => console.log(error))
  console.log('deleted success id: ',idBlog )
  setidBlog(null)
  setblogs(blogs =>blogs.filter(bl =>bl.id !==idBlog))
  
}

function renderBlogTemplate({ item }){ 
  return(
    <BlogTemplate 
       item={item}
      //  toDetails={toDetails}
      //  moveToBlogScreen={moveToBlogScreen}
       onModalOpen={onModalOpen}
    />
 )
}

// function toDetails (item){
//     navigation.navigate('')
// }

    useEffect(() => {
      data()
    // }, [blogs])
    }, [])
    
    return blogs.length > 0 ?
       
        
          <View >
              <StatusBar   />
              <Modal
                visible={isOpen}
                animationType='fade'
                transparent={true}
                >    
                <ModalComp
                  onPressHandlers={{
                      // onUpdateBlog,
                      onDeleteBlog,
                      onCloseModal
                  }}
                  onCloseModal={onCloseModal}
                /> 
              </Modal>
              <FlatList 
              style={styles.listBlog}
              data={blogs}
              keyExtractor={(item)=>item.id}
              renderItem={renderBlogTemplate}
              />
          </View> 
          : <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#333"  />
            </View>
        
       
    

    
}

const styles = StyleSheet.create({
  title:{
    marginTop:20,
    fontSize: 36,
    color: 'rgba(0,0,0,0.7)'
  },  
 

  listBlog:{
    marginTop:50,
  },
  addBlogBtn:{
    position:'absolute',
    bottom:2,
    left:20
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

 
export default Blogs;