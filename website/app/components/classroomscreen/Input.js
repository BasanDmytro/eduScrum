import React, { Component } from 'react';
import Button from './Button';

class Input extends Component {
    inputValue(){
        this.props.getInputName(this.refs.inputName.value);
        this.refs.inputName.value = "";
    }
    nameValue(e){
        if(e.keyCode === 13){
            this.inputValue();
        }
    }    
    render() {
        return (
            <div>
                <input type="text" name="person-name" ref="inputName" onKeyDown={this.nameValue.bind(this)} placeholder="Enter your name...."/>
                <Button clickEvent={this.inputValue.bind(this)} buttonName="Submit" />
            </div>
        );
    }
}

export default Input;