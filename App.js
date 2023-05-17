import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Trial from './src/Trial';
import Trial2 from './src/Trial2';
import SideDrawer from './src/component/Drawer/SideDrawer';
import BottomNavigatation from './src/component/BottomNavigatation/BottomNavigatation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SideDrawer" component={SideDrawer} options={{headerShown:false}}/>
        <Stack.Screen name="Trial" component={Trial} />
        <Stack.Screen name="Trial2" component={Trial2} />
      </Stack.Navigator>

    </NavigationContainer >
  )
}

export default App

const styles = StyleSheet.create({


})