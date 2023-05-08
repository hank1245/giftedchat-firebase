import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../AppInner';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const WelcomePage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, 'Welcome'>>();
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <Button
        text="회원가입"
        style={{ marginTop: 244 }}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
      <Button
        text="로그인"
        style={{ marginTop: 15 }}
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: '30%',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export default WelcomePage;
