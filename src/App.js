import "./App.css";
//firebase init
//firebase deploy
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firbase";
import firebase from "firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().text));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().text }))
        );
      });
  }, []);
  return (
    <div className="App">
      <h1>Todo-App</h1>
      <form>
        <FormControl>
          <Input
            placeholder="Enter To-do task"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={(e) => {
              e.preventDefault();
              // setTodos([...todos, input]);
              db.collection("todos").add({
                text: input,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setInput("");
            }}
          >
            add TODO
          </Button>
        </FormControl>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

export default App;
