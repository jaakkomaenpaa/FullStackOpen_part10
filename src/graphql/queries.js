import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
    ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection,
      searchKeyword: $searchKeyword) {
      edges {
        node {
          id
          description
          forksCount
          fullName
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`
export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      ownerAvatarUrl
      forksCount
      ratingAverage
      reviewCount
      stargazersCount
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const GET_LOGGED_USER = gql`
  query getMe($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            createdAt
            rating
            text
            repository {
              fullName
              name
            }
          }
        }
      }
    }
  }
`