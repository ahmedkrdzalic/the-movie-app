import {React, useEffect, useState} from 'react';
import {fetchMostPopularMovies} from '../../service'
import {Link} from 'react-router-dom'


export function Home() {
    //
    const [pageDetails, setPageDetails] = useState({
        currentPage: 1,
        totalPages: 32282,
        totalMovies: 645640
    });
    const [mostPopularMovies, setMostPopularMovies] = useState([]);

    const [paginationBTNS, setPaginationBTNS] = useState([]);

    const [pageNmbr, setPageNmbr] = useState(1);

    //pagination logic
    const paginationBTNS_display = paginationBTNS.map((item, i) => {
        return(
            <li className="page-item paginationBTN" key={i} >
                <a className="page-link" href='#' onClick={(e) => {
                    e.preventDefault();
                    if (item !== "...") setPageNmbr(item);
                }}>
                    {item}
                </a>
            </li>
        )
    });


    const pagination_array = (page) => {
        
        var paginationBTNS_ = [];
        if(page>4) {
            paginationBTNS_.push(1, "...", page-2, page-1, page);

            if(page<pageDetails.totalPages-4){
                paginationBTNS_.push(page+1, page+2, "...", pageDetails.totalPages);
            }
            else {
                if (page+1<pageDetails.totalPages) paginationBTNS_.push(page+1);
                if (page+2<pageDetails.totalPages) paginationBTNS_.push(page+2);
                if (page+3<pageDetails.totalPages) paginationBTNS_.push(page+3);
                if (page+4<pageDetails.totalPages) paginationBTNS_.push(page+4);
            }
        }
        else {
            if (page-3>0) paginationBTNS_.push(page-3);
            if (page-2>0) paginationBTNS_.push(page-2);
            if (page-1>0) paginationBTNS_.push(page-1);
            paginationBTNS_.push(page);

            if(page<pageDetails.totalPages-4){
                paginationBTNS_.push(page+1, page+2, "...", pageDetails.totalPages);
            }
            else {
                if (page+1<pageDetails.totalPages) paginationBTNS_.push(page+1);
                if (page+2<pageDetails.totalPages) paginationBTNS_.push(page+2);
                if (page+3<pageDetails.totalPages) paginationBTNS_.push(page+3);
                if (page+4<pageDetails.totalPages) paginationBTNS_.push(page+4);
            }
        }
        setPaginationBTNS(paginationBTNS_);
        console.log(paginationBTNS);
    };


    const mostPopularMovies_display = mostPopularMovies.map((movie, i) => {
        return (
            <div className="col-md-3 col-sm-6" key={i}>
                <div className="card mt-4" >
                    <div className="">
                        <Link to={`/movie/${movie.id}`}>
                            <img className='img-fluid' src={movie.poster} alt={movie.title}></img>
                        </Link>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning" style={{color:"black", fontSize: 16}}>
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

    
    useEffect(() => {
        const fetchAPI = async () => {
            const [movies, pageDetails_] = await fetchMostPopularMovies(pageNmbr);
            setPageDetails(pageDetails_);
            setMostPopularMovies(movies);
        };
        fetchAPI();
        
        pagination_array(pageDetails.currentPage);
    }, [pageNmbr]);
    

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