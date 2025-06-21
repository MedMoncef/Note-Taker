import React from 'react';
import './App.css';
import Notes from './components/Notes';

function App() {
    return (
        <div className="app">
            <h1>Note Taker</h1>
            <Notes />
        </div>
    );
}

export default App;