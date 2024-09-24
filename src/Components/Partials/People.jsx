import React, { useEffect, useState } from 'react'
import Topnav from './Topnav'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from "../../utils/axios"
import Cards from './Cards'
import Loader from '../Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
  
  const navigate =useNavigate();
  const handleclick = () => {
    navigate(-1);
  }
  
  const [page,setpage] = useState(1);
  const [people,setPeople] = useState([]);
  const [category,setcategory] = useState("popular");
  const [hasmore,sethasmore] = useState(true);

  const getPeople = async() =>{
    try{
      const {data} = await axios.get(`/person/${category}?page=${page}`);
      // setTrending(data.results);
      if(data.results.length > 0)
      {
        setPeople((prev) => [...prev , ...data.results]);
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
   if(people.length === 0){
    getPeople();
   }
   else{
    setpage(1);
    setPeople([]);
    getPeople();
   }
  };

  useEffect(()=>{
    refreshHandler();
  },[category]);  //getTrending ko call krna hai jb,jb category change hogi 
  
  return people.length > 0 ? (
    <div className='w-[100%] overflow-y-auto'>
        <div className='flex w-[100%] p-5'>
        <h1 className='text-3xl text-zinc-400 pt-5 pl-5 pr-3 mt-1 w-[45vh]'>
        <i onClick={handleclick} className="ri-arrow-left-line"></i>
        People  
        </h1>

        <div className='flex flex-start justify-between w-[90%]'>

        <div className='ml-10 mt-2'>
        <Topnav />
        </div>
        
        {/* <div className='p-5 w-[50vh] mt-0'>
        <Dropdown
              title="Category"
              options={["on_the_air",
                            "popular",
                            "top_rated",
                            "airing_today"]}
              func={(e) => setcategory(e.target.value)}
              />
              
            </div> */}
        </div>
        </div>
       
       
       <InfiniteScroll
       dataLength={people.length}
       next = {getPeople}
       hasMore = {hasmore} 
       loader = {<h1>Loading...</h1>}>    
       <Cards data = {people} title = "people"/>
       </InfiniteScroll> 
    </div>

  ) : <Loader />
}
export default People;