import React from 'react';
import ToggleSwitch from './components/ToggleSwitch';


function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <header className="p-4">
        <ToggleSwitch />
      </header>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Quiz App</h1>
        {/* Add your quiz components here */}
        
      </main>
    </div>
  );
}

export default App;
