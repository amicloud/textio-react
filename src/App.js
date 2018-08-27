import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import ModulesContainer from './components/ModulesContainer.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p className="app-header-title">Text.io</p>
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <br/>
                <ModulesContainer className='container module conversations-module'/>
            </div>
        );
    }
}

export default App;
