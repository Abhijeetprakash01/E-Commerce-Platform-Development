
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import Loader from './Components/Loader';
import Trending from './Components/Partials/Trending';
import Popular from './Components/Partials/Popular';
import Movies from './Components/Partials/Movies';
import Tvshows from './Components/Partials/Tvshows';
import People from './Components/Partials/People';
import MovieDetails from './Components/Partials/MovieDetails';
import TvDetails from './Components/Partials/TvDetails';
import PeopleDetails from './Components/Partials/PeopleDetails';

function App() {

  return (
     <div className='bg-[#1F1E24] w-screen min-h-screen flex'>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/l" element={<Loader />}/> */}
        <Route path="/trending" element ={<Trending/>}/>
        <Route path="/popular" element ={<Popular/> }/>
        <Route path="/movies" element ={<Movies/> }/>
        <Route path="/moviedetails/:id" element ={<MovieDetails/>}/>
        <Route path="/Tvshows" element ={<Tvshows/>}/>
        <Route path="/tvdetails/:id" element ={<TvDetails/>}/>
        <Route path="/People" element ={<People />}/>
        <Route path="/peopledetails/:id" element ={<PeopleDetails />}/>
      </Routes>
     </div>
  );
}

export default App
