import { ListItemText, List, ListItem, Button } from "@material-ui/core";
import React from "react";
import "./Todo.css";
import db from "./firbase";
function Todo(props) {
  return (
    <List className="todo__List">
      <ListItem>
        <ListItemText
          primary={props.todo.text}
          secondary="deadline"
        ></ListItemText>
      </ListItem>
      <Button
        onClick={(event) => {
          db.collection("todos").doc(props.todo.id).delete();
        }}
      >
        Delete
      </Button>
    </List>
  );
}

export default Todo;
