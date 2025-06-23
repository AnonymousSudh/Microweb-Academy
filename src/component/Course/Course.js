import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window')
console.log(height);

const Course = () => {
  const navigation = useNavigation();
  const course = [
    {
      courseName:"ADCA",
      image: require("../../../assests/coursecardADCA.png")
    },
    {
      courseName:"CCC",
      image: require("../../../assests/courseCardCCC.png")
    }
  ]
  return (
    <View styles={{ borderColor: "red", borderWidth: 1 }}>
      <Text style={[AppStyle.headingStyle]}>Courses</Text>

      <ScrollView style={styles.course}
        horizontal={true}
      >
        {course.map((val) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(val.courseName)
              }}>
              <Image
                style={styles.courseCard}
                source={val.image}


              />
            </TouchableOpacity>
          )

        })}

      
      </ScrollView>
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
  course: {
    paddingLeft: 8

    // borderColor:"red",
    // borderWidth:1

  },
  courseCard: {
    width: width / 2,
    borderColor: "green",
    resizeMode: "center",
    height: height / 5
  }
})