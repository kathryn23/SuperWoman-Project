
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
            imageUrl: '',
          
        };
         this.changeHandler = this.changeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
     }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {  
         e.preventDefault();
         //this.props.history.push('/movies');
          console.log(this.state)
     
    axios.post(`https://movi-lib.herokuapp.com/api/v1/movies`, this.state)
      .then(res => { console.log(res)
         alert("Movie has been Created!")
         window.loction.href=`/movies`
       })
       .catch(error => { console.log(error)
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
                <label htmlFor="releasDate"> Release Date: </label><br />
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
                <button type="submit" className="form3"> SEND DATA </button>
            </div>
          </form>              
          </div>
          </React.Fragment>
        )
    }
}