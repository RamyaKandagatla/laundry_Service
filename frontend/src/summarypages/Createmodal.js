import React from "react";
import "./Createmodal.css";
import tick from "../images/tick.svg";

function Createmodal({ closemodal }) {
  return (
    <div className="summary-container">
      <div className="sumnav">
        <h4 className="sum">Summary</h4>
        <button className="close" onClick={() => closemodal(false)}>
          X
        </button>
      </div>
      <div className="navdown">
        <input type="text" placeholder="Store Location" className="loc"></input>
        <p className="add">Store Address:</p>
        <p className="hash1">—</p>
        <p className="ph">Phone</p>
        <p className="hash2">—</p>
      </div>
      <p className="details">Order Details</p>
      <div className="table"></div>
      <div className="totalsum">
        <p className="tl">Total:</p>
        <p className="rs">RS</p>
      </div>
      <p className="addr">Address</p>
      <div className="addradd1">
        <p className="hm">Home</p>
        <img src={tick} alt="tick" className="imgtick"></img>
        <div className="hmeaddr">
          <p>#223, 10th road, Jp Nagar, Bangalore</p>
        </div>
      </div>
      <div className="addradd2">
          <p className="ot">Other</p>
          <p className="otaddr">#223, 10th road, Jp Nagar, Bangalore</p>
            
      </div>
      <button className="adn"><p>ADD NEW</p></button>
        <div className="btm">
            <button className="cn" onClick={() => closemodal(false)}>Confirm</button>
        </div>
    </div>
  );
}

export default Createmodal;
