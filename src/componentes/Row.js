import React, {useEffect, useState} from 'react';
import axios from '../service/axios';
import "./Row.css";

const baseUrlImage = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {

    const [movies,setMovies] = useState([]);


    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
        }
        fetchData();

    },[fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            
            <h2>{title}</h2>
            
            <div className="row__posters">

                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`${baseUrlImage}${movie.poster_path}`}
                        alt={movie.name } 
                    />
                ))}

            </div>

        </div>
    )
}

export default Row
