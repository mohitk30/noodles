import React,{useState,useEffect}from 'react'
import Axios from 'axios'
import './countries.css'
import { useParams } from 'react-router-dom';
import Navbarc from './Navbarc';
import Nodles from './Nodles';
import Typography from '@mui/material/Typography';
export default function Countries(){
    const { country } = useParams()

    const [noodlesC,setnoodlesC]=useState([])
    const [uniquenoodlesC,setuniquenoodlesC]=useState([])
   
    async function fetchAllNoodles(){
        const Result= await Axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json');
        //  console.log(Result.data);
        setnoodlesC((pre)=>{
           return Result.data;
         })
         //console.log(noodlesC)
    } 
   
    
  useEffect(()=>{
  
         fetchAllNoodles();
        //    console.log(noodlesC)
  },[])
  
  useEffect(()=>{
   // console.log(noodles)
//    console.log(noodlesC)
   setuniquenoodlesC((pre)=>{
    const unique =  noodlesC.filter((pre)=>{
        return pre.Country==country;
    })
    return unique;
   })
   

  },[noodlesC])

  useEffect(()=>{
    // console.log(uniquenoodlesC)
  },[uniquenoodlesC])



    return (<>
    <Navbarc/>
    <Typography
     sx={{  p:2 }}
    >
        Here are some types of Noodles :-
    </Typography>
     <div className='all-noodles-container'>
        {
            uniquenoodlesC.map((nod,index)=>{
                return (<>
                <div key={index}>
                    <Nodles nodel={nod}/>
                </div>
                
                
                </>)
            })
        }
      
 
       

     </div>
    
    </>)
}