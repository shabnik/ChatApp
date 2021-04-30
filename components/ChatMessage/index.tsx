import React from 'react';
import {Message} from "../../types";
import { Text, View } from "react-native";
import moment from 'moment';
import styles from "./style";
import Colors from '../../constants/Colors';

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[styles.messageBox,
            {backgroundColor: isMyMessage() ? Colors.light.textBox : '#ebebeb',
            marginRight : isMyMessage() ? 0 : 70,
            marginLeft : isMyMessage() ? 70 : 0,
            }
            ]}>
                {/*the next line bellow will only execute if the first condition is true */}
                {!isMyMessage() && <Text style = {styles.name}> {message.user.name}</Text>}
                <Text style = {styles.message}> {message.content} </Text> 
                <Text style = {styles.time}> {moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
        
    )
}

export default ChatMessage;