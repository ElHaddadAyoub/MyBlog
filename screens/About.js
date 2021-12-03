import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Center,
} from 'native-base';
const About = ({navigation}) => {
  return (
    <NativeBaseProvider >
  <Center flex={1}>
      <Box
        mx="auto" 
        bg="primary.600"
        py="6"
        px="6"
        rounded="md"
        alignSelf="center"
        width={380}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text fontSize="sm" color="white">
              Developed by @ElhaddadAyoub
              </Text>
              <Text color="white" fontSize="lg">
                Let's Connect
              </Text>
            </VStack>
            <Pressable

              mt="2"
              rounded="sm"
              bg="primary.400"
              alignSelf="flex-start"
              py="3"
              px="4"
            >
              <Text 
                py="2"
                px="1"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white"
              >
                     <Ionicons name="logo-github" size={30}  ></Ionicons>   ElHaddadAyoub 
              </Text>
            </Pressable>
            <Pressable

mt="2"
              rounded="sm"
              bg="primary.400"
              alignSelf="flex-start"
              py="3"
              px="4"
            >
              <Text 
                py="2"
                px="1"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white"
              >
                     <Ionicons name="logo-facebook" size={30}  ></Ionicons> Ayoub el haddad
              </Text>
            </Pressable>
          </Box>
          <Image
          //ma photo
            source={
              require('../images/profile1.png')
            }
            alt="Ayoub El Haddad"
            height="100"
            rounded="full"
            width="100"
            mt="8"
          />
        </HStack>
      </Box>
      </Center>
    </NativeBaseProvider>

    // <View style={styles.Container}>
    //   <Text style={styles.Title}>Application developed by @ElhaddadAyoub</Text>
    //   <View style={{flexDirection:'row' , marginTop:10}}>
    //       <Ionicons name="logo-facebook" size={30} ></Ionicons>
    //       <Ionicons name="logo-github" size={30}  ></Ionicons>
    //   </View>
    // </View>
  )
}

export default About
const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop:50
  },
  Title:{
    fontSize:16,
    fontWeight:'bold'
  }
})
