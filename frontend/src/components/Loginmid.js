import React from "react";
import { Link } from "react-router-dom";
import lock from "../images/padlock.svg";
import './Loginmid.css';

function Loginmid() {
  return (
    <div className="lm">
      <div className="lp">
        <h1 className="lp1">Laundry Service</h1>
        <br />
        <br />
        <p className="lp2">Doorstep Wash & Dryclean Service</p>
        <br />
        <br />
        <p1 className="lp3">Don't Have An Account?</p1>
        <br />
        <br />
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button className="lp4">Register</button>
        </Link>
      </div>
      <div className="rp">
        <div className="rp1">
          <h4>SIGN IN</h4>
        </div>
        <form>
          <label className="ll1">Mobile/Email</label>
          <br />
          <input name="email" className="eml" type="text" />
          <br />

          <label className="ll2">password</label>
          <br />

          <input name="password" className="pw" type="password" />
          <img src={lock} alt="lock" />

          <h6>forgot password?</h6>
          <button className="sibtn">sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Loginmid;
