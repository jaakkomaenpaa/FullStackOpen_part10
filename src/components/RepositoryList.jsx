import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useDebounce } from 'use-debounce';
import React from 'react';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 5,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props
    
    return (
      <RepositoryListHeader 
        order={props.order}
        setOrder={props.setOrder}
        filter={props.filter}
        setFilter={props.setFilter}  
      />
    )
  }

  getRepositories = () => {
    const repositories = this.props.repositories
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return repositoryNodes
  }

  render() {
    return (
      <FlatList
        data={this.getRepositories()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItem item={item}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    )
  }
  
}


const RepositoryList = () => {
  const [ order, setOrder ] = useState('CREATED_AT|DESC')
  const [ filter, setFilter ] = useState('')
  const [ delayedFilter ] = useDebounce(filter, 500)
  const { repositories, loading } = useRepositories(order, delayedFilter);

  if (loading) return <Text>Loading...</Text>

  return (
    <RepositoryListContainer 
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      filter={filter}
      setFilter={setFilter}
    />
  )
  
};

export default RepositoryList;

const RepositoryListHeader = ({ order, setOrder, filter, setFilter }) => {

  return (
    <View>
      <TextInput style={styles.textInput}
        value={filter}
        onChangeText={((text) => setFilter(text))}
        placeholder='Search...'
      />
      <Picker
        selectedValue={order}
        prompt='Select an item...'
        onValueChange={(itemValue) => {
          setOrder(itemValue)
        }}>
        <Picker.Item label='Latest repositories' value='CREATED_AT|DESC' />
        <Picker.Item label='Highest rated repositories' value='RATING_AVERAGE|DESC' />
        <Picker.Item label='Lowest rated repositories' value='RATING_AVERAGE|ASC' />
      </Picker>
    </View>
  )
}