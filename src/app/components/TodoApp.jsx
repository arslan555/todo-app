import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoLayout from './TodoLayout';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = {
      id: uuidv4(),
      task: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <TodoLayout>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </TodoLayout>
  );
};

export default TodoApp;