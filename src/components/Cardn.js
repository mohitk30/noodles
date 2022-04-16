import React from 'react'
import './cardn.css'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export default function Cardn(props){
    return (<>
     
       <div className='card-container'>
            < Link to =  {"/"+props.countryName}
            style={{
                textDecoration:'none',
                color:'black'
            }}
            >
               <Typography
                 sx={{ p: 2,  }}
               >
               Country :<div></div>
               {props.countryName}.
               </Typography>
               </Link>
       </div>
     
    
    
    </>)
}