import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation getToken($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;