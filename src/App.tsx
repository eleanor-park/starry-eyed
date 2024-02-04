import React from 'react';
import './App.scss';
import { SkyStore } from '../src/stores';
import { Sky } from '../src/views/sky/Sky';

const sky = new SkyStore();

/**
 * Highest-level App class that runs the program and renders the outermost 
 * FreeFormCanvas element.
 */
export class App extends React.Component {
    /**
     * Renders the outermost FreeFormCanvas that is the web program's base.
     * @returns Div element for the FreeFormCanvas
     */
    render() {
        return (
            <div className="App">
              <Sky store={sky} /> 
            </div>
        );
    }
}

export default App;