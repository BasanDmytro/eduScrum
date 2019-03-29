import React, { Component } from 'react';
import '../../classroomscreen/App.css';
import Clock from "../../classroomscreen/Clock.js"
import Calender from "../../classroomscreen/Calender.js"
import StickyNote from "../../classroomscreen/StickyNote.js"
import TrafficLightBtn from "../../classroomscreen/TrafficLightBtn.js"
import StopWatch from "../../classroomscreen/StopWatch.js"
import RandomPickName from "../../classroomscreen/RandomPickName.js"
import Instruction from "../../classroomscreen/Instruction.js"
import Draggable, {DraggableCore} from 'react-draggable';


class Classroom extends Component {
  render() {
    return (
      <div className="All">
        <Draggable>
          <div><StopWatch /></div>
        </Draggable>
        <Draggable>
          <div><Clock /></div>
        </Draggable>
        <div><RandomPickName /></div>
        <Draggable>
          <div><Calender /></div>
        </Draggable>
        <DraggableCore>
          <StickyNote />
        </DraggableCore>
        <Draggable>
          <div><Instruction /></div>
        </Draggable>
        <Draggable>
          <div><TrafficLightBtn /></div>
        </Draggable>
      </div>
    );
  }
}

export default Classroom;
