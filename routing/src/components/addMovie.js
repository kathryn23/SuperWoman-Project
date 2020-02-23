
import React, { Component } from 'react';
import axios from 'axios';
import './addMovie.css';

export default class CreateMovie extends Component {
    constructor(props) {
      super(props);

      this.state = {
            title: '',
            director: '',
            genre:'',
            releaseDate: '',
            description: '',
            imageUrl: ''
          
        };
   }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
      alert('Movie has been Create!');
         e.preventDefault();
          console.log(this.state)
     
    axios
    .post(`https://movi-lib.herokuapp.com/api/v1/movies`, this.state)
      .then(res => {
         console.log(res)
       })
       .catch(error => {
         console.log(error)
       })
      }
 
    render() {
      const {title, director, imageUrl, genre, releaseDate,description} = this.state;
      return (
         <React.Fragment>
          <h2>Add Your Favourite Movies Here</h2>
              <hr />

            <div className="wrapper">
            <form onSubmit={this.submitHandler}>
                <div>
                <label> Title: </label><br />
                <input type="text" name="title" value={title} onChange={this.changeHandler} className="forms" />
                </div><br />

                <div>
                <label> Poster upload: </label><br />
                
                <input type="file" name="file" value={imageUrl} onChange={this.changeHandler} className="form1" /> 
                </div><br />

                <div>
                <label> Director: </label><br />
                <input type="text" name="director" value={director} onChange={this.changeHandler} className="forms"/>
                </div><br />

                <div>
                <label> Genre: </label><br />
                <input type="text" name="genre" value={genre} onChange={this.changeHandler}className="forms" />
                </div><br />

                <div>
                <label> Release Date: </label><br />
                <input type="date" name="releaseDate" value={releaseDate} onChange={this.changeHandler} className="forms" />
                </div><br />

                <div>
                <label> Description: </label><br />
                <textarea name="description" value={description} onChange={this.changeHandler} className="form2"/>
                </div><br />

                <div>
                <button type="submit" className="form3" onClick={this.submitHandler}> Save </button>
                </div>
          </form>
          <br/> 
          <hr/>
          <div> 
              Entered Value: {this.state.value} 
          </div> 
          </div>
          </React.Fragment>
        )
    }
}