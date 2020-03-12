import  { Component } from 'react';
import axios from 'axios';

export function updateMovie(data, movieId) {
    axios.put(`https://movi-lib.herokuapp.com/api/v1/movies/${movieId}`)
    .then(res => { 
        console.log(res.data)
          window.location.href=`/movies/${movieId}`
         }).catch((err) => { console.log(err);
       })
     }

export function deleteMovie(movieId) {
    axios.delete(`https://movi-lib.herokuapp.com/api/v1/movies/${movieId}`)
    .then(res => res.data ())
    .then(results => { 
        console.log(results.data)
          window.location.href=`/movies`
         }).catch((err) => { console.log(err);
       })
     }

class getInputValue extends Component{
  
}   
export default getInputValue;              
    
   