import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Home} from './components/home/Home';
import {MovieDetails} from './components/moviedetails/MovieDetails';
import LOGO from './theMovieApp.png'
import { PageContext } from './service/Context';
import { useState } from 'react';


function App() {
  const [pageNumber, setPageNumber] = useState(1);


  return (
    <BrowserRouter>
    <PageContext.Provider value={{pageNumber, setPageNumber}}>
      
        <div className='container'>
          <div className='row pt-4'>
            <div className='col'>
            <Link to="/" >
              <img className='LOGO' src={LOGO} width={200} />
            </Link>
            </div>
          </div>
          <hr className="bg-warning border-2 border-top border-warning" />
        </div>
      
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </PageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
