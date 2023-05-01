import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window')
console.log(height);

const Course = () => {
  return (
    <View styles={{borderColor:"red",borderWidth:1}}>
      <Text style={[AppStyle.headingStyle]}>Courses</Text>

      <ScrollView style={styles.course}
        horizontal={true}
      >

        <TouchableOpacity>

          <Image
            style={styles.courseCard}
            source={require("../../../assests/coursecardADCA.png")}

          />
        </TouchableOpacity>
        <TouchableOpacity>

          <Image
            style={styles.courseCard}
            source={require("../../../assests/courseCardCCC.png")}

          />
        </TouchableOpacity>
        <TouchableOpacity>

          <Image
            style={styles.courseCard}
            source={require("../../../assests/coursecardADCA.png")}

          />
        </TouchableOpacity>
        <TouchableOpacity>

          <Image
            style={styles.courseCard}
            source={require("../../../assests/courseCardCCC.png")}

          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
    course:{
        paddingLeft:8

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