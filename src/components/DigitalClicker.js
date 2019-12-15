// Code DigitalClicker Component Here
import React, { Component } from 'react';
export default class DigitalClicker extends Component{
    constructor(){
        super();
        this.state={
            timesClicked :0
        };
    }
    increaseTimesClicked = ()=>{
        this.setState(prevState=>({
            timesClicked: prevState.timesClicked + 1
        })
    )
    }
    render(){
        return(
            <button onClick={this.increaseTimesClicked}>{this.state.timesClicked}</button>
        );
    }
}
