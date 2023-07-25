import { View, StyleSheet } from 'react-native';

import InfoField from './RepositoryItem/InfoField';
import StatisticsField from './RepositoryItem/StatisticsField';
import theme from '../theme';

const styles = StyleSheet.create({
    
  flexContainer: {
    display: 'flex',
    backgroundColor: theme.colors.secondaryBackground,
    flexWrap: 'wrap',
    flexDirection: 'column',
  }
});

const RepositoryItem = ( {item} ) => {

  return (
    <View style={styles.flexContainer}>
      <InfoField item={item} />
      <StatisticsField item={item} /> 
    </View>
  )
};

export default RepositoryItem;