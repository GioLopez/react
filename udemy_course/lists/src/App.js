import './App.css';
import { Component } from 'react';
import User from './User/User';

class App extends Component {
  state = {
    users: [
      {id: 'userId1', name: 'Gio', age: 28},
      {id: 'userId2', name: 'Marces', age: 29},
      {id: 'userId3', name: 'Hanna', age: 8},
    ],
    showUsers: false,
  }

  changeNameHandler = (event, id) => {
    const userIndex = this.state.users.findIndex((theUser) => {
      return theUser.id === id;
    });

    const user = {
      ...this.state.users[userIndex]
    };

    user.name = event.target.value;
    
    const users = [...this.state.users];
    users[userIndex] = user;

    this.setState({users: users})
  }

  toggleUserDisplay = () => {
    const isShowing = this.state.showUsers;
    this.setState({showUsers: !isShowing})
  }
  
  render(){
    const buttonStyle = {
      margin: '16px',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
    }

    let theusers = null;

    if (this.state.showUsers === true){
      theusers = ( this.state.users.map( (user, index) => {
            return (
              <User 
                name={user.name}
                age={user.age}
                changed={ (event) => this.changeNameHandler(event, user.id) }
                key={user.id}
              />
            )
          }
        )
      )
    }

    return (
      <div className="App">
        <h1>Gio and React!</h1>
        {theusers}
        <button style={buttonStyle} onClick={this.toggleUserDisplay}>{this.state.showUsers ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
}

export default App;
