import React, { useState,useEffect } from 'react';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';

const baseURL = `https://image.tmdb.org/t/p/original/`;

function Row({title, fetchUrl, isLarge}) {
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState('');
    const opts = {
        height: '390',
        width: "100%",
        playerVars : {
            autoPlay: 1,
        }
    }

    useEffect(() => {
        // berjalan satu kali setiap komponen ROW di Load
        async function fetchData() {
            let request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData()
        // Jika menggunakan dari data luar useeffect maka array yang bawah harus
        // di isi dengan data itu
    },[fetchUrl])


    const clickHandler = async (movie) => {
        if (trailer.length > 0) {
            setTrailer("")
        } else {
                await movieTrailer(movie?.name || "dark")
                .then(url => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    let newurlParams = urlParams.get('v')
                    setTrailer(newurlParams);
                }) .catch(e => {
                    clickHandler("dark")
                })
            
        }
    }

    return (
        <div className="row">
            {/* title */}
                <h2>{title}</h2>
            {/* container -> poster */}
            <div className="row_posters">
                {/* Row Posters */}
                {movies.map((movie) => {
                    return(
                        <img onClick={() => clickHandler(movie)} key={movie.id} className={`row_poster ${isLarge && 'row_poster_large'}`} src={`${baseURL}${isLarge ?  movie.poster_path : movie.backdrop_path}`} alt={`${movie.name}`} />
                    )
                })}
            </div>
              {trailer && <Youtube videoId={trailer} opts={opts}/>}  
        </div>  
    );
}

export default Row;