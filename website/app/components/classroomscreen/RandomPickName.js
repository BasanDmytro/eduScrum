import React, { Component } from 'react';
import Input from './Input';
import ShowWinner from './ShowWinner';
import NameList from './NameList';
import Button from './Button';


class RandomPickName extends Component {
  constructor() {
    super();
    this.state = {
      winnerName: '',
      names: []
    }

    this.getInputName = this.getInputName.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.reset = this.reset.bind(this);

  }

  getWinner() {
    this.setState({
      winnerName: this.state.names[Math.floor(Math.random() * this.state.names.length)]
    })
  }

  getInputName(name) {
    this.state.names.push(name);
    const names = this.state.names;
    this.setState({
      names
    })
  }
  
  reset(){
    this.setState({
      names : [],
      winnerName: ''
    })
  }

  nameList() {
    return this.state.names.map((data, index) => {
      return <NameList key={index} name={data} />
    })
  }

  inputDiv(){
    return (
      <div>
        <Input getInputName={this.getInputName} />
        <div>
          <Button clickEvent={this.getWinner} buttonName="winner" />
          <Button clickEvent={this.reset} buttonName="reset" /> 
        </div>
      </div>
    );
  }
  showWinner(){
       return <ShowWinner winnerName={this.state.winnerName} />;
  }

  render() {
    return (
      <div className="winner-app">
        {this.inputDiv()}
        {this.nameList()}
        {this.showWinner()}
      </div>
    );
  }
}

export default RandomPickName;