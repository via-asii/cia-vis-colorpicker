import React, { Component } from 'react';
import { scaleOrdinal, scaleLinear, schemeCategory10, scaleSequential, interpolateInferno, interpolateViridis, interpolateHcl } from 'd3';
import { perc2color } from './customScales';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nColors: 6,
      diyScale0: "#FD7F0B",
      diyScale1: "#18A3FF"
    };
  }
  copyToClipboard(str){
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  render() {
    const color = scaleOrdinal(schemeCategory10);

    const sequentialcolorScale = scaleSequential(interpolateInferno)
    .domain([1, this.state.nColors])

    const viridiscolorScale = scaleSequential(interpolateViridis)
    .domain([1, this.state.nColors])

    const diyColor = scaleLinear().domain([1,this.state.nColors])
      .interpolate(interpolateHcl)
      .range([this.state.diyScale0, this.state.diyScale1]);

    const iterArray = [];
    for (var i = 1; i <= this.state.nColors; i++) {
      iterArray.push(i)
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Vis Color Picker
          </p>
        </header>
        <main>
          <div>
            <input min="1" type="number" value={this.state.nColors} onInput={(evt) => this.setState({nColors: evt.target.value})}/>
          </div>
          <div className="flex scale">
            {iterArray.map(i => <div style={{height: '70px', width: '100px', backgroundColor: color(i)}}>
              <p onClick={()=>{this.copyToClipboard(color(i))}} >{color(i)}</p>
            </div>)}
          </div>
          <div className="flex scale">
            {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: sequentialcolorScale(i)}}>
              <p onClick={()=>{this.copyToClipboard(sequentialcolorScale(i))}} >{sequentialcolorScale(i)}</p>
            </div>)}
          </div> 
          <div className="flex scale">
            {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: perc2color(100-(100/iterArray.length)*i)}}>
              <p onClick={()=>{this.copyToClipboard(perc2color(i))}} >{perc2color(i)}</p>
            </div>)}
          </div>    
          <div className="flex scale">
            {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: viridiscolorScale(i)}}>
              <p onClick={()=>{this.copyToClipboard(viridiscolorScale(i))}} >{viridiscolorScale(i)}</p>
            </div>)}
          </div>
          <div className="flex scale">
            <h3>Pick your own colors:</h3>
            <div className="flex">
              <input type="color" id="html5colorpicker" onChange={(e)=> {this.setState({diyScale0: e.target.value}); } } value={this.state.diyScale0} />
                <div className="flex">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: diyColor(i)}}>
                    <p onClick={()=>{this.copyToClipboard(diyColor(i))}} >{diyColor(i)}</p>
                  </div>)}
                </div>
              <input type="color" id="html5colorpicker" onChange={(e)=> {this.setState({diyScale1: e.target.value}); } } value={this.state.diyScale1} />
            </div>
          </div>     

        </main>
      </div>
    );
  }
}

export default App;
