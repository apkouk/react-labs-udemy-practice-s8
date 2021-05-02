import React from "react";

import classes from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button text="Okay" onClick={props.onConfirm}></Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
