import React from "react";
import { Container } from '@material-ui/core';
import { useQuery } from "@apollo/client";
import { GET_MESSAGES_QUERY } from "../utils/graphql";

import Message from "./Message";

export default function Chat() {
  const { data } = useQuery(GET_MESSAGES_QUERY);

  return (
    <Container>
      {data?.getMessages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </Container>
  );
}
