import axios from "../../utils/axios";
// import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpeg";

const Topnav = () => {
    const [query,setquery] = useState("");
    console.log(query);
    
    const [searches,setsearches] = useState([]);
    const GetSearches = async() => {
      try{
        const {data} = await axios.get(`/search/multi?query=${query}`);
        // console.log(data);
        setsearches(data.results);  //setsearches is to store the dta fetched from api server
      }catch(e){
        console.log("Error:" , e);
      }
    };
     
    //to call useEffect we need to use useEffect
    useEffect(() =>{
      GetSearches();
    },[query]);

  
  return (
    <div className='w-full h-[10vh] flex justify-start items-center ml-[15%]'>
      
      <i className=" text-zinc-400 text-3xl ri-search-line"></i>
      <input onChange={(e)=>setquery(e.target.value)}  
            placeholder='Search Anything' 
            type='text'
            value={query}  // value is used to update the changes in form done by setquery
            className='w-[50%] mx-10 p-5 text-zinc-200 text-xl outline-none bg-transparent border-none' />
      
    {/* 1)  first way using && */}
        {/* {query.length >0 &&  (
            <i onClick={()=>setquery("")} className="text-zinc-400 text-3xl ri-close-fill"></i> 
        )}  */}
       
    {/* 2)  secondway using ternary operator */}
      {query.length > 0 ? (<i onClick = {()=>setquery("") } className="text-zinc-400 text-3xl ri-close-fill" /> ): null }
       

       {/* functionality to render the searches in the form*/}
      <div className=' z-[100] absolute w-[50%] max-h-[60vh] bg-zinc-200 top-[5.8%] mt-10 flex flex-col overflow-auto'>
      {searches.map((s,i)=>(
        <Link to={`/${s.media_type}details/${s.id}`} key={i} className='p-10 text-zinc-600 bg-zinc-300 hover:bg-zinc-400 w-full h-[12vh] border-b-2 text-2xl font-semibold border-zinc-100 flex justify-start items-center'>
            <img className='h-[11vh] w-[10vw] object-contain mr-4'
             src={ s.backdrop_path || s.profile_path ? 
                `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path|| s.poster_path}` : noimage } alt="" /> 
            <span>{s.name || s.title || s.original_name || s.original_title}</span>
        </Link> 
      ))}
      </div>
    </div>
        
  );
};

export default Topnav
