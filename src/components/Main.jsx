import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import SingleRepository from './SingleRepository';
import theme from '../theme';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import ReviewList from './ReviewList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="/:id" element={<SingleRepository />} exact />
        <Route path="/review" element={<CreateReview />} exact />
        <Route path="/sign-up" element={<SignUp />} exact />
        <Route path="/my-reviews" element={<ReviewList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;