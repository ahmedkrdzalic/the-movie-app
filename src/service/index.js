import axios from "axios";


const apiKey = "d88316fc3a9f39b23dabfcf907788c15";
const url = "https://api.themoviedb.org/3";
const mostPopularMovies = `${url}/movie/popular`;
const movieUrl = `${url}/movie`;



export const fetchMostPopularMovies = async (page) => {
    try {
        const {data} = await axios.get(mostPopularMovies, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: page
            }
        })
        
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const movies = data['results'].map((movie) => ({
            id: movie['id'],
            backPoster: posterUrl + movie['backdrop_path'],
            popularity: movie['popularity'],
            title: movie['title'],
            poster: posterUrl + movie['poster_path'],
            overview: movie['overview'],
            rating: movie['vote_average'],
        }))

        return movies;
    } 
    catch(error) {
        console.log(error);
    }
    
}

export const fetchMovieDetails = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}


