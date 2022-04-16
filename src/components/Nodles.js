import React from 'react'
import './nodeles.css'
export default function Nodles(props){
    return (<>
    
      <div className='each-nodles'>
           <div className=''>Brand: {props.nodel.Brand}</div>
           <div className=''>Variety: {props.nodel.Variety}</div>
           <div className=''>Style: {props.nodel.Style}</div>
           <div className=''>Country: {props.nodel.Country}</div>
           <div className=''>Stars: {props.nodel.Stars}</div>

      </div>
    
    </>)
}

 