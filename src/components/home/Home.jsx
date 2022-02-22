import {React, useEffect, useState} from 'react';
import {fetchMostPopularMovies} from '../../service'
import {Link} from 'react-router-dom'


export function Home() {
    const [mostPopularMovies, setMostPopularMovies] = useState([]);

    const [paginationBTNS, setPaginationBTNS] = useState([]);

    
    useEffect(() => {
        //.then((result) => setMovies(result)) u fetch funkciji 
        const fetchAPI = async () => {
            const movies = await fetchMostPopularMovies(1);
            setMostPopularMovies(movies);
            
            pagination_array(1);
        };
        fetchAPI();

    }, []);

    const mostPopularMovies_load = async (page) => {
        const movies = await fetchMostPopularMovies(page);
        setMostPopularMovies(movies);
        pagination_array(page);
    }
    

    //pagination logic
    //this function creates an array of characters (page numbers) that will be displayed in the bottom as a buttons.
    //it takes a current page number as an argument.
    const pagination_array = (page) => {
        
        var paginationBTNS_ = [];
        if(page>4) {
            paginationBTNS_.push(1, "...", page-2, page-1, page);

            if(page<500-4){
                paginationBTNS_.push(page+1, page+2, "...", 500);
            }
            else {
                if (page+1<500) paginationBTNS_.push(page+1);
                if (page+2<500) paginationBTNS_.push(page+2);
                if (page+3<500) paginationBTNS_.push(page+3);
                if (page+4<500) paginationBTNS_.push(page+4);
            }
        }
        else {
            if (page-3>0) paginationBTNS_.push(page-3);
            if (page-2>0) paginationBTNS_.push(page-2);
            if (page-1>0) paginationBTNS_.push(page-1);
            paginationBTNS_.push(page);

            if(page<500-4){
                paginationBTNS_.push(page+1, page+2, "...", 500);
            }
            else {
                if (page+1<500) paginationBTNS_.push(page+1);
                if (page+2<500) paginationBTNS_.push(page+2);
                if (page+3<500) paginationBTNS_.push(page+3);
                if (page+4<500) paginationBTNS_.push(page+4);
            }
        }
        setPaginationBTNS(paginationBTNS_);
        console.log(paginationBTNS);
    };

    const paginationBTNS_display = paginationBTNS.map((item, i) => {
        return(
            <li className="page-item paginationBTN" key={i} >
                <a className="page-link" onClick={(e) => {
                    e.preventDefault();
                    if (item !== "...") {
                        mostPopularMovies_load(item)
                    }
                }}>
                    {item}
                </a>
            </li>
        )
    });


    const mostPopularMovies_display = mostPopularMovies.map((movie, i) => {
        return (
            <div className="col-md-3 4col-6" key={i}>
                <div className="card mt-4" >
                    <div className="">
                        <Link to={`/movie/${movie.id}`}>
                            <img className='img-fluid' src={movie.poster} alt={movie.title}></img>
                        </Link>
                        <span className="position-absolute top-0 end-0 badge bg-warning" style={{color:"black", fontSize: 16, borderEndStartRadius: 15, borderTopRightRadius: 20}}>
                            {movie.rating}
                        </span>
                    </div>
                    <div className="card-body">
                        <Link to={`/movie/${movie.id}`}>
                            <h6 className='card-title text-center' >{movie.title}</h6>
                        </Link>
                    </div>
                </div>
            </div>
        )
    });

    
    
    

    return (
        <div className="container">
            <div className="row mt-4">
                {mostPopularMovies_display}
            </div>
            <div className="row m-4">
                <div className="col mt-4 d-flex justify-content-center">
                    <ul className="pagination">
                        {paginationBTNS_display}       
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Home;