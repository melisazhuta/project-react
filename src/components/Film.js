import React from 'react'

function Film({data,getMovie}) {
    const handleClick = (e) => {
        getMovie (data.id)
    }
    return (
        <div className='movie'>
             <img src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path} alt={data.path} />
             <h4>{data.title}</h4>
            <div>  </div>
            <button onClick={handleClick}> More... </button>
        </div>
    )
}
export default Film

