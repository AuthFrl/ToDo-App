import { useState } from 'react';
import './index.css';
import ToDoApp from './components/ToDoApp';

function App() {
  // If you need  to manage state or handle global logic, you can use useState or other hooks here.

  return (
    <div className="min-h-screen pt-56 text-white bg-zinc-900">
      <ToDoApp />
    </div> 
  );
}

export default App;
