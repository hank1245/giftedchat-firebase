import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { authState } from '../atoms';
import { useState } from 'react';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authData, setAuthData] = useRecoilState(authState);

  async function onLogin() {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(data => {
          console.log(data.user);

          console.log('success');
          setAuthData({ email: data.user.email! });
        })
        .catch(err => console.log(err));
    }
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
          <Text style={styles.title}>로그인</Text>
        </View>
      </View>
      <Input
        style={{ marginTop: '25%' }}
        placeholder="이메일"
        onChangeText={text => setEmail(text)}
      />
      <Input
        style={{ marginTop: 12 }}
        placeholder="비밀번호"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
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
