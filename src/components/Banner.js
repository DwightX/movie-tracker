import React,{useState, useEffect} from 'react'
import axios  from '../axios';
import requests from '../request';


function Banner() {
    const [movie,setMovie] = useState([])


    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results
                [Math.floor(Math.random() * request.data.results.length - 1)
                 ]
                )
            return request;
        }
        fetchData()
    }, []);
    console.log(movie);

    function truncateString(str, num) {
return str?.length > num ? str.substr(0, num -1) +"...":str;
      }

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
                    )`,
                backgroundPosition:"top"
            }}
            >
                <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncateString(movie?.overview,150)}</h1>
          </div>
          <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner
