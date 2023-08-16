import { FlatList} from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';

import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import { GET_REPOSITORY } from '../../graphql/queries';
import Text from '../Text';

const SingleRepository = () => {
  
  const id = useParams().id
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  }) 
  console.log('data', data, 'loading' , loading)

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    console.error(error)
  }

  const repository = data?.repository
  const reviews = repository.reviews

  const reviewNodes = reviews
  ? reviews.edges.map(edge => edge.node)
  : []

  return (
    <FlatList 
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />

  )
};

export default SingleRepository;