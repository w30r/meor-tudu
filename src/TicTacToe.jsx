import React, { Component } from 'react';

class Petak extends Component {
    render() { 
        return ( 
            <button class="btn is-big" className="square">
                {/* {Todo} */}
            </button>
         );
    }
}

class Papan extends Component {

    renderPetak(i) {
        return<Petak />;
    }

    render() {
                
        const status = 'Next player = X';

        return ( 
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderPetak(0)}
                    {this.renderPetak(1)}
                    {this.renderPetak(2)}
                </div>
                <div className="board-row">
                    {this.renderPetak(3)}
                    {this.renderPetak(4)}
                    {this.renderPetak(5)}
                </div>
                <div className="board-row">
                    {this.renderPetak(6)}
                    {this.renderPetak(7)}
                    {this.renderPetak(8)}
                </div>
            </div>
         );
    }
}

class Permainan extends Component {
    render() { 
        return ( 
            <div className="the game">
                <div className="gameboard">
                    <Papan />
                </div>
                <div className = "game-info">
                    {/* <div>{status}</div> */}
                    {/* <ol>{todo}</ol> */}
                </div>
            </div>
         );
    }
}
 
class TicTacToe extends Component {
    state = { 

    }

    render() { 
        return ( 
            <div>
                <Permainan/>
            </div>
         );
    }
}
 
export default TicTacToe;
