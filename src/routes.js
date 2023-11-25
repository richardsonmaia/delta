import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Ionicons } from '@expo/vector-icons';

import carrinhos from './pages/carrinhos.js'
import categoria from './pages/categoria.js'
import favoritos from './pages/favoritos.js'
import home from './pages/home.js'

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarActiveTintColor: '#6C008B',
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
            name="Home"
            component={home}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if(focused){
                        return<Ionicons name="home" size={size} color={color} />
                    }

                    return <Ionicons name="home-outline" size={size} color={color}/>
                } 
            }}
            />

        <Tab.Screen 
            name="Categoria"
            component={categoria}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if(focused){
                        return<Ionicons name="bookmark" size={size} color={color} />
                    }

                    return <Ionicons name="bookmark-outline" size={size} color={color}/>
                }
            }}
            />

        <Tab.Screen 
            name="Favoritos"
            component={favoritos}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if(focused){
                        return<Ionicons name="heart" size={size} color={color} />
                    }

                    return <Ionicons name="heart-outline" size={size} color={color}/>
                }
            }}
            /> 

        <Tab.Screen 
            name="Carrinhos"
            component={carrinhos}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if(focused){
                        return<Ionicons name="cart" size={size} color={color} />
                    }

                    return <Ionicons name="cart" size={size} color={color}/>
                }
            }}
            />
        </Tab.Navigator> 
    );
}

export default Routes;