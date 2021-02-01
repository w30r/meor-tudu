import React, { Component } from 'react';

const Anjing =(props) => {
    return (
      <div className='list-item'>
        {props.content} 
        <button class="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}>x</button>
      </div>
    );
  }

const TodoList = (props) => {
    const bodos = props.tasks.map((bodo, index) => {
        return <Anjing content={bodo} key={index} id={index} onDelete={props.onDelete} />
    });

    return (
        <div className="list-wrapper">
            {bodos}
        </div>
    )
}

const naisAllDone = () => {
   return (
      <div>
         <alert>
            Nois.
         </alert>
      </div>
   )
}



class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tasks: ['Code '],
            newtask: '',
         }
    }

    deleteHandler = (e) => {
       let newArr = this.state.tasks;
       newArr.splice(e, 1);
       this.setState({tasks: newArr});
    }

    wiBB = (e) => {
        alert(e.target.value);
    }

    changeHandler = (event) => {
        let bendaBaru = event.target.value;
        this.setState({newtask: bendaBaru});

    }
    submitHandler = (event) => {
        event.preventDefault();
        //alert(this.state.tasks);        
        if (this.changeHandler.bendaBaru === null) {
            alert('INSERT SOMETHING LA DEY')
        }
        this.setState({ tasks: [...this.state.tasks, this.state.newtask] })
    }

    render() { 
        return ( 
            <div>
                <center>
                   
                    <naisAllDone />
                    
                    <h1>HERE IS THE TODO APP</h1>
                    <h3>You have {this.state.tasks.length} thing(s) to do.</h3>

                    <button onClick={this.wiBB}>
                        What's in benda baru?
                    </button>
                    
                    <form onSubmit={this.submitHandler} className='list-wrapper'>
                        <input type='text' onChange={this.changeHandler}/> 
                        <input type='submit' /> 
                    </form>  

                    <TodoList tasks={this.state.tasks} onDelete={this.deleteHandler}/>

                </center> 
            </div>
            
         );
    }
}
 
export default Todo 