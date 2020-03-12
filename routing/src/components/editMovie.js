
import React, { Component } from 'react';
import axios from 'axios';
import {updateMovie} from './delMovie';
import './movieDetails.css';

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
          movieInfo: {},
      };
    }
   
  changeHandler = (e) => {
       this.setState({ [e.target.name]: e.target.value });
       }

  submitHandler = (e) => {
    e.preventDefault();
      const { movieId, ...newData } = this.state.movieInfo;
        console.log (newData);
           updateMovie(newData, this.props.params.movieId);
  }
  
  componentDidMount () { 
    const {movieId} = this.props.match.params.movieId;
      this.moviePage(movieId);
    }

  moviePage = (movieId) => {   
    axios.get(`https://movi-lib.herokuapp.com/api/v1/movies/${movieId}`)
       .then(res => { console.log(res);
           this.setState ({ movieInfo: res.data.data })
             alert("Movie has been Created!")
               window.loction.href=`/movies`
            }).catch ( error => console.log(error)
          )}

  render() {
       const {title, director, genre, releaseDate,description, imageUrl} = this.state;
     
      return (
         <React.Fragment>
          <h2>Add Your Favourite Movies Here</h2>
              <hr />
           
          <div className="wrapper">
            <form onSubmit={this.submitHandler}>
            <div>
                <label htmlFor="title"> Title: </label><br />
                <input type="text" name="title" value={title} onChange={this.changeHandler} className="forms" placeholder="title"/>
            </div><br />               
            <div>
                <label htmlFor="director"> Director: </label><br />
                <input type="text" name="director" value={director} onChange={this.changeHandler} className="forms" placeholder="director"/>
            </div><br />
            <div>
                <label htmlFor="genre"> Genre: </label><br />
                <select name="genre" value={genre} onChange={this.changeHandler} className="forms" >
                <option value="">please select genre</option>
                <option value="comedy">comedy</option>
                <option value="horror">horror</option>
                <option value="action">action</option>
                <option value="adventure">adventure</option>
                <option value="romance">romance</option>
                <option value="thriller">thriller</option>
                <option value="sci-fi">sci-fi</option>
                <option value="history">history</option>
                </select>
            </div><br />
            <div>
                <label htmlFor="releaseDate"> Release Date: </label><br />
                <input type="date" name="releaseDate" value={releaseDate} onChange={this.changeHandler} className="forms" />
            </div><br />
            <div>
                <label htmlFor="description"> Description: </label><br />
                <textarea name="description" value={description} onChange={this.changeHandler} className="form2" placeholder="description"/>
            </div><br />
             <div>
                 <label htmlFor="imageUrl">  Poster Image:: </label><br />               
                 <input type="file" name="file" value={imageUrl} onChange={this.changeHandler} className="form1" /> 
             </div><br />
            <div>
                <button type="submit" className="form3" > update</button>
            </div>
          </form>              
          </div>
          </React.Fragment>
        )
    }
}

