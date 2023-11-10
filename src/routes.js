import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

import carrinhos from './pages/carrinhos.js'
import categoria from './pages/categoria.js'
import favoritos from './pages/favoritos.js'
import home from './pages/home.js'

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHiderOnKeyboard:true,
    headerShow: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const Routes = () => {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
            name="home"
            component={home}
            />

        <Tab.Screen 
            name="categoria"
            component={categoria}
            />

        <Tab.Screen 
            name="favoritos"
            component={favoritos}
            /> 

        <Tab.Screen 
            name="carrinhos"
            component={carrinhos}
            />
        </Tab.Navigator> 
    );
}

export default Routes;