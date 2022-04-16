// import React,{useState,useEffect} from 'react'
import './App.css';


import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import Home from './components/Home';

function App() {
 
 
  return (
    <div className="App">
       
        < Routes >
        
         < Route path = "/" element = { <Home/ > } />
         < Route path = '/:country' element = { <Countries/ > } />
         </Routes>  

        
    </div>
  );
}

export default App; 
