import './App.css';
import React from 'react';
import Post from './Post/Post';

class App extends React.Component {
  
  render (){
    return (

      React.createElement('div', {className:"App"}, 
        <Post />
      )
      
    );
  }
}

export default App;
