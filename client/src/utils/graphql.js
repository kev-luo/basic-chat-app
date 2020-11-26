import { gql } from '@apollo/client';

export const GET_MESSAGES_QUERY = gql`
  {
    getMessages {
      id
      user
      content
    }
  }
`

export const CREATE_MSG_MUTATION = gql`
  mutation {
    
  }
`