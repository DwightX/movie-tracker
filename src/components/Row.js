import React,{useState, useEffect} from 'react'
import axios  from '../axios';

function Row({title, fetchUrl,isLargeRow}) {

    const [movies,setMovies] = useState([])
    const BASE_URL = "https://image.tmdb.org/t/p/w300";


    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    return (
        <div className="wrapper">
        <h1 className="genre_title">{title}</h1>

          <div className="movie-posters">
            {movies.map((movie) => (
                <>
                <img
                key={movie.id}
                className="movie-poster"
                alt=""
                src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                />
                <div className="movie-titles">
                {/* <h1 className="movie-title">{movie.original_title}</h1> */}
                </div>
                </>
            ))}
          </div>
      </div>
    )
}

export default Row
