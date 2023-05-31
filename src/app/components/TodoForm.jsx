import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Task" value={task} onChange={handleTaskChange} sx={{ width: '100%', mb: 2 }} />
      <Button variant="contained" type="submit" sx={{ mb: 2 }}>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
