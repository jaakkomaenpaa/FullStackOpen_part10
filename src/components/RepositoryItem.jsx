import {  StyleSheet, Pressable } from 'react-native';
import { useNavigate } from "react-router-native";

import InfoField from './RepositoryItem/InfoField';
import StatisticsField from './RepositoryItem/StatisticsField';
import theme from '../theme';


const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    backgroundColor: theme.colors.secondaryBackground,
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 20
  }
});

const RepositoryItem = ( {item} ) => {
  const navigate = useNavigate()
  
  return (
    <Pressable testID='repositoryitem' style={styles.flexContainer}
    onPress={(() => navigate(`/${item.id}`))}>
      <InfoField item={item} />
      <StatisticsField item={item} /> 
    </Pressable>
  )
};

export default RepositoryItem;