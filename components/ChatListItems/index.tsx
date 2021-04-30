import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";

import styles from "./style"
import {ChatRoom} from "../../types";
//import * as moment from "moment";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
chatRoom:ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    //destructuring assignment, a way to retrieve values from an object
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    const navigation = useNavigation();

    //'' means template literals allows embedded expressions which are indicated by(${expression})
    const onClick = () => {
        console.warn(`Clicked on ${user.name}`)
        navigation.navigate('ChatRoom' , { id:chatRoom.id,name: user.name,})
    } 

    

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style = {styles.leftContainer}>
                    <Image source ={{uri: user.imageUri}} style={styles.avatar}/>
            
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text numberOfLines = {1} style = {styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>

                </View>
                <Text style = {styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;