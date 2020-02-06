import React, { Component } from 'react';
import { axios } from 'axios';

//login component
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email      : "",
      password   : "",
      formErrors : ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password} = this.state;

    axios.post("http://localhost:3000/sessions",
    {
      user : {
        email   : email,
        password: password
      }
    },
    {withCredentials: true}
    )
    .then(response => {
      console.log("res from login", response);
    })

    .catch(error => {
      console.log("login error", error); 
    });

    event.preventDefault();
  }

  render(){
    return (
      <div>
      <h1>Login your details</h1>
      <form onSubmit={this.handleSubmit.bind(this)}>
       
      <div>
      <label>Email  :                       </label>
      <input type="email" name="email" placeholder="Email" 
             value={this.state.email}
             onChange={this.handleChange} required />
      </div> 
      <div>
      <label>Password:</label>
      <input type="password" name="password" placeholder="password"
             value={this.state.password}
             onChange={this.handleChange} required />
      </div>
      <button type="submit">Login</button>
      </form>
      </div>
    );
  }
}
  
export default Login;