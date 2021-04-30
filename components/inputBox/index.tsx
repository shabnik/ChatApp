import React, {useState} from 'react';
import {Text, View, TextInput} from "react-native";
import styles from "./style";
import { FontAwesome, Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {
    //this will create a state. usestateHook
    const[message, setMessage] = useState ('');
     
    const onMicrophonePress = () => {
        console.warn("No microphone access");
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`);

        //send the message to backend
        setMessage('');
    }
    
    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        }else {
            onSendPress();
        }
    }

    return (
        <View style ={styles.container}>
            <View style = {styles.mainContainer}>
                <Entypo name="emoji-happy" size={24} color="black" />
                <TextInput style={styles.textInput}
                multiline
                placeholder = {"Type a message"}
                value={message}
                onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="black" style={styles.icon}/>
                {!message && <Entypo name="camera" size={24} color="black" stle={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={(onPress)}>
                <View style={styles.buttonContainer}>
                    {message 
                    ? <FontAwesome name="send" size={24} color="white" /> 
                    : <FontAwesome name="microphone" size={24} color='white'/>}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;