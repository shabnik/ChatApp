/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Camera: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: string;
  user: User;
};

export type ChatRoom = {
  id: String;
  users:User[];
  lastMessage: Message;
};

export type Contacts ={
  id:String;
  name:String;
  imageUri: String;
};