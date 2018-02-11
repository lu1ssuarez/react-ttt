import React, {Component} from 'react';

import Square from './Square';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(index) {
        const squares = this.state.squares.slice();

        squares[index] = 'X';

        this.setState({squares});
    }

    renderSquare(index) {
        return (<Square 
                    value={this.state.squares[index]}
                    onClick={() => this.handleClick(index)}
                />);
    }

    render() {
        const status = "Next player: X";

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