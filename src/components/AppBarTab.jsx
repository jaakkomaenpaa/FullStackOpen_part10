import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import Text from './Text';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  }
});

const AppBarTab = ({ label, to }) => {

  if (label === "Sign out") {
    return (
      <SignOut styles={styles} />
    )
  }

  return (
    <Pressable style={styles.tab} >
      <Link to={to}>
        <Text style={styles.tabText} fontWeight='bold' >{label}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;