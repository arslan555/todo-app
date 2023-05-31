import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} secondaryAction={<IconButton edge="end" onClick={() => deleteTodo(todo.id)}><DeleteIcon /></IconButton>}>
          <ListItemText primary={todo.task} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;