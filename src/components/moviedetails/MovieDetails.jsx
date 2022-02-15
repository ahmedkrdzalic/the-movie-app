import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../service';


export function MovieDetails() {
    //let params = match.params;
    const {id} = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetails(id));
        }
        fetchAPI();
    }, [id])

    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col text-center' style={{width: "100%"}}>
                    <img className='img-fluid' style={{borderBottom:"solid 7px #af9135", borderBottomRightRadius: 40, borderBottomLeftRadius: 40}} src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title}></img>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col mt-3 text-center'>
                    <h1>{detail.title}</h1>
                </div>
            </div>
            <div className='row mt-2'>
                <h3 style={{color:"#af9135"}}>Overview:</h3>
                <ul className="list-group list-group-horizontal mx-2 mt-2">
                    {detail.genres &&
                    detail.genres.map((genre, i) => {
                        return (
                            <li className="list-group-item rounded-pill mx-1 py-1 border-2 border border-secondary bg-transparent text-secondary" key={i}>
                                {genre.name}
                            </li>
                        )
                    })
                    }
                </ul>
                <div className='col mt-3'>
                    <p style={{fontSize:20, color:"#bebebe"}}>{detail.overview}</p>
                </div>
            </div>
            <div className='row mt-2'>
                <hr className="bg-warning border-2 border-top border-warning" />
                <div className='col-3 detail-info'>
                    <h5>RELEASE DATE</h5>
                    <p>{detail.release_date}</p>
                </div>
                <div className='col-3 detail-info'>
                    <h5>RUN TIME</h5>
                    <p>{detail.runtime} min</p>
                </div>
                <div className='col-3 detail-info'>
                    <h5>ORIGINAL LANGUAGE</h5>
                    <p>{detail.original_language}</p>
                </div>
                <div className='col-3 detail-info'>
                    <h5>HOMEPAGE</h5>
                    <p><a href={detail.homepage}>{detail.homepage}</a></p>
                </div>
            </div>
            <div className='row m-3'>
                
            </div>
        </div>
    )
}


export default MovieDetails;