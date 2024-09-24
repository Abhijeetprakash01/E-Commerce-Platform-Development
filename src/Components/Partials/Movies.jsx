import React, { useEffect, useState } from 'react'
import Topnav from './Topnav'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from "../../utils/axios"
import Cards from './Cards'
import Loader from '../Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
  const navigate =useNavigate();
  const handleclick = () => {
    navigate(-1);
  }
  
  const [page,setpage] = useState(1);
  const [movie,setMovie] = useState([]);
  const [category,setcategory] = useState("now_playing");
  const [hasmore,sethasmore] = useState(true);

  const getMovie = async() =>{
    try{
      const {data} = await axios.get(`/movie/${category}?page=${page}`);
      // setTrending(data.results);
      if(data.results.length > 0)
      {
        setMovie((prev) => [...prev , ...data.results]);
        setpage((prevpage) => prevpage+1);
      }
      else{
        sethasmore(false);
      }
      }catch(e){
      console.log("Error:" , e);
    }
  };

  // console.log(trending);

  const refreshHandler = () => {
   if(movie.length === 0){
    getMovie();
   }
   else{
    setpage(1);
    setMovie([]);
    getMovie();
   }
  };

  useEffect(()=>{
    refreshHandler();
  },[category]);  //getTrending ko call krna hai jb,jb category change hogi 
  
  return movie.length > 0 ? (
    <div className='w-[100%] overflow-y-auto'>
        <div className='flex w-[100%] p-5'>
        <h1 className='text-3xl text-zinc-400 p-5 mt-1 w-[40vh]'>
        <i onClick={handleclick} className="ri-arrow-left-line"></i>
        Movie<small className='ml-2 text-xl' >({category})</small>    
        </h1>

        <div className='flex flex-start justify-between w-[90%]'>

        <div className='ml-10 mt-2'>
        <Topnav />
        </div>
        
        <div className='p-5 w-[50vh] mt-0'>
        <Dropdown
              title="Category"
              options={["popular", "top_rated","upcoming","now_playing"]}
              func={(e) => setcategory(e.target.value)}
              />
        
            </div>
        </div>
        </div>
       
       
       <InfiniteScroll
       dataLength={movie.length}
       next = {getMovie}
       hasMore = {hasmore} 
       loader = {<h1>Loading...</h1>}>    
       <Cards data = {movie} title = "movie" />
       </InfiniteScroll> 
    </div>

  ) : <Loader />
}
export default Movies;