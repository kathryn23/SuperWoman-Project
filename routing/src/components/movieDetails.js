
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import deleteMovie from './delMovie';
import './movieDetails.css';

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
          movieInfo: {},
      };
  } 
   
  componentDidMount () { 
    const {movieId} = this.props.match.params.movieId;
      this.movieInfoPage(movieId);
    }

  movieInfoPage = (movieId) => {   
    axios.get(`https://movi-lib.herokuapp.com/api/v1/movies/${movieId}`)
       .then(res => { console.log(res);
           this.setState ({ movieInfo: res.data.data })
            }).catch ( error => console.log(error)
          )}

  deleteHandler = (e, movieId) => {
    e.preventDefault();
        if (window.confirm('Are you sure?')){
             deleteMovie(movieId);
  }}
  
  render () { 
      console.log(this.props.params);
           const {movieInfo} = this.state
         return ( 
          <div>
            <h2>Watch Movies Here</h2>
              <hr />  

              <div className="grid">
                  <div key={movieInfo._id} >
              
                      <img className="cont" src={movieInfo.imageUrl} alt=" " />                
                      <p> Title:       {movieInfo.title} </p>
					            <p> Director:    {movieInfo.director} </p>
					            <p> Genre:       {movieInfo.genre} </p>
					            <p> ReleaseDate: {movieInfo.releaseDate} </p>
					            <p> Description: {movieInfo.description} </p>	
              
               <Link to={`/editMovie/${this.props.match.params.movieId}`} className="form3"> Edit </Link>     
                    <br />   
                  <form onSubmit={e => this.deleteHandler(e, movieInfo._id)}>
                  <button type="submit" name="Delete" className="form3"> Delete </button>
                  </form> </div> </div>
        </div>  
      );
    }
  }

