import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_MESSAGES_QUERY } from "../utils/graphql";

import Message from "./Message";

export default function Chat() {
  const classes = useStyles();
  const { data } = useQuery(GET_MESSAGES_QUERY);

  return (
    <div className={classes.root}>
      {data?.getMessages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
      <div className={classes.input}>
        <form>
          <input placeholder="Type a message" type="text"/>
          <button>
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0.65',
  },
  input: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '62px',
    borderTop: '1px solid lightgray',
    '& form': {
      flex: 1,
      display: 'flex',
    },
    '& input': {
      flex: 1,
      borderRadius: '30px',
      padding: '10px',
      border: 'none',
      outlineWidth: 0,
    }
  }
}))