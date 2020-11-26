import { gql } from '@apollo/client';

export const GET_MESSAGES_QUERY = gql`
  query {
    getMesssages {
      id
      user
      content
    }
  }
`