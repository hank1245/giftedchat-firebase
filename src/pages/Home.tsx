import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth/react-native';
import { useSetRecoilState } from 'recoil';
import { userDataState } from '../atoms';

const Home = () => {
  const auth = getAuth();
  const setUserData = useSetRecoilState(userDataState);
  const onSignOut = async () => {
    setUserData({ email: null });
    await signOut(auth);
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default Home;
