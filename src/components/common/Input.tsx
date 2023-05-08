import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const Input = ({ ...props }: TextInputProps) => {
  return <TextInput {...props} style={[styles.textInput, props.style]} />;
};

const styles = StyleSheet.create({
  textInput: {
    width: 261,
    height: 44,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Input;
