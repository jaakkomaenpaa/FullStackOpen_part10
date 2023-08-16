import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import { CREATE_REVIEW } from '../graphql/mutations';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

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
  owner: yup
    .string()
    .required('Repository owner name is required'),
  repository: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .integer()
    .min(0)
    .max(100),
  review: yup
    .string()
})

const CreateReview = () => {
  const navigate = useNavigate()
  const [createReview] = useMutation(CREATE_REVIEW)

  const submit = async (values) => {
    try {
      const review = {
        ownerName: values.owner,
        rating: parseInt(values.rating, 10),
        repositoryName: values.repository,
        text: values.review
      }
      console.log(review)
      const { data } = await createReview({ 
        variables: { review: review },
      })
      console.log('data', data)
      if (data) {
        navigate(`/${data.createReview.repositoryId}`)
      }
    } catch (error) {
      console.error('Mutation Error:', error.message);
      console.error('Network Error:', error.networkError);
    } 
      
  }

  return (
    <Formik 
      initialValues={{ 
        owner: '', 
        repository: '',
        rating: 0,
        review: ''
      }}
      onSubmit={submit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name='owner' placeholder='Repository owner name' />
          <FormikTextInput name='repository' placeholder='Repository name' />
          <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
          <FormikTextInput name='review' placeholder='Review' />
          <Pressable style={styles.button} onPress={handleSubmit} >
            <Text style={styles.buttonText} fontWeight='bold'>Create a review</Text>
          </Pressable>
        </View> 
      )}
    </Formik>
  )
}

export default CreateReview;