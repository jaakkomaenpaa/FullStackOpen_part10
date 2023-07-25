import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10
  },
  errorText: {
    
  }
});

const TextInput = ({ style, error, isPassword, ...props }) => {
  const textInputStyle = [style];
  return <NativeTextInput style={textInputStyle} secureTextEntry={isPassword} {...props} />;
};

export default TextInput;