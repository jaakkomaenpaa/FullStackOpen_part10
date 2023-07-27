import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 15,
    backgroundColor: theme.colors.secondaryBackground,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignIn = () => {
  const [signIn] = useSignIn();


  const onSubmit = async (values) => {
    console.log(values)
    const { username, password } = values;

    try {
      await signIn({ username, password });
      console.log('ok');
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <Formik 
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput name='username' placeholder='Username' isPassword={false} />
        <FormikTextInput name='password' placeholder='Password' isPassword={true}/>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText} fontWeight='bold' >Sign in</Text>
        </Pressable>
      </View>
      )}
    </Formik>
  );
};

export default SignIn;