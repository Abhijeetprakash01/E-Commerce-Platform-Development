import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// const[data,setData] = useState(null); 

const Footer = ({data,title}) => {
  // console.log(5);
  // console.log(data);
  return (
    <div className='mt-[1%] mb-[1%] h-[48vh] w-[full] ml-5 mr-10'>

     <div className='h-[50vh] flex w-full overflow-y-hidden bg-zinc mt-5'> 
       {data.map((d,i) => (
                <Link to={`/${d.media_type || title}details/${d.id}`} key={i} className='h-[50px] min-w-[15%] mr-6'> 
                  <img className='w-full h-[24vh] object-cover'
                    src = {`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path}`} 
                   alt="" />
                
                <div className='text-white'>
                <h1 className='font-black text-white'>
                  {(d.title || d.name || d.original_name || d.original_title).slice(0,10)}
                </h1>
                <p className='mt-3 text-white pb-6'>
                  {d.overview.slice(0,100)}...
                  <span className='text-zinc-400'>more</span>
                </p>
                </div>

                </Link>
          ))}
      </div>      
    </div>
  );
};

export default Footer
