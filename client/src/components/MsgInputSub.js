import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useMutation } from "@apollo/client";

import { users } from '../utils/randomUser';
import { CREATE_MSG_MUTATION } from "../utils/graphql";

export default function MsgInputSub({getMore}) {
  const [msg, setMsg] = useState({ user: "", content: "" });
  const classes = useStyles();

  useEffect(() => {
    getMore();

    return () => getMore()
  }, [])

  const [newMsgMutation] = useMutation(CREATE_MSG_MUTATION, {
    variables: msg,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    newMsgMutation();
    setMsg({
      content:"",
      user: ""
    })
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setMsg({
      ...msg,
      [name]: value,
      user: users[Math.floor(Math.random() * 4)]
    });
  };

  return (
    <div className={classes.input}>
      <form onSubmit={handleSubmit}>
        <input
          name="content"
          value={msg.content}
          onChange={handleChange}
          placeholder="Type a message"
          type="text"
        />
        <Button type="submit" color="primary">Send a message</Button>
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
