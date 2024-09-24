import React, { useEffect, useState } from 'react'
import Topnav from './Topnav'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from "../../utils/axios"
import Cards from './Cards'
import Loader from '../Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
  
  const navigate =useNavigate();
  const handleclick = () => {
    navigate(-1);
  }
  
  const [page,setpage] = useState(1);
  const [popular,setPopular] = useState([]);
  const [category,setcategory] = useState("movie");
  const [hasmore,sethasmore] = useState(true);

  const getPopular = async() =>{
    try{
      const {data} = await axios.get(`${category}/popular?page=${page}`);
      // setTrending(data.results);
      if(data.results.length > 0)
      {
        setPopular((prev) => [...prev , ...data.results]);
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
   if(popular.length === 0){
    getPopular();
   }
   else{
    setpage(1);
    setPopular([]);
    getPopular();
   }
  };

  useEffect(()=>{
    refreshHandler();
  },[category]);  //getTrending ko call krna hai jb,jb category change hogi 
  
  return popular.length > 0 ? (
    <div className='w-[100%] overflow-y-auto'>
        <div className='flex w-[100%] p-5'>
        <h1 className='text-3xl text-zinc-400 p-5 mt-1 w-[40vh]'>
        <i onClick={handleclick} className="ri-arrow-left-line"></i> Popular   
        </h1>

        <div className='flex flex-start justify-between w-[90%]'>

        <div className='ml-10 mt-2'>
        <Topnav />
        </div>
        
        <div className='p-5 w-[50vh] mt-0'>
        <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
              />
              
            </div>
        </div>
        </div>
       
       
       <InfiniteScroll
       dataLength={popular.length}
       next = {getPopular}
       hasMore = {hasmore} 
       loader = {<h1>Loading...</h1>}>    
       <Cards data = {popular} title = {category}/>
       </InfiniteScroll> 
    </div>

  ) : <Loader />
}
export default Popular;