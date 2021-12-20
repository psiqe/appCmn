import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { setStatusBarStyle } from 'react-native';

import Home from './pages/Home';
import Register from './pages/Register';

const Drawer= createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home"
                component={Home}
            />
        </Drawer.Navigator>
    )
}
 
export default Routes;