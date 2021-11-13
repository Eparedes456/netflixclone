const API_KEY =  'fd597c68c6710ba5b8692fe5832214ef';

const request = {

    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    //fetchHorrorMovies: `/discover/`

}

export default request;

