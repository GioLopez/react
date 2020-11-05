import React, { Component } from 'react';
import './User.css';

class User extends Component{

    render(){
        return (
            React.createElement('div', {className: "User"}, 
                React.createElement('p', null, 'Enter here the text'),
                <UserOutput
                    userName={this.props.name}
                    age={this.props.age}
                />,
                <UserInput userName={this.props.name} changed={this.props.changed}/>,
            )
        );
    }

}

const UserOutput = (props) => {
    return(
        <div>
            <p>Here's goes the user info for user: {props.userName} with his/her age: {props.age}</p>
        </div>
    );
}

const UserInput = (props) => {
    return(
        <div>
            <input type="text" onChange={props.changed} value={props.userName} />
        </div>
    );
}

export default User;