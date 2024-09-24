import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    
    // console.log(data);
    return (
    <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),
                              url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path ||data.poster_path})`,
                              backgroundSize: 'cover', 
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat' 
                }}

     className='w-full h-[60vh] mt-[1%] flex flex-col justify-end items-start p-[5%]'>
     <h1 className='w-[70%] text-4xl text-white font-black'>{data.title || data.name || data.original_name || data.original_title}</h1>
     <p className='text-white mt-3 mb-3 w-[70%]'>{data.overview.slice(0,200)}...
        <Link to={`/${data.media_type}details/${data.id}`} className='text-blue-400'>more</Link>
     </p>
     <Link className='mt-2 bg-[#6556CD] p-4 rounded text-white'>{" "} 
     Watch Trailer
     </Link>
    </div>
  );
};

export default Header;
