import React from 'react';
import './Createsidebar.css';
import home from '../images/home.svg';
import more from '../images/more.svg';
import list from '../images/list.svg';

function Createsidebar() {
  return (
    <div className='create-main'>
        <img src={home} alt="home" className='home'/>
        <div className='innerbox'>
            <img src={more} alt="plus" className='plus'></img>
        </div>
        <img src={list} alt="list" className='list'/>
        <h2 className='orders'>Orders | 0</h2>
        <input type="text" name="search" className='searchbar'></input>
        <h6 className='norder'>No Orders avaialble</h6>
        <button className='orderbtn'><p className='Orderp'>Create</p></button>
        <div className='orderfooter'>
            <p className="orderpara">2021&#169;Laundry</p>
      </div>
       
    </div>
  );
}

export default Createsidebar;
