import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import { GET_MESSAGES_QUERY, MSG_SUBSCRIPTION } from "../utils/graphql";

import MsgInputSub from './MsgInputSub';

import Message from "./Message";
import MsgInput from "./MsgInput";

export default function Chat() {
  const classes = useStyles();
  const { subscribeToMore, ...result } = useQuery(GET_MESSAGES_QUERY);
  
  const getMore = () => subscribeToMore({
      document: MSG_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if(!subscriptionData.data) return prev;
        const messages = [...prev.getMessages]
        const newFeedItem = subscriptionData.data.newMessage
        return Object.assign({}, prev, {
          getMessages: [...messages, newFeedItem]
        })
      }
    });
  

  return (
    <div className={classes.root}>
      {result?.data?.getMessages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
      <MsgInputSub getMore={getMore} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "0.65",
  },
}));
