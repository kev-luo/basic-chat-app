import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_MESSAGES_QUERY } from '../utils/graphql';

export default function Message() {
  const { data, error } = useQuery(GET_MESSAGES_QUERY);
  if(error) {
    console.log(error);
  }
  return (
    <div>
      {data?.getMessages.map(message => {
        return (
          <div>{message.content}</div>
        )
      })}
    </div>
  )
}
