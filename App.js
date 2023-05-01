import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/Home'
import Course from './src/Course';
import Trial from './src/Trial';
import Gallery from './src/Gallery';
import BottomNavigatation from './src/component/BottomNavigatation/BottomNavigatation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNavigatation">
        {/* <Stack.Screen name="Microweb Academy" component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#06060B"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} /> */}
        {/* <Stack.Navigator> */}
        <Stack.Screen name="BottomNavigatation" component={BottomNavigatation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Trial" component={Trial} />
        {/* <Stack.Screen name="Gallery" component={Gallery} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({


})