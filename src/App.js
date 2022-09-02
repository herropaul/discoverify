import React from 'react';
import { useEffect } from 'react';
import { getAuthToken } from './api/artists/artists';
import './App.css';

function App() {

  useEffect(() => {
    getAuthToken();
  }, [])

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
