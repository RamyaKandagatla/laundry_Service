import React from 'react';
import Createtopnav from '../components/createtopnav';
import Createsidebar from '../components/Createsidebar';
import './createorder.css'


function Createorder() {
  return(
    <div className='createordercss'>
      <Createsidebar/>
      <Createtopnav/>
      
    </div>
    
  );
}

export default Createorder;
