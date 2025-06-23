import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigatation from '../BottomNavigatation/BottomNavigatation';
import Contact from '../../Contact';
import About from '../../About';
const Drawerr = createDrawerNavigator();
const Drawer = () => {
    return (
        <Drawerr.Navigator >
            <Drawerr.Screen name="Microweb Academy" component={BottomNavigatation}
                options={{
                    headerStyle: {
                        backgroundColor: "#06060B"
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }
                } />

            <Drawerr.Screen name="Contact" component={Contact}
                options={{
                    headerStyle: {
                        backgroundColor: "#06060B"
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }
                } />

            <Drawerr.Screen name="About" component={About}
                options={{
                    headerStyle: {
                        backgroundColor: "#06060B"
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }
                } />

        </Drawerr.Navigator>
    )
}

export default Drawer

