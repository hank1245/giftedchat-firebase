import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { authState } from '../atoms';

const SignInPage = () => {
  const navigation = useNavigation();
  const [auth, setAuth] = useRecoilState(authState);

  async function onLogin() {
    const data = { name: 'hank', email: 'test@gmail.com' };
    setAuth(data);
  }

  return (
    <SafeAreaView
      style={{ alignItems: 'center', backgroundColor: 'white', flex: 1 }}
    >
      <View style={{ width: 261, marginTop: 40 }}>
        <Pressable
          style={{ position: 'absolute', zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={28} color="black" />
        </Pressable>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
      </View>
      <Input style={{ marginTop: '25%' }} placeholder="이메일" />
      <Input
        style={{ marginTop: 12 }}
        placeholder="비밀번호"
        secureTextEntry={true}
      />
      <Button text="로그인하기" style={{ marginTop: 34 }} onPress={onLogin} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default SignInPage;
