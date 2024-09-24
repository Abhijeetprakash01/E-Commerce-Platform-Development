import React from 'react'
import load from '/loader.gif'

const Loader = () => {
  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center'>
        <img className='h-[70%]' src={load} alt=""/>
    </div>
  )
}

export default Loader
