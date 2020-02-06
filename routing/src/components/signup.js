import React, { Component } from 'react';
import {axios} from 'axios';

//signup component
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email           : "",
      password        : "",
      confirm_password: "",
      registrationErrors: ""
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
    const { email, password, confirm_password} = this.state;

    axios.post("http://localhost:3000/registrations",
    {
      user : {
        email           : email,
        password        : password,
        confirm_password: confirm_password
      }
    },
    {withCredentials: true}
    )
    .then(response => {
      console.log("res from registration", response);
      })

    .catch(error => {
      console.log("registration error", error); 
    });
    event.preventDefault();
  }

  render(){
    return (
      <div>
      <h1>signup </h1>
      <form onSubmit={this.handleSubmit}>

      <div>
      <label>Email:</label>
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
      <div>
      <label>Confirm Password:</label>
      <input type="password" name="confirm_password" placeholder="confirm password"
             value={this.state.confirm_password}
             onChange={this.handleChange} required />
      </div>
      <button type="submit">Signup</button>
      </form>
      </div>
    );
  }
}
 
export default Signup;