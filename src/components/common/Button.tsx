import { PressableProps, ViewStyle } from 'react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  text: string;
};

const Button = ({ text, ...props }: ButtonProps & PressableProps) => {
  return (
    <Pressable {...props} style={[styles.button, props.style as ViewStyle]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 261,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Button;
