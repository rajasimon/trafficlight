import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor() {
    super()
    
    this.state = {
      changeInterval: 2000,
      changeWhite: 'lightWhite',
      changeRed: 'lightWhite',
      changeYellow: 'lightWhite',
      changeGreen: 'lightWhite'
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleStop =  this.handleStop.bind(this)
  }

  handleStart() {
    this.setState({changeRed: 'lightRed'})

    setInterval(() => {
      this.setState({changeYellow: 'lightYellow'})
      this.setState({changeRed: 'lightWhite'})

        setInterval(() => {
          this.setState({changeGreen: 'lightGreen'})
          this.setState({changeRed: 'lightWhite'})
          this.setState({changeYellow: 'lightWhite'})
        }, this.state.changeInterval);

    }, this.state.changeInterval);

  }

  handleStop() {
    this.setState({
      changeRed: 'lightWhite',
      changeYellow: 'lightWhite',
      changeGreen: 'lightWhite'
    })

    clearInterval(this.state.changeInterval)
  }


  render() {
    return (
      <div className="App">
        <div className={this.state.changeRed + " lightStyle"}></div>
        <div className={this.state.changeYellow + " lightStyle"}></div>
        <div className={this.state.changeGreen + " lightStyle"}></div>


        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
      </div>
    );
  }
}

export default App;
