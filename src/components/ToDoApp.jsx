import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const ToDoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container mx-auto p-8 border rounded-md shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">ToDoApp</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default ToDoApp;
