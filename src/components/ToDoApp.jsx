import React from 'react';
import TodoForm from './TodoForm';

export default function ToDoApp(){
    return(
        <div class="max-w-md mx-auto p-8 border rounded-md shadow-md text-center">
          <h1 class="text-2xl font-bold mb-4">ToDoApp</h1>
          <TodoForm />
        </div>
    )
}