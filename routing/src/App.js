import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import login from './components/login';
 
class App extends Component {
   render() {
      return (
         <Router>           
<div className="content1">              
<center><h2 className="content2">My Movie Library</h2></center>

<nav className="navigate">                 
<ul className="navigate2">
                    
<li><Link to={'/'}>Home</Link></li>                  
<li><Link to={'/login'}>Login</Link></li>
 </ul>
</nav>               
<hr />
 
<Switch>
<Route exact path='/' component={Home} />
<Route exact path='/login' component={login} />
</Switch>
</div>
</Router>
      );
   }
}
 
export default App;