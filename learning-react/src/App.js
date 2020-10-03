import React, { useState } from 'react';
import Counter from './Counter'
import './App.css';

function App() {
  const [show, setShow] = useState(true)

  const showToggle = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      { show && <Counter />}
      <button onClick={showToggle}>Toggle</button>
    </div>
  );
}

export default App;
