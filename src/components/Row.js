import React,{useState, useEffect} from 'react'
import axios  from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title, fetchUrl,isLargeRow}) {

    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    const BASE_URL = "https://image.tmdb.org/t/p/w300";


    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            })
            .catch((error) => console.log(error));
        }
        console.log(setTrailerUrl)

    }


    return (
        <div className="wrapper">
        <h1 className="genre_title">{title}</h1>

          <div className="movie-posters">
            {movies.map((movie) => (
                <img
                key={movie.id}
                className="movie-poster"
                alt=""
                onClick={()=> handleClick(movie)}
                src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                />
            ))}
          </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    )
}

export default Row
