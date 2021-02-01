import React, { Component } from 'react';

class Mapping extends Component {
    state = { 
        erei: [1,2,3,4,5,6]
     }

    result = this.state.erei.map(function(item) {
        return item*2;
      });
    render() { 
        return (
            <div>
                <center>
                    <h1>Is this real map?  </h1> 
                    <h2>vvvvvvvvvvvvvvvv</h2>

                    {this.props.result}
                </center>
            </div>
        );
    }
}
 
export default Mapping 