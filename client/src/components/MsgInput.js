import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { CREATE_MSG_MUTATION, GET_MESSAGES_QUERY } from "../utils/graphql";

export default function MsgInput() {
  const [msg, setMsg] = useState({ content: "", user: "" });
  const classes = useStyles();

  const [newMsgMutation] = useMutation(CREATE_MSG_MUTATION, {
    variables: msg,
    update(cache, result) {
      const data = cache.readQuery({
        query: GET_MESSAGES_QUERY,
      })
      cache.writeQuery({
        query: GET_MESSAGES_QUERY,
        data: {
          getMessages: [...data, result.data.newMessage]
        }
      })
    }
  })

  const handleSubmit = () => {
    console.log(msg);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setMsg({
      ...msg,
      [name]: value,
    });
  };

  return (
    <div className={classes.input}>
      <form onSubmit={handleSubmit}>
        <input
          name="content"
          value={msg.Content}
          onChange={handleChange}
          placeholder="Type a message"
          type="text"
        />
        <Button color="primary">Send a message</Button>
      </form>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "62px",
    borderTop: "1px solid lightgray",
    "& form": {
      flex: 1,
      display: "flex",
    },
    "& input": {
      flex: 1,
      borderRadius: "30px",
      padding: "10px",
      border: "none",
      outlineWidth: 0,
    },
  },
}));
