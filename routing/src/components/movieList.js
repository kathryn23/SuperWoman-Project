import React from 'react';

function moviez (props) {
    
    const {title, director, description, genre, releaseDate, imageUrl} => props.moviez;
    return (
        <div>
            <p> Title: {title}</p>
            <p> Director: {director}</p>
            <p> Genre: {genre}</p>
            <p> ReleaseDate: {releaseDate}</p>
            <p> Description: {description}</p>
            <p> <img id="cont1" src={movie.imageUrl} alt=" " /></p>
        </div>
    )
}

export default moviez;