import React, { Component } from "react";
import ReactDOM from "react-dom";
import silence from "./asserts/silence.png";
import chuchoter from "./asserts/chuchoter.png";
import voisin from "./asserts/demander_voisin.png";
import groupe from "./asserts/groupe.png";
import "./Instruction.css";



class Instruction extends Component {

  constructor(props) {
    super(props);
    this.state = {image: silence};
    this.afficheImage = this.afficheImage.bind(this);
  }

  afficheImage(e){
    const images = {
      "a" : silence,
      "b" : chuchoter,
      "c" : voisin,
      "d" : groupe
    }
  
    this.setState({image: images[e]});
  }
  
  render() {
    return  <div><button class="button"><img  class ="image" src={silence} alt="silence.png" onClick={() => this.afficheImage("a")} /></button>
    <button class="button" ><img  class ="image" src={chuchoter} alt="chuchoter.png" onClick={() =>this.afficheImage("b")} /></button>
    <button class="button"><img  class ="image" src={voisin} alt="voisin.png" onClick={() =>this.afficheImage("c")} /></button>
    <button class="button"><img  class ="image" src={groupe} alt="groupe.png" onClick={() =>this.afficheImage("d")} /></button>
    <img id="grandeImage" src={this.state.image} alt="groupe.png"  /></div>

  }
}


export default Instruction;
