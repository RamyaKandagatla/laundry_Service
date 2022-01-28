import React from 'react';
import './Createsidebar.css';
import home from '../images/home.svg';
import more from '../images/more.svg';
import list from '../images/list.svg';

function Createsidebar() {
  return (
    <div className='create-m'>
        <img src={home} alt="home" className='homeo'/>
        <div className='innerboxxx'>
            <img src={more} alt="plus" className='plusss'></img>
        </div>
        <img src={list} alt="list" className='listtt'/>
        <h2 className='ordersss'>Orders | 0</h2>
        <input type="text" name="search" className='searchbarrr'></input>
        <h6 className='norderrr'>No Orders avaialble</h6>
        <button className='orderbtnnn'><p className='Orderppp'>Create</p></button>
        <div className='orderfooterrr'>
            <p className="orderparaaa">2021&#169;Laundry</p>
      </div>
       
    </div>
  );
}

export default Createsidebar;
