import "./loginpage.css";

import Navbarloginandregister from '../components/Navbarloginandregister';
import Footertop from '../components/Footertop';
import Footermid from '../components/Footermid';
import Commonfooter from '../components/Commonfooter';
import Loginmid from "../components/Loginmid";


function Loginpage() {
  return (
    <>
      <div><Navbarloginandregister/></div>
      <div><Loginmid/></div>
      <div><Footertop  /></div>
      <div><Footermid /></div>
      <div><Commonfooter/></div>
    </>
  );
}

export default Loginpage;
