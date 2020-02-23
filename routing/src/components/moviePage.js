import React, {Component} from 'react';

export default class Movie extends Component {

  
  render(){
		const {movies, location} = this.props;

	    if (!movies.length || !location) {
	        return (<div>Loading...</div>);
	    }

		const movie = movies.find(m => m.id === location.query.id);

		  return movie?(
			<div>
			    <p>{movie.title}</p>
                <p>{movie.director}</p>
                <p>{movie.description}</p>
                <p>{movie.genre}</p>
                <p>{movie.releaseDate}</p>
                <img src={movie.imageUrl} alt="" />
			</div>
		):(
			<div> Error: no movie </div>
		);
	}
}
         