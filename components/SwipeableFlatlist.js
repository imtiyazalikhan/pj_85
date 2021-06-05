import React, { Component } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import {ListItem,Icon} from 'react-native-elements';
import db from '../config';

export default class SwipeableFlatlist extends Component{
    constructor(props){
        super(props);

        this.state={
            allNotification:this.props.allNotification,
            
        };
    }


    updateMarkAsread = (Notification)=>{
        db.collection("all_notifications").doc(Notification.doc_id).update({
             "notification_status":"read"
        })
    }
    
}

