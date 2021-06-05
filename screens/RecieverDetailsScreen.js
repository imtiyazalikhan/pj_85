import react from 'react';
import { Component } from 'react';
import {Text,View} from 'react';
import firebase from 'firebase';
import db from '../config';


export default class RecieverDetailsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:firebase.auth().currentUser.email,
            recieverId:this.props.navigation.getParam('details')["user_id"],
            requestId:this.props.navigation.getParam('details')["reqest_id"],
            bookName:this.props.navigation.getParam('details')["book_name"],
            reason_for_requesting:this.props.navigation.getParam('details')["reason_to_request"],
            recieverName:'',
            recieverContact:'',
            recieverAddress:'',
            recieverRequestDocId:'',
        }
    }
    addNotification=()=>{
        var message=this.state.userName+" has showen interest in donating the book"
        db.collection("all_notifications").add({
            "targeted_user_id":this.state.recieverId,
            "doner_id":this.state.userId,
            "request_id":this.state.requestId,
            "book_name":this.state.bookname,
            "date":firebase.firestore.FieldValue.serverTimestamp(),
            "notification_status":"unread",
            "message":message
        })
    }
    getRecieverDetails(){
        db.collection('users').where('email_id','==',this.state.recieverId).get()
        .then(snapshort=>{
            snapshort.forEach(doc=>{
                this.setState({
                    recieverName:doc.data().first_name,
                    recieverContact:doc.data().contact,
                    recieverAddress:doc.data().address,
                    
                })
            })
        })
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}