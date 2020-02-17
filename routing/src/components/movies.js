
import React, { Component } from 'react';

import axios from 'axios';
import './Movies.css';

class Movies extends Component {
  constructor (props) {
    super (props);

      this.state = {
        isLoading: false,
        moviess: [],
        error: null
      };
  }

     componentDidMount () {
         this.setState ({ isLoading:true });
             axios.get(`https://movi-lib.herokuapp.com/api/v1/movies`)
                .then(res =>  {  
                  console.log(res.data);
                  this.setState ({ moviess: res.data.data,
                                   isLoading: false,
                  })
          })
          .catch(error => 
            this.setState ({ error, isLoading:false }));
        }
        
      render () { 
          const {isLoading, moviess} = this.state;
            if (isLoading) {
              return <p> Loading movies.......... </p>;
            }
        
        return ( 
          <React.Fragment>
           <h2>Watch Movies Here</h2>
           <hr />
          
           <div className="grid-container">
           <ul className="rig">
           {moviess.map(movie => 

            <li key={movie._id}>
               <img id="cont1" src={movie.imageUrl} alt=" " />
                 <h3> {movie.title} </h3>
            </li>)}
            </ul>
            
            </div>  
          </React.Fragment>
        );
    }
  }

export default Movies;