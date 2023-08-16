import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import { GET_LOGGED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { data } = useQuery(GET_LOGGED_USER, {
    fetchPolicy: 'cache-and-network'
  });
  const loggedUser = data?.me
  console.log('user', loggedUser)

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label ="Repositories" to="/" />
        <AppBarTab label ="Create a review" to="/review" />
        {loggedUser ? <AppBarTab label="My reviews" to="/my-reviews"></AppBarTab> : null}
        <AppBarTab label={loggedUser ? "Sign out" : "Sign in"} to="/sign-in"></AppBarTab> 
        {!loggedUser ? <AppBarTab label="Sign up" to="/sign-up"></AppBarTab> : null}
      </ScrollView>
    </View>
  );
};

export default AppBar;