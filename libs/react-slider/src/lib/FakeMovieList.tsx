import React from 'react';

function MovieItem({ movie }) {
    return (
        <div className="movie-item">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <div className="actions">
                <button>Watch Trailer</button>
                <button>Add to Watchlist</button>
            </div>
        </div>
    );
}

function MovieList({list}) {

    return (
        <div style={{ display: 'flex' }} className="movie-list">
            {list.map((movie:any) => (
                <div key={Date.now()+Math.random()*20} className="movie-item">
                    <img src={movie.imageUrl} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <div className="actions">
                        <button>Watch Trailer</button>
                        <button>Add to Watchlist</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieList;