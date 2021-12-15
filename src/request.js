const API_KEY = "8960c0881dc3cac8c7615abbfbb25548"

const request = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchThrillerMovies:`/discover/movie?api_key=${API_KEY}&with_genres=53`
}

export default request