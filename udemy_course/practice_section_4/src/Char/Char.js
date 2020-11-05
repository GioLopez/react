import React, { Component } from 'react';

class Char extends Component {


    render() {
      
      return (
        React.createElement(
          'div',
          {
            className: 'CharComponent',
            onClick: this.props.changed
          },
          this.props.charValue
        )
      )
    }
  }

  export default Char;