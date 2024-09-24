import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[20%] h-[100%] p-7'>
        
        <h1 className='text-2xl text-white font-bold'>
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>AP</span>
        </h1>
        
        <nav className='flex flex-col text-zinc-400 gap-5 text-xl'>
            <h1 className='text-white font-semibold text-xl mt-12 mb-5'>New Feeds</h1>
            <Link to='/trending' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'> <i className=" mr-2 ri-fire-fill"></i> Trending</Link>
            <Link to='/popular'  className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'> <i className=" mr-2 ri-bard-fill"></i> Popular</Link>
            <Link to= '/movies'  className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="mr-2 ri-movie-2-fill"></i> Movies</Link>
            <Link to='/Tvshows' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="mr-2 ri-tv-2-fill"></i> Tv Shows</Link>
            <Link to='/People' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'> <i className="mr-2 ri-team-fill"></i> People</Link>
        </nav>
        
        {/* <hr className='border-none h-[100%] bg-zinc-400'/> */}
        {/* <hr className='border-none h-[full] bg-zinc-400 ' /> */}

        {/* <nav className='flex flex-col text-zinc-400 gap-3 text-xl'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5 '>WebSite Information</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'> <i className="ri-fire-fill mr-2"></i> About</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'> <i className="ri-contacts-book-fill"></i> Contact</Link>
      
        </nav> */}
        <div className='border-zinc-400 h-[10%]'></div>
    </div>
  )
}

export default SideNav
 
