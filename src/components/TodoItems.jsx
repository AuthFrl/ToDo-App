import React from 'react';

const TodoItems = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="flex items-center justify-between bg-white rounded-md p-2 shadow-md">
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 rounded"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />

                <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                    {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
                    Delete
                </button>
            </label>
        </li>
    );
}

export default TodoItems;
