import { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";
// import firebase from "firebase/compat";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo
          }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome to Todo App</h1>
      <form>
        <FormControl>
          <InputLabel>Enter your Todo...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          onClick={addTodo}
          type="submit"
          variant="contained"
        >
          Add Todo
        </Button>
      </form>
      
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      
    </div>
  );
}

export default App;
