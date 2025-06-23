import { StyleSheet, Linking, Text, View, TextInput, Image, Button, Dimensions } from 'react-native'
import React, { useState } from 'react';
import MapView from 'react-native-maps';
import appStyle from '../AppStyle';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Link, useNavigation } from '@react-navigation/native';
import Trial from './Trial';
const { width, height } = Dimensions.get("screen")

// import { TextInput } from 'react-native-gesture-handler';

const Contact = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 37.775,
    longitude: -122.418,
    zoomLevel: 13,
  });
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Image
        style={styles.image}
        source={require("../assests/Group1.png")}
      />
      <View style={styles.ParentBox}>

        <View style={[styles.contactBox]}>
          <View style={[styles.section1]}>
            <View style={[styles.phone, styles.infoComman]}>
              <TouchableOpacity
                onPress={() => Linking.openURL('tel:919044394770')}
              >

                <Image
                  style={styles.icon}
                  source={require("../assests/call.png")}
                />
              </TouchableOpacity>
              <Text style={styles.text} >9044394770</Text>
              {/* <Button><Text style={styles.text} >9044394770</Text></Button> */}
            </View>
            <View style={[styles.emial, styles.infoComman]}>

              <TouchableOpacity
                onPress={() => Linking.openURL('mailto:microweb039@gmail.com')}
              >
                <Image

                  style={[styles.icon,]}
                  source={require("../assests/mail.png")}
                />
              </TouchableOpacity>

              <Text style={styles.text} >microweb039@gmail.com</Text>
            </View>
            <View style={[styles.address, styles.infoComman]}>
              <TouchableOpacity
              onPress={()=>Linking.openURL('https://goo.gl/maps/XQH93u9dkJEyeHFz5')}
              >
                <Image
                  style={styles.icon}
                  source={require("../assests/address.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.text]}>Siktiya, Plant depot,{'\n'}Mughalsarai, 232101</Text>
            </View>
          </View>
          <View style={styles.section2}>
            <View style={styles.nameEmailView}>
              <TextInput
                style={[styles.textInput, {width: "48%" }]}
                placeholder="Name"
                cursorColor="red"
                inputMode="text"
                placeholderTextColor="white"
              />
              <TextInput
                style={[styles.textInput, { width: "48%" }]}
                placeholder="Email"
                placeholderTextColor="white"
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <TextInput
                style={[styles.textInput]}
                placeholder="Message"
                placeholderTextColor="white"
                multiline
              />
            </View>

            <TouchableOpacity
              // style={styles.sendButton}
              style={{}}
            onPress={() => Linking.openURL('sms:+919044394770 body="jg"')}
            >
              <Text>Send Message</Text>
         
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>


  )
}

export default Contact

const styles = StyleSheet.create({
  ParentBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height:height/2,
    marginTop: 70


  },
  contactBox: {

    width: "90%",
    // marginLeft:40,
    // marginHorizontal:800,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopEndRadius: 90,
    // elevation: 20,
    shadowColor: 'white',
    backgroundColor: "#181818",
    justifyContent: "space-evenly"
    // marginVertical:40


  },
  section1: {
    // borderColor: "red",
    // borderWidth: 10,
    minHeight: height * 0.3,
    justifyContent: "space-evenly"
  },
  infoComman: {
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center",
    // marginRight:40

  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 20

  },
  textInput: {
    borderColor: "transparent",
    borderBottomColor: "white",
    borderWidth: 1,
    color: "white",
    overflow:"hidden"
    // paddingLeft:10
    // marginLeft
  },
  text: [appStyle.normalText],
  nameEmailView: {
    flexDirection: "row",
    // borderColor: "red",
    // borderWidth: 1,
    justifyContent: "space-between"
  },
  image: {
    position: "absolute",
    width: 170,
    height: 170,
    top: 10,
    right: 10

  },
  section2: {
    // borderColor: "black",
    // borderWidth: 1,
    // alignte
  },
  sendButton: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    // textAlign:"center",
    backgroundColor: "#E5E8F1",
    // width:30,
    height: 35,
    borderRadius: 20,
    display:"flex",
    flexDirection:"row",
    textAlign:"center",
    marginBottom:2
  } 
})

// <View style={{
//   flexDirection: "row", 
//   alignItems: "center",
//   justifyContent: "center",
//   paddingRight: 5,
//   borderColor: "black",
//   borderWidth: 1,

// }}></View>


// source={propertyData?.planType == "premium" ? null : gradientImage}
// // source={gradientImage}
// backgroundColor: propertyData?.planType == "premium" ? "#249608" : "#5a5adf",

// {propertyData?.size.replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? "0"} sqft