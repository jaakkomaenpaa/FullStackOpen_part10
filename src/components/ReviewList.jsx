import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';

import { GET_LOGGED_USER } from '../graphql/queries';
import Text from '../components/Text'
import ReviewItem from './SingleRepository/ReviewItem';

const ReviewList = () =>  {

  const { data, error, loading } = useQuery(GET_LOGGED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true }
  })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    console.error(error)
  }

  const reviews = data?.me.reviews
  const reviewNodes = reviews
  ? reviews.edges.map(edge => edge.node)
  : []

  console.log('data', data)
  console.log(reviewNodes)

  return (
    <FlatList 
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} inReviewList={true} />}
      keyExtractor={({ id }) => id}
    />
  )
}

export default ReviewList;