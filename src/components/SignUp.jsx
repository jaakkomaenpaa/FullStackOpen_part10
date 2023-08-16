import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { View, Pressable, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import { CREATE_USER } from '../graphql/mutations';
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
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must not exceed 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(30, 'Password must not exceed 30 characters'),
  confirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

const SignUp = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()
  const [createUser] = useMutation(CREATE_USER)

  const submit = async (values) => {
    try {
      const { username, password } = values
      console.log(values)
      const { data } = await createUser({
        variables: { user: {username, password} }
      })
      console.log('data', data)
      await signIn({ username, password })
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        confirmation: ''
      }}
      onSubmit={submit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name='username' placeholder='Username' isPassword={false} />
          <FormikTextInput name='password' placeholder='Password' isPassword={true} />
          <FormikTextInput name='confirmation' placeholder='Password confirmation' isPassword={true} />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText} fontWeight='bold'>Sign up</Text>
          </Pressable>
        </View>
      )}

    </Formik>
  )
}

export default SignUp;