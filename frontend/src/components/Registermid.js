import React from 'react';
import {Link} from 'react-router-dom';
import './Registermid.css';

function Registermid() {
  return <div className="mid-container">
  <div className="m1">
    <h1 className="m11">Laundry Service</h1>
    <p className="m12">Doorstep Wash & Dryclean Service</p>
    <p className="m13">Already Have Account</p>
    <Link to="/">
      <button className="m14">
        <p className="m141">Sign In</p>
      </button>
    </Link>
  </div>
  <div className="m2">
    <h1>REGISTER</h1>
    <form autoComplete="off">
      <div className="m2left">
        <label>Name</label>
        <br></br>
        <input type="text" name="name"></input>
        <br></br>
        <br></br>
        <label>Phone</label>
        <br></br>
        <input type="tel" name="phone"></input>
        <br></br>
        <br></br>
        <label>District</label>
        <br></br>
        <input type="text" name="district"></input>
        <br></br>
        <br></br>
        <label>Pincode</label>
        <br></br>
        <input type="number" name="pincode"></input>
      </div>
      <div className="m2right">
        <label>Email</label>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <br></br>
        <label>State</label>
        <br></br>
        <input type="text" name="state"></input>
        <br></br>
        <br></br>
        <label>Address</label>
        <br></br>
        <input type="text" name="address"></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" name="password"></input>
      </div>
    </form>
    <div className="checkbox">
      <input type="checkbox" name="checkbox"></input>
      <label>
        I agree to Terms & Condition receiving marketing and promotional
        materials
      </label>
    </div>
    <div className="m2button">
      <Link to="/">
        <button className="m2btn">Register</button>
      </Link>
    </div>
  </div>
</div>
}

export default Registermid;
