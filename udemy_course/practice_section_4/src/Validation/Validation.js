import React, { Component } from 'react';

class Validation extends Component{

    render(){
  
      let textToShow = (
        this.props.inputText.length >= 5 ? 'Text long enough' : 'Text too short'
      )
  
      return (
        React.createElement(
          'p',
          null,
          textToShow
        )
        
      )
    }
  
  }

export default Validation;