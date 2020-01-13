import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css"

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: "one",
      dice2: "one"
    };
    this.roll = this.roll.bind(this);
  }
  roll(){
    //pick two new rolls
    let newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    let newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //set state with new rolls
    this.setState({
        dice1: newDice1,
        dice2: newDice2
    });
  }
  render() {
    return (
      <div className="RollDice">
        <Dice face={this.state.dice1} />
        <Dice face={this.state.dice2} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
