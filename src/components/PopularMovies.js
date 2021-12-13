/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import axios from "axios";


const api_key = "8960c0881dc3cac8c7615abbfbb25548";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function PopularMovies() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getPopular = api.get("movie/popular", { params: { api_key } });

  useEffect(() => {
    getPopular.then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="wrapper">
      <h1>Populr Movies</h1>
        <div className="movie-posters">
          {data.map((movie) => (
              <img className="movie-poster" src={getImage(movie.poster_path)} />
          ))}
        </div>
    </div>
  );
}

export default PopularMovies;