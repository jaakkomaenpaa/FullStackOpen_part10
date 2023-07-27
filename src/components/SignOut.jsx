import { Pressable } from 'react-native';

import { useAuthStorage } from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import Text from './Text';

const SignOut = ({ styles }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    console.log('signout')
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <Pressable style={styles.tab} onPress={signOut}>
      <Text style={styles.tabText} fontWeight='bold'>Sign out</Text>
    </Pressable>
  )
}

export default SignOut;