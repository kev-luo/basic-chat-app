import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import { GET_MESSAGES_QUERY } from "../utils/graphql";

import Message from "./Message";
import MsgInput from "./MsgInput";

export default function Chat() {
  const classes = useStyles();
  const { data } = useQuery(GET_MESSAGES_QUERY);

  return (
    <div className={classes.root}>
      {data?.getMessages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
      <MsgInput />
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
