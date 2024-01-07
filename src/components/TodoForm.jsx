import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            addTodo(inputText);
            setInputText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 text-left">
            <label htmlFor="todoInput" className="block text-sm font-medium text-gray-700">
                New Todo:
            </label>
            <input
                type="text"
                id="todoInput"
                placeholder="Enter new todo"
                className="w-full rounded-md p-2 border text-black mt-1"
                value={inputText}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="w-full mt-2 py-2 px-2 bg-blue-500 rounded-md hover:bg-blue-700 text-white"
            >
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;
