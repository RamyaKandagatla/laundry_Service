import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import lock from "../images/padlock.svg";
import './Loginmid.css';

function Loginmid() {
  const navigate=useNavigate();
  const [user,setUser]=useState({email:"",password:""})
  let name,value;
  const changes=(e)=>{
    e.preventDefault();
    console.log(e);
      name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value})
  }
  const handlechanges=async(e)=>{
    e.preventDefault();
    const{email,password}=user;
    const users=await fetch("/fetchuser",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password  
      })
  });
  console.log(users);
  navigate('/',{ replace: true });
}
  return (
    <div className="lm">
      <div className="lp">
        <h1 className="lp1">Laundry Service</h1>
        <br />
        <br />
        <p className="lp2">Doorstep Wash & Dryclean Service</p>
        <br />
        <br />
        <p className="lp3">Don't Have An Account?</p>
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
          <input name="email" className="eml" value={user.email} onchange={changes} type="text" />
          <br />

          <label className="ll2">password</label>
          <br />

          <input name="password" className="pw" value={user.password} onchange={changes} type="password" />
          <img src={lock} alt="lock" />

          <h6>forgot password?</h6>
          <button type="submit" className="sibtn" onSubmit={handlechanges}>sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Loginmid;
