import React from 'react'

function Popup({movie,closePopup}) {
    const handleClose = (e) => {
        closePopup(true)
    }
  return (
    <div className='popup'>
        <button style={{'float':'right'}} onClick={handleClose}>Close</button>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
        <h3>{movie.title}</h3>
        <p>{movie.overview} </p>
        <p>{movie.vote_average}</p>
    </div>
  )
}

export default Popup
