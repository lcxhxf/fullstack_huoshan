import React from "react";

const Movie = ({ movie }) => {
    return (
        <div className="movie" >
            <h2>{movie.Title}</h2>
            <div >
                <img src={movie.Poster} alt="" width="200"
                alt={`The movie titled: ${movie.Title}` }
                />
            </div>
            <p>{movie.Year}</p>
        </div>
    )
}

export default Movie;