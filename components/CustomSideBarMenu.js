import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity, } from 'react-native';
import {DrawerItems}from 'react-navigation-drawer'
import firebase from "firebase"
import { Component } from 'react';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props} />
                </View>
            <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('welcomeScreen')
            firebase.auth().signOut
            }} >
                <Text>LogOut</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
