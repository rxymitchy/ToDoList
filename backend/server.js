const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/todo-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Todo Schema
const todoSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

// Routes
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  await newTodo.save();
  res.json(newTodo);
});

app.put('/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});


app.get('/', (req, res) => {
    res.send('Welcome to the To-Do List API');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
