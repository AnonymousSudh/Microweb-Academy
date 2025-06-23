import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Home from '../../Home';
import Course from '../../Course';
import AppStyle from '../../../AppStyle';
import courseImg from '../../../assests/course.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { width, height } = Dimensions.get('window')
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Ionicons

const BottomNavigatation = () => {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarStyle: {
          // backgroundColor: '#06060B',
          // height: 50,
          // borderColor:"red",
          // borderWidth:4,
          // marginHorizontal:(width*5)/100,
          // borderRadius:20,
          // marginBottom:10
        },
        tabBarShowLabel: false,
        // tabBarActiveTintColor: '#e91e63',
        // tabBarActiveTintColor: '#893',
        tabBarActiveBackgroundColor:"#902",
        tabBarInactiveBackgroundColor:'#532344'

      }}
    >
      <Tab.Screen name="Microweb Academy." component={Home}
        options={{
          headerShown:false,
          headerStyle: {
            backgroundColor: "#06060B"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused, colour, size }) => {
            console.log( `this is home clicked ${focused} `)
            return <Image style={{ backgroundColor: colour }} source={require("../../../assests/home32px.png")} />
          }
        }} />


      <Tab.Screen name="Course" component={Course}
        options={{
          headerShown:false,
          tabBarIcon: () => {
            return <Image style={AppStyle.navigationIcon} source={require("../../../assests/course.png")} />
          }
        }}
      />
        {/* <Tab.Screen name="Trial" component={Trial}
        options={{
          tabBarIcon: ({focused, colour, size }) => {
            console.log(focused)
            return <Image style={AppStyle.navigationIcon} source={require("../../../assests/course.png")} 

            />
          }
        }} 
      /> */}
    </Tab.Navigator>
  );

}

export default BottomNavigatation

const styles = StyleSheet.create({
  navigatationView: {
    maxHeight: (height * 1) / 1000,
    minHeight: (height * 1) / 1000,
    borderWidth: 10,
    borderColor: "red"
  },
  text: {
    color: 'white'
  },
  tabBarIcon: {
    // backgroundColor

  }
})