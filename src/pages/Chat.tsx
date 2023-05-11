import { useLayoutEffect, useState } from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { database } from '../../config/firebase';
import { getAuth } from 'firebase/auth/react-native';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';

const Chat = () => {
  const auth = getAuth();
  const [messages, setMessages] = useState<any[]>([]);
  const handleSend = (newMessages: any) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );

    const { _id, createdAt, text, user } = newMessages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
    });
  };

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, snap => {
      setMessages(
        snap.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.seconds,
          text: doc.data().text,
          user: doc.data().user,
        })),
      );
    });
    return () => unsub();
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      showUserAvatar={true}
      user={{
        _id: auth?.currentUser!.email!,
        name: auth?.currentUser!.email as string,
      }}
    />
  );
};

export default Chat;
