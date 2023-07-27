import { TextInput as NativeTextInput } from 'react-native';

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, isPassword, ...props }) => {
  const textInputStyle = [style];
  return <NativeTextInput style={textInputStyle} secureTextEntry={isPassword} {...props} />;
};

export default TextInput;