import React from 'react';
import washingmachine from '../images/washing-machine.svg';
import bleach from '../images/bleach.svg';
import ironing from '../images/ironing.svg';
import towel from '../images/towel.svg';
import shirt from '../images/shirt.jpg';
import tshirt from '../images/t-shirt.jpg';
import trousers from '../images/trousers.jpg';
import jeans from '../images/jeans.jpg';
import joggers from '../images/joggers.jpg';
import sarees from '../images/sarees.jpeg';
import boxers from '../images/boxers.jpg';
import './Productlist.css';

const Productlist = () => {
  return (
    <div className='main-container'>
        <p className='product'>Product Types</p>
        <p className='quantity'>Quantity</p>
        <p className='washtype'>Wash Type</p>
        <p className='price'>Price</p>
        <div>
        <p className="image1"><img src={shirt} alt="shirt" height="50px" width="50px"></img></p>
        <p className="shirts" >Shirts</p>
        <p className="paragraph">Lorium ipsum is simply dummy text</p>
        <input className="quantity1" type="text"></input>
        <img src={washingmachine} alt="washingmachine" className="washing1"></img>
        <img src={ironing} alt="ironing" className="ironing1"></img>
        <img src={towel} alt="towel" className="towel1"></img>
        <img src={bleach} alt="bleach" className="bleach1"></img>
        <p className="price1">-</p>
        <button className='reset1'>Reset</button>
        </div>

        <div>
        <p className="image2"><img src={tshirt} alt="tshirt" height="50px" width="50px"></img></p>
        <p className="tshirt" >TShirts</p>
        <p className="paragraph2">Lorium ipsum is simply dummy text</p>
        <input className="quantity2" type="text"></input>
        <img src={washingmachine} alt="washingmachine" className="washing2"></img>
        <img src={ironing} alt="ironing" className="ironing2"></img>
        <img src={towel} alt="towel" className="towel2"></img>
        <img src={bleach} alt="bleach" className="bleach2"></img>
        <p className="price2">-</p>
        <button className='reset2'>Reset</button>
        </div>

        <div>
        <p className="image3"><img src={trousers}  alt="trousers" height="50px" width="50px"></img></p>
        <p className="trousers" >Trousers</p>
        <p className="paragraph3">Lorium ipsum is simply dummy text</p>
        <input className="quantity3" type="text"></input>
        <img src={washingmachine} alt="washingmachine" className="washing3"></img>
        <img src={ironing} alt="ironing" className="ironing3"></img>
        <img src={towel} alt="towel" className="towel3"></img>
        <img src={bleach} alt="bleach" className="bleach3"></img>
        <p className="price3">-</p>
        <button className='reset3'>Reset</button>
        </div>

        <div>
        <p className="image4"><img src={jeans}  alt="jeans" height="55px" width="55px"></img></p>
        <p className="jeans" >Jeans</p>
        <p className="paragraph4">Lorium ipsum is simply dummy text</p>
        <input className="quantity4" type="text"></input>
        <img src={washingmachine} alt="washingmachine" className="washing4"></img>
        <img src={ironing} alt="ironing" className="ironing4"></img>
        <img src={towel} alt="towel" className="towel4"></img>
        <img src={bleach} alt="bleach" className="bleach4"></img>
        <p className="price4">-</p>
        <button className='reset4'>Reset</button>
        </div>

        <div>
        <p className="image5"><img src={joggers} alt="joggers" height="80px" width="80px"></img></p>
        <p className="joggers" > Joggers</p>
        <p className="paragraph5">Lorium ipsum is simply dummy text</p>
        <input className="quantity5" type="text"></input>
        <img src={washingmachine} alt="washingmachine" className="washing5"></img>
        <img src={ironing} alt="ironing" className="ironing5"></img>
        <img src={towel} alt="towel" className="towel5"></img>
        <img src={bleach} alt="bleach" className="bleach5"></img>
        <p className="price5">-</p>
        <button className='reset5'>Reset</button>
        </div>

        <div>
        <p className="image6"><img src={boxers} alt="" height="80px" width="80px"></img></p>
        <p className="boxers" >Boxers </p>
        <p className="paragraph6">Lorium ipsum is simply dummy text</p>
        <input className="quantity6" type="text"></input>
        <img src={washingmachine} alt="washingmachine" className="washing6"></img>
        <img src={ironing} alt="ironing" className="ironing6"></img>
        <img src={towel} alt="towel" className="towel6"></img>
        <img src={bleach} alt="bleach" className="bleach6"></img>
        <p className="price6">-</p>
        <button className='reset6'>Reset</button>
        </div>

        <div>
        <p className="image7"><img src={sarees} alt="sarees" height="60px" width="60px"></img></p>
        <p className="sarees" >Others </p>
        <p className="paragraph7">Lorium ipsum is simply dummy text</p>
        <input className="quantity7" type="text"></input>
        <img src={washingmachine} alt="washingmachine" className="washing7"></img>
        <img src={ironing} alt="ironing" className="ironing7"></img>
        <img src={towel} alt="towel" className="towel7"></img>
        <img src={bleach} alt="bleach" className="bleach7"></img>
        <p className="price7">-</p>
        <button className='reset7'>Reset</button>
        </div>


        
        <button className="closebtn">Cancel</button>
        <button className="proceedbtn">Proceed</button>

    </div>
        
  );
}

export default Productlist;
