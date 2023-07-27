import { useMutation, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { AUTHENTICATE } from '../graphql/mutations';
import { useAuthStorage } from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const [authenticate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    try {
      const { data } = await authenticate({ variables: { credentials } });
      if (data) {
        const accessToken = data.authenticate.accessToken
        await authStorage.setAccessToken(accessToken)
        apolloClient.resetStore();
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  return [signIn, result];
};

export default useSignIn;