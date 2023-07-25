import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
});

const AppBarTab = ({ label, to }) => {

  return (
    <Pressable style={styles.tab} >
      <Link to={to}>
        <Text style={styles.tabText} fontWeight='bold' >{label}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;