import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";

import styles from "./style"
import {Contacts} from "../../types";
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps = {
contacts:Contacts;
}

const ContactListItem = (props: ContactListItemProps) => {
    //destructuring assignment, a way to retrieve values from an object
    const { contacts } = props;
    const navigation = useNavigation();

    //'' means template literals allows embedded expressions which are indicated by(${expression})
    const onClick = () => {
        console.warn(`Clicked on ${contacts.name}`)
        //will start a new converstation
    } 


    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style = {styles.leftContainer}>
                    <Image source ={{uri: contacts.imageUri}} style={styles.avatar}/>
            
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{contacts.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;