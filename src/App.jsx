import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleRefresh = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="button-group">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleRefresh}>Refresh</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
