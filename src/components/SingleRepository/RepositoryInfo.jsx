import { View, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import InfoField from '../RepositoryItem/InfoField';
import StatisticsField from '../RepositoryItem/StatisticsField';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    backgroundColor: theme.colors.secondaryBackground,
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 20,
    paddingRight: 40
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    margin: 10
  },
  text: {
    color: 'white'
  },

});

const RepositoryInfo = ({ repository }) => {
  
  console.log('repo', repository)

  const openUrl = () => {
    Linking.openURL(repository.url)
  }

  return (
    <View style={styles.flexContainer}>
      <InfoField item={repository} />
      <StatisticsField item={repository} />
      <Pressable style={styles.button} onPress={openUrl}>
        <Text style={styles.text} fontWeight='bold' >Open in GitHub</Text>
      </Pressable>
    </View>
  )
}

export default RepositoryInfo;