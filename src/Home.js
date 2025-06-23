import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomNavigatation from './component/BottomNavigatation/BottomNavigatation.js'
import Course from './component/Course/Course.js'
import Gallery from './component/Gallery/Gallery.js'
import AppStyle from '../AppStyle.js'
const { width, height } = Dimensions.get('window')



const Home = () => {
  return (
    <ScrollView style={styles.HomePage}>
      <Text style={[AppStyle.normalText, styles.paragraph]}>Microweb Academy is a leading computer institute that offers a range of courses such as ADCA , CCC  and other diploma-level computer courses. With a focus on practical learning and industry-relevant skills, the institute provides a comprehensive understanding of computer applications and their practical implementation, helping students to build successful careers in the field of information technology.</Text>
      <Course />
      <Gallery />

    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({
  HomePage: {
    // borderWidth:1,
    // borderColor:"red",
    backgroundColor: "#06060B",
    height: "110%",
    paddingHorizontal: 5,
    Color: '#E5E8F1',
    paddingTop: 8,
    // maxHeight:(height*80)/100
  },
  paragraph: {
    paddingLeft: 8,

  }

})