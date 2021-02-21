import React, { Component } from 'react';


const WanBaiWan = (props) => {
    return (
        <div className='list-wrapper'>
						{props.id + 1 + '. '}
            {props.konten+ ' '}
            <button class="delete is-small" onClick={() => {props.onDelete(props.id)}}></button>
            <button class="icon fas fa-train" onClick={() => {props.onEdit(props.id)}}></button>
        </div>
    );
}

const PUKIMAK = (props) => {
    const satusatu = props.things.map((isi, index) => {
        return <WanBaiWan konten={isi} id={index} onDelete={props.onDelete}/>
    }) 
    return (
        <div>
           {satusatu}
        </div>
    );
}

class Tudu extends Component {
    state = { 
				things: [],
				newthing: ''
		 }

		 handleDelete = (i) => {
				let newArr = this.state.things;
				newArr.splice(i,1);
				this.setState({ things: newArr });
		 }
		 
		 handleChange = ev => {
			 this.setState({ newthing: ev.target.value });
		 }

		 handleSubmit = (ev) => {
			 ev.preventDefault();
			 this.setState({ things: [...this.state.things, this.state.newthing]  });
             this.setState({ newthing: ''});
		 }


    render() { 
        return ( 
            <div><center>
                
            <h1 class="title">📋 MEOR TUDU APP 📋</h1>
            <h4 class="subtitle ">You have {this.state.things.length} thing(s) to do.</h4>
						
						<form onSubmit={this.handleSubmit}>
							<input type='text' placeholder="Input here" class="input is-rounded is-small" onChange={this.handleChange} onSubmit={this.handleSubmit}/>
							<input type='submit' class="button is-success is-rounded is-small" />
						</form>
										
            <PUKIMAK things={this.state.things} onDelete={this.handleDelete}/>

            </center></div>
         );
    }
}
 
export default Tudu;