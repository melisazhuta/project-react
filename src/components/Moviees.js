import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Popup from './Popup'
import Film from './Film'

function Moviees () {
    const [moviees, setMoviees] = useState ([])
    const [page, setPage]=useState (1)
    const [movie, setMovie]=useState ( )

    useEffect (()=> {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b04350807bfef511722d92175c56e060&language=en-US&page=1')
        .then(response => setMoviees(response.data.results)
        .catch(e => console.log(e)))
    }, [])

    const getMovie = (id) => {
        const fmoviees = moviees.filter(movie => movie.id === id)
        if (fmoviees.length > 0) setMovie (fmoviees[0])
     }
     const closePopup = (state) => {
        if (state === true) setMovie(undefined)
     }

    return(
        <>
        <div className='movies'>
        {moviees && moviees.map(movie => <Film key={movie.id} data={movie} getMovie={getMovie}/>)}
        </div>
        {movie && <Popup movie = {movie} closePopup={closePopup}/>}

        <div className='pagination'> 
         <button onClick={() => {
             if (page > 1) setPage (page => page -= 1)
               }} >Prev</button>
                <span>{page}</span>
            <button onClick={() => {
           setPage (page => page += 1) }}>Next </button> 
   </div>

        </>
    )
};


  export default Moviees;

 // const [moviees, setMoviees]=useState ([])
    // const [page, setPage]=useState (1)
    // const [movie, setMovie]=useState ( )
    // useEffect (() => {
    //     axios.get ('https://api.themoviedb.org/3/movie/popular?api_key=b04350807bfef511722d92175c56e060&language=en-US&page=1')
    //     .then (response => setMoviees(response.data.results)
    //     .catch(e => console.log(e)))
    // },[page])



