import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <div className='card header'>
      <h1 className='card-header-title header'>
        You have {props.numTodos} thing(s) to do.
      </h1>
    </div>

  )
}

const Todo =(props) => {
  return (
    <div className='list-item'>
      {props.content}
      <button class="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}></button>
    </div>
  );
}

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return (
    <div className='list-wrapper'>
      {todos}
    </div>
  );
}

class SubmitForm extends React.Component {

  state = {term: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.term === '') return;
    this.props.onFormSubmit(this.state.term);
    this.setState({term: ''});
  }

  render () {
    return(
      <form>
        <input 
        type='text'
        className='input'
        placeholder='Enter Item'
        value={this.state.term}
        onChange={ (e) => this.setState({term: e.target.value})}
        />
        <button className='button'>Get it Boieyh</button>        
      </form>
    )
  }
}

////////////////////////////////////////////////////////////////////
class App extends React.Component {

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task.target.value]});
  }

  handleDelete = (index) => {
    const newArr = [this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  };

  state = {
    tasks: ['Todo 1', 'Laundy', 'Dishwashing']
  };

  render () {
    return(
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length}/>
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  };
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

















