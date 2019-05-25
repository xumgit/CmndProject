import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SquareCopy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  clickButtonEvent = function(e) {
    let clickEvent = (e) => {
      this.setState({
        value: this.props.value + "A"
      });
      console.log("tagName:" + e.target.tagName + ",textContent:" + e.target.textContent);
      console.log("className:" + e.target.className + ",type:" + e.target.type);
    }
    return clickEvent;
  }

  render() {
    return (
      <button
        className="square"
        onClick={()=>this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  renderSquare(i, line, row) {
    return <Square
              value={this.props.squares[i]}
              onClick={()=>this.props.onClick(i)}
           />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, 1, 1)}
          {this.renderSquare(1, 1, 2)}
          {this.renderSquare(2, 1, 3)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, 2, 1)}
          {this.renderSquare(4, 2, 2)}
          {this.renderSquare(5, 2, 3)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, 3, 1)}
          {this.renderSquare(7, 3, 2)}
          {this.renderSquare(8, 3, 3)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        historyRowLine: [{
          rowLine: [0,0]
        }],
        stepNumber: 0,
        xIsNext: true,
      };
  }

  jumpTo(step) {
    console.log("step:" + step);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const historyRowLine = this.state.historyRowLine.slice(0, this.state.stepNumber + 1);

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      historyRowLine: historyRowLine.concat([{
        rowLine: getLineRowNumber(i)
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const historyRowLine = this.state.historyRowLine;
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const currentRowLine = historyRowLine[move];
      const desc = move ? "Go to move #" + move : "Go to game #0";
      return (
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc} &nbsp;&nbsp;
          (line, row)=>({currentRowLine.rowLine[0]},{currentRowLine.rowLine[1]})</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares = {current.squares}
            onClick = {(i)=>this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function getLineRowNumber(i) {
  let lineRow = [0,0];
  if (0 <= i && i <= 8) {
      const lineRowArr = [
      [1,1],[1,2],[1,3],
      [2,1],[2,2],[2,3],
      [3,1],[3,2],[3,3]
    ];
    lineRow = lineRowArr[i];
  }
  return lineRow;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
