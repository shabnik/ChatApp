import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItems';
import chatRooms from '../data/ChatRooms';
import { FlatList } from 'react-native-gesture-handler';
import NewMessageButton from '../components/FloatingButton';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      style={{width: '100%'}}
      data={chatRooms} 
      //renderItem is a function that is called everytime flatlist wants to render ONE chatroom
      renderItem={({ item }) => <ChatListItem chatRoom={item}/>}
      keyExtractor = {(item) => item.id}
      />
      <NewMessageButton/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});