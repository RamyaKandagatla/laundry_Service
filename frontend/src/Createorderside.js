import React from 'react'
import home from '../images/home.svg';
import more from '../images/more.svg';
import list from '../images/list.svg';
import './Createorderside.css'

export default function Createorderside() {
  return (
    <div className='main'>
        <img src={home} alt="home" className='home-home'/>
        <div className='innerbox'>
            <img src={more} alt="plus" className='plus-plus'></img>
        </div>
        <img src={list} alt="list" className='list-list'/>
        <h2 className='orders-orders'>Create Order</h2>
        <input type="text" name="search" className='searchbar-searchbar'></input>
        
        <div className='footer'>
            <p className="para">2021&#169;Laundry</p>
      </div>
       
    </div>
  )
}
