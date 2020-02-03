import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
        <div>                 
        <h2 className="text1">Login</h2>

        <form action="">                 
        <div class="text2">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" />
        
        </div>                
        <div class="ftext2">
        <label for="pwd">Password: </label>
        <input type="password" class="formx" id="pwd" />
        
        </div>
        <button type="submit" class="button">Login</button>
      </form>
    </div>
   );
 }
} 
 
export default Login;