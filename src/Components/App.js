import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';
import StartButton from './StartButton';
import StopButton from './StopButton';
import ResetButton from './ResetButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msElapsed: 0,
      lastClearedIncrementer: null,
      rotate: 90
    };

    this.incrementer = null;
    this.rotator = null;
  } 
  
  handleStart = () => {
    this.incrementer = setInterval( () => {
      this.setState({
        msElapsed: this.state.msElapsed + 1000
      });
    }, 1000);

    this.rotator = setInterval ( () => {
      this.setState({
        rotate: ((this.state.msElapsed / 60000) * 360) + 95
      })
    }, 1000);
  }

  handleStop = () => {
    clearInterval(this.incrementer);
    clearInterval(this.rotator);
    this.setState({
      lastClearedIncrementer: this.incrementer 
    });
  }

  handleReset = () => {
    clearInterval(this.incrementer);
    clearInterval(this.rotator);
    this.setState({
      msElapsed: 0,
      lastClearedIncrementer: null,
      rotate: 90 
    });
  }

  render() {

    return (
      <div className='stopwatch-container'>
        <TimerDisplay 
          ms={this.state.msElapsed}
          startTimer={this.handleStart}
          stopTimer={this.handleStop}
          resetTimer={this.handleReset}
          rotate={this.state.rotate}
        />
        <div className='button-container'>
          <StartButton
            ms={this.state.mssElapsed}
            startTimer={this.handleStart}
          />
          <StopButton 
            ms={this.state.msElapsed}
            stopTimer={this.handleStop}
          />
          <ResetButton 
            ms={this.state.msElapsed}
            resetTimer={this.handleReset}
          />
        </div>
      </div>
     
    );
  }
}

export default App;
