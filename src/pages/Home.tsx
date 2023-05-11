import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth/react-native';
import { useSetRecoilState } from 'recoil';
import { userDataState } from '../atoms';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedInStackParamList } from '../../AppInner';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const auth = getAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<LoggedInStackParamList, 'Chat'>>();
  const setUserData = useSetRecoilState(userDataState);
  const onSignOut = async () => {
    setUserData({ email: null });
    await signOut(auth);
  };
  const onEnter = () => {
    navigation.navigate('Chat');
  };
  return (
    <SafeAreaView
      style={{ alignItems: 'center', backgroundColor: 'white', flex: 1 }}
    >
      <View style={{ width: '85%', marginTop: 40 }}>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title}>채팅 목록</Text>
          <Pressable onPress={onSignOut}>
            <Text style={{ color: 'gray', fontSize: 20 }}>로그아웃</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        onPress={onEnter}
        style={{ width: '100%', alignItems: 'center' }}
      >
        <View style={styles.rooms}>
          <Text>행크</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  rooms: {
    width: '85%',
    height: 50,
    marginVertical: 20,
    padding: 5,
    backgroundColor: 'red',
  },
});

export default Home;
