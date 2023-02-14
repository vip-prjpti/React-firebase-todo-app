import { Button, Divider, List, ListItem, ListItemText, Modal } from "@mui/material";
import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";
import "firebase/compat/firestore";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const updateTodo = () => {
    db.collection("todos")
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });

    setInput(false);
  };

  const style = {
    width: '100%',
    margin: "0 auto",
    maxWidth: 900,
    bgcolor: '#EAFDFC',
    
  };
  const list = {
    margin: 1.5,
    textAlign:'center'
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1>Edit your Todo!</h1>
          <input placeholder={props.todo.todo} value={input} onChange={(e) => setInput(e.target.value)} />
          <Button variant="contained" onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List sx={style} >
          <Divider />
        <ListItem sx={list}>
          <ListItemText>{props.todo.todo}</ListItemText>
        </ListItem>
        <Button variant="outlined" onClick={(e) => setOpen(true)}>Edit Me</Button>
        <Button variant="outlined"
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        >
        Delete Me
        </Button>
          
      </List>
    </>
  );
}

export default Todo;
