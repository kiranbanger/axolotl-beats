import React from 'react';
import { Component } from 'react';

class LoginPage extends Component {
  constructor () {
    super()
  }; 
  // loginEvent = () => {

  //   fetch('/api/auth')
  //     .then(response => response.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err, 'auth fetch failed'))
  //   }
    
    render() {
      return (
       <div id="loginPage">
        <h3>Login to Spotify here...</h3>
        <a href='http://localhost:8080/api/auth'><button className="login" onClick={this.loginEvent}>Spotify Login</button></a>
       </div> 
      )
    };
}





export default LoginPage