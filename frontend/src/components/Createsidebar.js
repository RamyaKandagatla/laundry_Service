import React from 'react';
import './Createsidebar.css';
import home from '../images/home.svg';
import more from '../images/more.svg';
import list from '../images/list.svg';

function Createsidebar() {
  return (
    <div className='create-m1'>
        <img src={home} alt="home" className='homeoo'/>
        <div className='innerboxxxi'>
            <img src={more} alt="plus" className='plusssp'></img>
        </div>
        <img src={list} alt="list" className='listttl'/>
        <h2 className='orderssso'>Orders | 0</h2>
        <input type="text" name="search" className='searchbarrrs'></input>
        <h6 className='norderrrn'>No Orders avaialble</h6>
        <button className='orderbtnnno'><p className='Orderpppo'>Create</p></button>
        <div className='orderfooterrro'>
            <p className="orderparaaao">2021&#169;Laundry</p>
      </div>
       
    </div>
  );
}

export default Createsidebar;
