 
import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Cardn from './Cardn';
import Typography from '@mui/material/Typography';
import Navbarn from './Navbarn';
export default function Home(){

    const [noodles,setnoodles]=useState([])
    const [uniqueCountries,setuniqueCountries]=useState([])
    async function fetchAllNoodles(){
        const Result= await Axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json');
        //  console.log(Result.data);
         setnoodles((pre)=>{
           return Result.data;
         })
        //  console.log(noodles)
    }
   
    
  useEffect(()=>{
  
         fetchAllNoodles();
        //  console.log(noodles)
  },[])
  
  useEffect(()=>{
   // console.log(noodles)
   setuniqueCountries((pre)=>{
    const unique = [...new Set(noodles.map(item => item.Country))]; // [ 'A', 'B']
  
    return unique;
  })
  },[noodles])



    return (<>
    
     <Navbarn/>
    
    <Typography
        
        sx={{ p: 2,  }}
        >
        Select a country.
        </Typography>

        <div className='all-cards-container'>
        {
        uniqueCountries.map((nood,index)=>{
            return (
            <Cardn key={index} countryName={nood}  />
            )
         })
        }
          </div>
    
    </>)
}