import React, { useEffect, useState } from 'react'
import SideNav from './Partials/SideNav'
import Topnav from './Partials/Topnav'
import Header from './Partials/Header'
import axios from '../utils/axios'
import Footer from './Partials/Footer'
import Loader from './Loader'
import Dropdown from './Partials/Dropdown'

const Home = () => {
    document.title ="Homepage";

    const [wallpaper,setwallpaper] = useState(null);
    const GetHeaderWallpaper = async () =>{
      try{
         const {data} = await axios.get(`/trending/all/day`);
         let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
        //  console.log(randomdata);
         setwallpaper(randomdata);
      }catch(e)
      {
        console.log("Error:" , e);
      }           
    }
    
    const [category, setcategory] = useState("all");
    const [trending, setTrending] = useState([]);

      const GetTrending = async () =>{
         try{
            const {data} = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
         }catch(e){
            console.log("Error:" , e);
         }
      }
   
    // console.log(trending);
    useEffect(() => {
         GetTrending();
        !wallpaper && GetHeaderWallpaper();
    },[category]);

  return wallpaper && trending ? (
    <> 
      <SideNav />
      <div className='w-[80%] h-full border-l-2 border-zinc-400'>
        < Topnav />
        < Header data ={wallpaper} />

       <div className='text-white flex justify-between mt-4  w-[100%] h-[40px]'>
        <h1 className='text-zinc-300 text-[4vh] ml-2 '>Trending</h1>
        <Dropdown
              title="Filter"
              options={["tv", "movie", "all"]}
              func={(e) => setcategory(e.target.value)}
        />
      </div>
        <Footer data = {trending} title = {category}/>
      </div>
    </>
  ) : <Loader />
}

export default Home
