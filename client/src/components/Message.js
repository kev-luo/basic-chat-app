import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export default function Message({message}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.messageBody}>
        {message.content}
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    paddingBottom: "1em"
  },
  messageBody: {
    background: "#58bf56",
    color: "white",
    padding: "1em",
    borderRadius: "1em",
    maxWidth: "60%",
  }
}))