import React, {Component} from 'react';
import Users from '../src/pages/Users';
import './App.scss';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className='App__header'>
                    <h2 className='App__title'>Users list</h2>
                </header>
                <Users/>
            </div>
        );
    }
}

export default App;