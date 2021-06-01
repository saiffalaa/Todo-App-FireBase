import { ListItemText, List, ListItem, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";
import db from "./firbase";
function Todo(props) {
  const [open, setOpen] = useState(false);
  return (
    <List className="todo__List">
      <ListItem>
        <ListItemText
          primary={props.todo.text}
          secondary="deadline"
        ></ListItemText>
      </ListItem>
      <Button
        variant="contained"
        color="secondary"
        onClick={(event) => {
          db.collection("todos").doc(props.todo.id).delete();
        }}
      >
        Delete
      </Button>
      <Button variant="contained" color="danger" onClick={() => setOpen(!open)}>
        Edit
      </Button>
      {open ? (
        <div>
          <textarea
            placeholder={props.todo.text}
            id={props.todo.id}
            rows="4"
            cols="100"
          ></textarea>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const value = document.getElementById(props.todo.id).value;
              db.collection("todos").doc(props.todo.id).set(
                {
                  text: value,
                },
                { merge: true }
              );
              setOpen(false);
            }}
          >
            Change
          </Button>
        </div>
      ) : (
        <></>
      )}
    </List>
  );
}

export default Todo;
