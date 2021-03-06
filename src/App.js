import React, { Component } from 'react';
import { 
  scaleOrdinal, 
  scaleLinear, 
  schemeCategory10, 
  scaleSequential, 
  interpolateInferno, 
  interpolateViridis, 
  interpolateHcl,
  interpolateBrBG,
  interpolatePRGn,
  interpolatePiYG,
  interpolatePuOr,
  interpolateSpectral
} from 'd3';
import {color, hex} from 'd3-color'
import { perc2color, cat12, cat20, catDivide } from './customScales';
import './App.css';
import toastr from 'toastr';
import './Toastr.css';


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
    toastr.success('Copied to clipboard', "" ,{timeOut: 1500})
  }
  render() {
    const cat10Scale = scaleOrdinal(schemeCategory10);

    const infernoScale = scaleSequential(interpolateInferno)
      .domain([1, this.state.nColors])
    
    const brbgScale = scaleSequential(interpolateBrBG)
      .domain([1, this.state.nColors])

    const prgnScale = scaleSequential(interpolatePRGn)
      .domain([1, this.state.nColors])

    const piygScale = scaleSequential(interpolatePiYG)
      .domain([1, this.state.nColors])

    const puorScale = scaleSequential(interpolatePuOr)
      .domain([1, this.state.nColors])

    const viridiscolorScale = scaleSequential(interpolateViridis)
      .domain([1, this.state.nColors])

    const spectralScale = scaleSequential(interpolateSpectral)
      .domain([1, this.state.nColors])
      

    const diyColor = scaleLinear().domain([1,this.state.nColors])
      .interpolate(interpolateHcl)
      .range([this.state.diyScale0, this.state.diyScale1]);

    const catDiv = catDivide(this.state.nColors)

    const iterArray = [];
    for (var i = 1; i <= this.state.nColors; i++) {
      iterArray.push(i)
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            CIA Vis Color Generator
          </p>
        </header>
        <main className="flex f-center">
          <div>
            
          
            <div>
              <h3>Pick Amount of Colors</h3>
              <input min="1" type="number" value={this.state.nColors} onInput={(evt) => this.setState({nColors: evt.target.value})}/>
            </div>
            <div>
              <h3>Sequential</h3>
              <div>

                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: perc2color(100-(100/iterArray.length)*i)}}>
                    <p onClick={()=>{this.copyToClipboard(perc2color(100-(100/iterArray.length)*i))}} >{perc2color(100-(100/iterArray.length)*i)}</p>
                  </div>)}
                </div> 

                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: viridiscolorScale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(viridiscolorScale(i))}} >{viridiscolorScale(i)}</p>
                  </div>)}
                </div>

                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: infernoScale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(infernoScale(i))}} >{infernoScale(i)}</p>
                  </div>)}
                </div> 


                <div className="">
                  <div className="scale f-center a-center flex">
                    <input type="color" id="html5colorpicker" onChange={(e)=> {this.setState({diyScale0: e.target.value}); } } value={this.state.diyScale0} />
                    <p>Pick your own colors:</p>
                    <input type="color" id="html5colorpicker" onChange={(e)=> {this.setState({diyScale1: e.target.value}); } } value={this.state.diyScale1} />
                  </div>
                  <div className="flex scale">
                    {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: diyColor(i)}}>
                      <p onClick={()=>{this.copyToClipboard(color(diyColor(i)).hex())}} >{color(diyColor(i)).hex()}</p>
                    </div>)}
                  </div>
                </div>  
                
              </div>
            </div>
            <div>
              <h3>Diverging</h3>
              <div>   
                
                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: brbgScale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(color(brbgScale(i)).hex())}} >{color(brbgScale(i)).hex()}</p>
                  </div>)}
                </div>

                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: prgnScale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(color(prgnScale(i)).hex())}} >{color(prgnScale(i)).hex()}</p>
                  </div>)}
                </div>

                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: piygScale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(color(piygScale(i)).hex())}} >{color(piygScale(i)).hex()}</p>
                  </div>)}
                </div>

                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: puorScale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(color(puorScale(i)).hex())}} >{color(puorScale(i)).hex()}</p>
                  </div>)}
                </div>

                <div className="flex scale">
                  {iterArray.map((i) => <div style={{height: '70px', width: '100px', backgroundColor: spectralScale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(color(spectralScale(i)).hex())}} >{color(spectralScale(i)).hex()}</p>
                  </div>)}
                </div>

              </div>
            </div>
            <div>
              <h3>Categorical</h3>
              <div>
                <p>Category 10</p>
                <div className="flex scale">
                  {iterArray.map(i => <div style={{height: '70px', width: '100px', backgroundColor: cat10Scale(i)}}>
                    <p onClick={()=>{this.copyToClipboard(cat10Scale(i))}} >{cat10Scale(i)}</p>
                  </div>)}
                </div>
              
                <p>Category 12</p>
                <div className="flex scale">
                  {iterArray.map(i => <div style={{height: '70px', width: '100px', backgroundColor: cat12(i)}}>
                    <p onClick={()=>{this.copyToClipboard(cat12(i))}} >{cat12(i)}</p>
                  </div>)}
                </div>
                
                <p>Category 20</p>
                <div className="flex scale">
                  {iterArray.map(i => <div style={{height: '70px', width: '100px', backgroundColor: cat20(i)}}>
                    <p onClick={()=>{this.copyToClipboard(cat20(i))}} >{cat20(i)}</p>
                  </div>)}
                </div>

                <p>Category Split</p>
                <div className="flex scale">
                  {iterArray.map(i => <div style={{height: '70px', width: '100px', backgroundColor: catDiv(i)}}>
                    <p onClick={()=>{this.copyToClipboard(color(catDiv(i)).hex())}} >{color(catDiv(i)).hex()}</p>
                  </div>)}
                </div>

              </div>
            </div>



          </div>
   

        </main>
      </div>
    );
  }
}

export default App;
