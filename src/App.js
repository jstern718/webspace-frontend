"Use strict;"

import React from 'react';
import './App.css';
import WebspaceApi from './api.js';
import ServerInfo from './ServerInfo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        <ServerInfo />
      </body>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    </div>
  );
}

export default App;
