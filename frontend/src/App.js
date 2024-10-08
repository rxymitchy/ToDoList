import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (!title) return;
    await axios.post('http://localhost:5000/todos', { title });
    setTitle('');
    fetchTodos();
  };

  const toggleComplete = async (id) => {
    await axios.put(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <TextField
        label="Add a new todo"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      <List>
        {todos.map(todo => (
          <ListItem key={todo._id}>
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleComplete(todo._id)}
            />
            <ListItemText primary={todo.title} />
            <Button onClick={() => deleteTodo(todo._id)} color="secondary">Delete</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
  
