import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/login';
import Signup from './components/signup';

//app component
class App extends Component {
   render() {
      return (
         <Router>           
<div>              
<center><h1>My Movie Library</h1></center>
<nav>                 
<ul>                 
<li><Link to={'/'}>Home</Link></li> 
</ul> 
<hr /> 
<ul>
<li><Link to={'/login'}>Login</Link></li>
<li><Link to={'/signup'}>Signup</Link></li>
 </ul>
</nav>               
<hr />
 
<Switch>
<Route exact path='/' component={Home} />
<Route exact path='/login' component={Login} />
<Route exact path='/signup' component={Signup} />
</Switch>
</div>
</Router>
      );
   }
}
 
export default App;