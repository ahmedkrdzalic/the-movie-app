import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieVideo, fetchMovieCast } from '../../service';
import ReactPlayer from 'react-player';


export function MovieDetails() {
    //let params = match.params;
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [video, setVideo] = useState({});
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetails(id));
            setVideo(await fetchMovieVideo(id));
            setCast(await fetchMovieCast(id));
        }
        fetchAPI();
    }, [id])

    const video_display = () => {
        let YTurl = 'https://youtube.com/watch?v=';
        return (
            <div className='mt-2 player-wrapper'>
                <ReactPlayer controls url={YTurl + video.key} width="100%" height="100%" className="react-player" />
            </div>
        )
    }

    
    const cast_display = () => {

        return (
            <div className='row mt-4'>
                {cast &&
                    cast.map((castMember, i) => {
                        return (
                            <div className="col-4 col-sm-4 col-md-3 col-lg-2 text-center" key={i}>
                                <img src={"https://image.tmdb.org/t/p/w200" + castMember.profile_path} alt={castMember.name} className='rounded-pill border-2 border border-warning' width={100}/>
                                <p><span className='text-light'>{castMember.name}</span> <br />
                                {castMember.character}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


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
                <div className='col-12 col-sm-3 detail-info'>
                    <h5>RELEASE DATE</h5>
                    <p>{detail.release_date}</p>
                </div>
                <div className='col-12 col-sm-3 detail-info'>
                    <h5>RUN TIME</h5>
                    <p>{detail.runtime} min</p>
                </div>
                <div className='col-12 col-sm-3 detail-info'>
                    <h5>ORIGINAL LANGUAGE</h5>
                    <p>{detail.original_language}</p>
                </div>
                <div className='col-12 col-sm-3 detail-info'>
                    <h5>HOMEPAGE</h5>
                    <p><a href={detail.homepage}>Click here</a></p>
                </div>
                <hr className="bg-warning border-2 border-top border-warning" />
            </div>
            <div className='row mt-2 mb-4'>
                <div className='col-lg-12 col-xxl-6'>
                    <h3 style={{color:"#af9135"}}>Trailer:</h3>
                    {video_display()}
                </div>
                <div className='col-lg-12 col-xxl-6 detail-info mt-4'>
                    <div className='row mx-2'>
                        <h5>CAST:</h5>
                    </div>
                    {cast_display()}
                </div>
            </div>
        </div>
    )
}


export default MovieDetails;