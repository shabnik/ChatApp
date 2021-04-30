import React from 'react';
import { FlatList, Text, ImageBackground } from 'react-native';
import chatRoomData from '../data/Chats';
import { useRoute } from '@react-navigation/native'
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/inputBox"
import BG from "../assets/images/BG-Image.jpg"

const ChatRoomScreen = () => {

    const route = useRoute();
    
    return (
        <ImageBackground style= {{width: '100%', height: '100%'}}source = {BG}>
            <FlatList
            data = {chatRoomData.messages}
            renderItem = {({ item }) => 
            <ChatMessage message = {item} />}
            //this makes the messages inverted, so the most recent ones r at the bottom
            inverted
            />
            <InputBox />
        </ImageBackground>
    );
}

export default ChatRoomScreen;