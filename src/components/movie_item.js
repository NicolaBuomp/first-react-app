import React from 'react';

export default function movieItem({movie}) {
    return (
            <div className="card col-md-3 m-3" key={movie.imdbID}>
                <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        )
}