
import React, { Component } from 'react';
import axios from 'axios';
import './Movies.css';
import {Link } from 'react-router-dom';

export default class Movies extends Component {
  constructor (props) {
    super (props);

      this.state = {
             isLoading: true,
             movies: [],
             error: null
      };  
  }

  componentDidMount () {
    this.setState ({ isLoading:true });
      axios.get(`https://movi-lib.herokuapp.com/api/v1/movies`)
          .then(res =>  {  
              this.setState ({ movies: res.data.data, isLoading: false })})
              .catch(error => this.setState ({ error, isLoading:false }));
    }
  
    render () { 
        const {isLoading, movies} = this.state;
            if (isLoading) {
              return <p> Loading movies.......... </p>;
            }
        
        return ( 
            <React.Fragment>
              <h2>Watch Movies Here</h2>
                  <hr />
          
                  <div className="grid-container">
                  <ul className="rig">
                        {movies.map(movie => (
                            <div key={movie._id}>
                              <li>
                                  <Link to={`/movies/${movie._id}`}>                           
                                      <img className="cont1" src={movie.imageUrl} alt=" " />
                                      <div className="cont2"><h3> {movie.title} </h3></div>
                                  </Link>        
                              </li>
                          </div>  
                        ))}
                  </ul>
                  </div>  
            </React.Fragment> 
        );
    }
}

