import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Trial from './src/Trial';
import Trial2 from './src/Trial2';
import ADCA from './src/component/Course/ADCA';
import CCC from './src/component/Course/CCC';
import Gallery from './src/Gallery';
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
        <Stack.Screen name="ADCA" component={ADCA} options={{headerShown:false}} />
        <Stack.Screen name='Gallery' component={Gallery}/>
        <Stack.Screen name="CCC" component={CCC} options={{headerShown:false}} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({


})