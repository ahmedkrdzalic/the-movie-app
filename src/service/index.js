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
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchMovieVideo = async (id) => {
    try{
        const {data} = await axios.get(`${url}/movie/${id}/videos`, {
            params: {
                api_key: apiKey,
            }
        });
        

        let video = {};
        //take just one that have type: "Trailer"
        for (let i = 0; i < data['results'].length; i++) {
            if (data['results'][i].type === "Trailer") {
                video = data['results'][i];
                break;
            } 
        }
        return video;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchMovieCast = async (id) => {
    try{
        const {data} = await axios.get(`${url}/movie/${id}/credits`, {
            params: {
                api_key: apiKey,
            }
        });
        

        let cast = [];
        //take just the top cast acting members 
        
        for (let i = 0; i < data['cast'].length; i++) {
            if (data['cast'][i].known_for_department === "Acting" && data['cast'][i].order < 6) {
                cast.push(data['cast'][i]);
            } 
        }
        

        console.log("cast");
        console.log(cast);
        return cast;
    }
    catch(error){
        console.log(error);
    }
}

