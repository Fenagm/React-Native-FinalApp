
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {InfoScreen} from "../Screens/InfoScreen";


import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen, InfoScreen);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    setLogout(){
        this.setState({isLoggedIn:false});

    }
    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Buscador"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props} />}
            >
                <Drawer.Screen name="Buscador" component={HomeScreen} />
                <Drawer.Screen name="Perfil" component={InfoScreen} />
           
            </Drawer.Navigator>
        );
    }
    
}

