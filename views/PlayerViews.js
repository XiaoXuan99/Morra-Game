import React from 'react';

const exports = {};

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        Select your choice: 
        <br/><br/>
        <div className='buttonContainer'>
          <button disabled={!playable} onClick={() => parent.playHand(0)}>0</button>
          <button disabled={!playable} onClick={() => parent.playHand(1)}>1</button>
          <button disabled={!playable} onClick={() => parent.playHand(2)}>2</button>
          <button disabled={!playable} onClick={() => parent.playHand(3)}>3</button>
          <button disabled={!playable} onClick={() => parent.playHand(4)}>4</button>
          <button disabled={!playable} onClick={() => parent.playHand(5)}>5</button>
        </div>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br /> 
        Select your guess: 
        <br/><br/>
        <div className='buttonContainer'>
          <button disabled={!playable} onClick={() => parent.playGuess(0)}>0</button>
          <button disabled={!playable} onClick={() => parent.playGuess(1)}>1</button>
          <button disabled={!playable} onClick={() => parent.playGuess(2)}>2</button>
          <button disabled={!playable} onClick={() => parent.playGuess(3)}>3</button>
          <button disabled={!playable} onClick={() => parent.playGuess(4)}>4</button>
          <button disabled={!playable} onClick={() => parent.playGuess(5)}>5</button>
          <button disabled={!playable} onClick={() => parent.playGuess(6)}>6</button>
          <button disabled={!playable} onClick={() => parent.playGuess(7)}>7</button>
          <button disabled={!playable} onClick={() => parent.playGuess(8)}>8</button>
          <button disabled={!playable} onClick={() => parent.playGuess(9)}>9</button>
          <button disabled={!playable} onClick={() => parent.playGuess(10)}>10</button>
        </div>
      </div>
    );
  }
}

exports.Process = class extends React.Component {
  render() {
    return (
      <div>
        Processing...
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;