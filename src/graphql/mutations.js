import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation getToken($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`
export const CREATE_REVIEW = gql`
  mutation create($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      rating
      text
      repositoryId
      user {
        username
      }
    }
  }
`
export const CREATE_USER = gql`
  mutation create($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    } 
  }
` 

