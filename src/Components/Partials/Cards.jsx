import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  // console.log(data);
  return (
    <>
    <div className='pl-[5%]  flex flex-wrap w-[full] h-full bg-[#1F1E24]'>
    {data.map((d,i) => (
         <Link to={`/${d.media_type || title}details/${d.id}`} className=' relative w-[25vh] mr-[4%] mb-[5%]' key = {i}>
            <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover'
            src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path ||d.poster_path}`}
            alt="" />

            <h1 className='text-2xl text-zinc-300 mt-3 font-semibold '>
          { d.title ||
            d.name ||
            d.original_name ||
            d.original_title}
            </h1>
        
        {d.vote_average > 0 && (<div className='absolute right-[-10%] bottom-[40%] rounded-full text-xl font-semibold bg-yellow-600 w-[7vh] h-[5vh] flex justify-center items-center'>
          {(d.vote_average * 10).toFixed()}  <sup>%</sup></div>)}
        
        
         </Link>
    ))}
    </div>

    </>
  )
}

export default Cards
