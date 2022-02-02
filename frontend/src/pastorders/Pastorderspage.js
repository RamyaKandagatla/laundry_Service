import React from "react";
import "./Pastorderspage.css";
import home from '../images/home.svg';
import list from '../images/listcolor.svg';
import plus from '../images/morewhite.svg';
import {Link} from 'react-router-dom';



function Pastorderspage() {



  
  return (
    <div className="pastcss">
      <div className="tnb">
        <h1 className="tnbh1">LAUNDRY</h1>
        <p className="tnbp1">Pricing</p>
        <p className="tnbp2">Career</p>
        <div className="divtnb">
          <p className="tnbp3">User Name</p>
        </div>
      </div>
      <div className="snb">
        <img src={home} alt='home' className="hm1"/>
        <img src={plus} alt='plus' className="pl1"/>
        <div className="list2"><img src={list} alt='list' className="llt1"/></div>
      </div>
      <div>
        <p className="ords">Orders | 0</p>
      <Link to='/Productspage'><button className="ctbtn">Create</button></Link>
      </div>

    </div>
  );
}

export default Pastorderspage;
