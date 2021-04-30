import React from 'react';
import {View} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Contacts} from "../../types";

const NewMessageButton = () => {
    const navigation = useNavigation();
    
    const onPress = () => {
        navigation.navigate('Contacts');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Entypo name="new-message" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageButton;