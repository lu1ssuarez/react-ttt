import React, {Component} from 'react';

import Square from './Square';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null
        }
    }

    handleClick(index) {
        if (!this.state.squares[index] && !this.state.winner) {
            const squares = this.state.squares.slice();

            squares[index] = (this.state.xIsNext ? 'X' : 'O');

            this.setState({
                squares,
                xIsNext: !this.state.xIsNext
            });

            this.calculateWinner(squares);
        }
    }

    renderSquare(index) {
        return (<Square 
                    value={this.state.squares[index]}
                    onClick={() => this.handleClick(index)}
                />);
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        lines.forEach((line, index) => {
            const [a, b, c] = line;

            if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
                this.setState({winner: squares[a]});
            }
        });
    }

    render() {
        let status; 

        if (this.state.winner) {
            status = `Winner: ${this.state.winner}`;
        } else {
            status = `Next player: ${(this.state.xIsNext ? 'X' : 'O')}`;
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;