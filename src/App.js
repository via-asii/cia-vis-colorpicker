import React, { Component } from 'react';
import { scaleOrdinal, schemeCategory10, arc, pie  } from 'd3';
import { perc2color } from './customScales';
import './App.css';


class App extends Component {
  render() {
    const color = scaleOrdinal(schemeCategory10);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Vis Color Picker
          </p>
        </header>
        <main>
          <div>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => <div style={{height: '50px', width: '50px', backgroundColor: color(i)}}>{color(i)}</div>)}
          </div>
          <div>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => <div style={{height: '50px', width: '50px', backgroundColor: perc2color(i)}}>{perc2color(i)}</div>)}
          </div>    
        </main>
      </div>
    );
  }
}

export default App;
