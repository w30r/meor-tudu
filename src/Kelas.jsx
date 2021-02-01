import React, { Component } from 'react';

class Kelas extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            FormFive: ['S','T','A','R'],
            TopClass: "R",
            username: ''
        }
    }       

    sike = () => {
        this.setState({TopClass: 'A'})
    }

    changeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("You submitted " + this.state.username);

    }

    render() { 
        return ( 
            <div>
                <center>
                <h1>
                    Hello {this.state.username}!
                </h1>
                <h1>
                    <center>
                        KELAS PALING PANDAI 
                    </center>
                     
                </h1>
                <h3>
                    <center>
                       Kelas 5{this.state.TopClass}
                    </center>
                </h3>                
                <button onClick={this.sike}>                                            
                        Yeke?                   
                </button>

                <img src="https://media.giphy.com/media/xThuWcaa4U4XZQDgvm/giphy.gif"/>

                <form onSubmit={this.submitHandler}>
                    <h3>Enter your name</h3>
                    <input type='text' onChange={this.changeHandler}/>
                    <input type='submit'/>
                </form>


                </center>
            </div>
         );
    }
}

export default Kelas; 