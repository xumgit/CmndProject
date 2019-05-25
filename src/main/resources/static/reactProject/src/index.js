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
  renderSquare(i) {
    return <Square
              key={i}
              value={this.props.squares[i]}
              onClick={()=>this.props.onClick(i)}
           />;
  }

  render() {
    const numbers = [0,3,6];
    const html = numbers.map((number)=>{
      return (
        <div className="board-row" key={number}>
          {
            [number, ++number, ++number].map((n)=>{
              return (
                this.renderSquare(n)
              )
            })
          }
        </div>
      )
    });
    return (
      <div>
        {html}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
      super(props);
      const maxStep = 9;
      const ascSort = "asc";
      const descSort = "desc";
      this.state = {
        history: [{
          squares: Array(maxStep).fill(null)
        }],
        historyRowLine: [{
          rowLine: [0,0]
        }],
        maxStep: maxStep,
        stepNumber: 0,
        xIsNext: true,
        currentClick: 0,
        ascSort: ascSort,
        descSort: descSort,
        sort: "asc"
      };
  }

  jumpTo(step) {
    let stepNumber = step;
    if ("asc" !== this.state.sort) {
      stepNumber = this.state.history.length - step - 1;
    }
    this.setState({
      stepNumber: stepNumber,
      xIsNext: (step % 2) === 0,
      currentClick: step
    });
  }

  sort(sortType) {
    console.log("ascHistory");
    if ("asc" === sortType && "asc" !== this.state.sort) {
      this.setState({
        history: this.state.history.reverse(),
        historyRowLine: this.state.historyRowLine.reverse(),
        stepNumber: this.state.history.length - this.state.stepNumber - 1,
        sort: "asc"
      });
    } else if ("desc" === sortType && "desc" !== this.state.sort) {
      this.setState({
        history: this.state.history.reverse(),
        historyRowLine: this.state.historyRowLine.reverse(),
        stepNumber: this.state.history.length - this.state.stepNumber - 1,
        sort: "desc"
      });
    }
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
      currentClick: this.state.currentClick + 1
    });
    //changeColor(i);
  }

  render() {
    let isAsc = true;
    if ("asc" !== this.state.sort) {
      isAsc = false;
    }
    const history = this.state.history;
    const historyLen = history.length;
    const current = history[this.state.stepNumber];
    const historyRowLine = this.state.historyRowLine;
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const currentRowLine = historyRowLine[move];
      let currentMove = move;
      if (!isAsc) {
        currentMove = historyLen - currentMove - 1;
      }
      const desc = currentMove ? "Go to move #" + currentMove : "Go to game #0";
      return (
        <li key={currentMove}>
          <button
            className = {`${currentMove === this.state.currentClick ? "hightDisplay" : null}`}
            onClick = {()=>this.jumpTo(currentMove)}
          >
            {desc} &nbsp;&nbsp;
            (line, row)=>({currentRowLine.rowLine[0]},{currentRowLine.rowLine[1]})
          </button>
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
          <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={()=>this.sort(this.state.ascSort)}>Asc history</button>
              &nbsp;
              <button onClick={()=>this.sort(this.state.descSort)}>Desc history</button>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function changeColor(move) {

  let historyButtonDom = document.getElementsByClassName("hightDisplay");
  let len = historyButtonDom.length;
  for (let i = 0; i < len; i++) {
    //if (move == i && historyButtonDom[i].hasAttribute("className")) {
      //historyButtonDom[i].setAttribute("className", "hightDisplay");
    //} else {
      //historyButtonDom[i].setAttribute();
    //}
  }
  console.log("historyButtonDom:" + historyButtonDom.length);
}

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
