import { ListItemText, List, ListItem } from "@material-ui/core";
import React from "react";
import "./Todo.css";
function Todo(props) {
  return (
    <List className="todo__List">
      <ListItem>
        <ListItemText primary={props.todo} secondary="deadline"></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;
