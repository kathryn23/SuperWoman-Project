import React, { Component } from "react";
import { Route, NavLink, BrowserRouter} from "react-router-dom";
import Home from './components/Home';
import Movies from './components/movies';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
      <div className="cat">
             <h1>Thusiast Movie Library</h1>
      </div>

        <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/movies">Popular Movies</NavLink></li>
        </ul>

       <div className="content">
       <Route exact path="/" component={Home} />
       <Route exact path="/movies" component={Movies} />
       </div>
       </div>
      </BrowserRouter> 
    );
  }
}

export default App;

