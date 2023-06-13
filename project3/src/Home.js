import React from 'react';
import { useState } from 'react';

const Myhome = () => {

  const [select,setSelected] = useState(true);
  return(
    <>
    <h1>Assignment 3......</h1>
    <button style={{backgroundColor:select?"green":'red',borderRadius:'7px',marginTop:'20px'}} onClick={()=> setSelected(!select)}>Button Background</button>

    </> 
  )
    
};

export default Myhome;
