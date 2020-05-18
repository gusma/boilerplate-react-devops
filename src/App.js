import React from 'react';
import picklerick from './picklerick.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picklerick} className="App-logo" alt="logo" />
        <p>
          Hi Morty! I'm Pickle Rick!
        </p>
      </header>
    </div>
  );
}

export default App;
