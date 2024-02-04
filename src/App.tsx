import React from 'react';
import './App.scss';
import { SkyStore } from '../src/stores';
import { Sky } from './views/Sky/Sky';

const sky = new SkyStore();

/**
 * Highest-level App class that runs the program and renders the outermost 
 * Sky element
 */
export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Sky store={sky} />
            </div>
        );
    }
}

export default App;