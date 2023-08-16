import { useQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (order, filter) => {

  const [orderBy, orderDirection] = order.split('|')

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: orderBy, 
      orderDirection: orderDirection, 
      searchKeyword: filter
    }
  })
  if (error) {
    console.error(error)
  }
  const repositories = data?.repositories
  return { repositories, loading }
}

export default useRepositories
