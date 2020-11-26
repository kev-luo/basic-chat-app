import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Message({ message }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.username}>
        {message.user.slice(0, 2).toUpperCase()}
      </div>
      <div className={classes.messageBody}>{message.content}</div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingBottom: "1em",
  },
  username: {
    height: '50px',
    lineHeight: '50px',
    width: '50px',
    marginRight: "0.5rem",
    border: "2px solid #e5e6ea",
    borderRadius: 50,
    textAlign: "center",
    fontSize: "18pt",
  },
  messageBody: {
    background: "#58bf56",
    color: "white",
    padding: "1em",
    borderRadius: "1em",
    maxWidth: "60%",
  },
}));
