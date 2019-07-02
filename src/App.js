import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthorContainer from './components/authorComponent/author-container';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AuthorContainer />
            </header>
        </div>
    );
}

export default App;
