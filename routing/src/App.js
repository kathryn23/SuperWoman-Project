import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import Home from './components/Home';
import Movies from './components/movies';
import Movie from './components/moviePage';
import CreateMovie from './components/addMovie';


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
            <li><NavLink to="/addMovie">Add Movies</NavLink></li>
        </ul>

       <div className="content">
       <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/movies" component={Movies} />
       <Route exact path="/movies/:id" component={Movie} />
       <Route exact path="/addMovie" component={CreateMovie} />
       </Switch>
       </div>
       </div>
      </BrowserRouter> 
    );
  }
}

export default App;

