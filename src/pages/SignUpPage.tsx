import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StackParamList } from '../../AppInner';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export interface SignUpProps {
  email: string;
  password: string;
  confirmPassowrd: string;
}

const SignUpPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, 'SignUp'>>();
  const [input, setInput] = useState<SignUpProps>({
    email: '',
    password: '',
    confirmPassowrd: '',
  });
  const [error, setError] = useState('');
  const onSignUp = () => {
    if (validate(input) === '') {
      Alert.alert('회원가입이 완료되었습니다.');
      createUserWithEmailAndPassword(auth, input.email, input.password);
      navigation.navigate('SignIn');
    } else {
      setError(validate(input));
    }
  };

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <View style={{ width: 261, marginTop: 40 }}>
        <Pressable
          style={{ position: 'absolute', zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={28} color="black" />
        </Pressable>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>회원가입</Text>
        </View>
      </View>
      <Input
        style={{ marginTop: '25%' }}
        placeholder="이메일"
        onChangeText={text => setInput({ ...input, email: text })}
      />
      <Input
        style={{ marginTop: 12 }}
        placeholder="비밀번호 (8~16자리)"
        secureTextEntry={true}
        onChangeText={text => setInput({ ...input, password: text })}
      />
      <Input
        style={{ marginTop: 12 }}
        placeholder="비밀번호 확인"
        secureTextEntry={true}
        onChangeText={text => setInput({ ...input, confirmPassowrd: text })}
      />
      {error !== '' && <Text style={styles.err}>{error}</Text>}
      <Button text="회원가입" style={{ marginTop: 34 }} onPress={onSignUp} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  err: {
    textAlign: 'left',
    marginRight: 'auto',
    marginLeft: 65,
    marginTop: 10,
    color: 'red',
  },
});

export default SignUpPage;
