import './App.css';
import React, { Component } from 'react';
import Char from './Char/Char'
import Validation from './Validation/Validation'

const UserInput = (props) => {

  return (
    <div>
      <input type='Text' onChange={props.changed} value={props.textInside}/>
    </div>
  )
}

const UserOutput = (props) => {
  
  return(
    <div>
      <p>Text lenght: {props.textInside.length}</p>
      <Validation inputText={props.textInside}/>
    </div>
  );
}


class App extends Component{

  state = {
    text: ''
  }

  removeCharHandler = (event, id) => {

    let textArray = this.state.text.split('').map(x=>x);
    
    textArray.splice(id, 1);

    const newText = textArray.join('');
    
    this.setState({text: newText})
    
  }

  inputHandler = (event) => {
    let oldText = this.state.text;
    
    oldText = event.target.value;
    
    this.setState({text: oldText});
  }

  render(){

    

    let listChar = ( this.state.text.split('').map( (line, index) => {
        
        return (
          <Char 
            charValue={line}
            changed={(event) => this.removeCharHandler(event, index)}
            key={index}
          />
          
        )
      })
    )

    return (
      <div className="App">
        <h1>Hello there</h1>
        <div className="Box">
          <UserInput 
            changed={(event) => this.inputHandler(event)}
            textInside={this.state.text}/>
          
          <UserOutput textInside={this.state.text}/>

          {listChar}
        </div>
      </div>
    );
  }
}

export default App;
