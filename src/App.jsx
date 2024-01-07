import { useState } from 'react';
import './index.css';
import ToDoApp from './components/ToDoApp';

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-56">
      <ToDoApp />
    </div>
  );
}

export default App;
