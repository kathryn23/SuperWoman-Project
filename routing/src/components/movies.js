
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Movies.css';


export default class Movies extends Component {
  constructor (props) {
    super (props);

      this.state = {
        isLoading: true,
        movies: [],
        showMovie: {},
        error: null
      };
  }

  componentDidMount () {
    this.setState ({ isLoading:true });
      axios.get(`https://movi-lib.herokuapp.com/api/v1/movies`)
          .then(res =>  {  
              this.setState ({ movies: res.data.data,
                               isLoading: false })
   }).catch(error => 
         this.setState ({ error, isLoading:false }));
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
                <li><div key={movie.movie_id} id={movie.movie_id}>
                <Link to={{pathname: `movie/${movie.movie_id}`, query: {id: movie.id}}}>
                     <img className="cont1" src={movie.imageUrl} alt=" " />
                     <h3> {movie.title} </h3>
              </Link></div>
            </li>
              ))}
          </ul>
          </div>  
          </React.Fragment> 
        );
    }
  }

