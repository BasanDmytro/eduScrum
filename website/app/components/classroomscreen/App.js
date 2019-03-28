import React, { Component } from 'react';
import './App.css';
import Clock from "./Clock.js"
import Calender from "./Calender.js"
import StickyNote from "./StickyNote.js"
import TrafficLightBtn from "./TrafficLightBtn.js"
import StopWatch from "./StopWatch.js"
import RandomPickName from "./RandomPickName.js"
import Instruction from "./Instruction.js"
import Draggable, {DraggableCore} from 'react-draggable';
  

class App extends Component {
  render() {
    return (
      <div className="All">        
        <Draggable>
          <div><StopWatch></StopWatch></div>
        </Draggable>
        <Draggable>
          <div><Clock></Clock></div>
        </Draggable>
          <div><RandomPickName></RandomPickName></div>
        <Draggable>
          <div><Calender></Calender></div>
        </Draggable>
        <Draggable>
          <div><StickyNote></StickyNote></div>
        </Draggable>
        <Draggable>
          <div><Instruction></Instruction></div>
        </Draggable>
        <Draggable>
          <div><TrafficLightBtn></TrafficLightBtn></div>
        </Draggable>
      </div>
    );
  }
}

export default App;
