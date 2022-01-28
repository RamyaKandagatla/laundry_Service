import React from 'react';
import Createorderside from './Createorderside';
import Createtopnav from '../components/createtopnav';
import Productlist from './Productlist';



export default function Products() {
  return (
    <>
    <Createtopnav/>
    <Createorderside/>
    <Productlist/>
    </>
  );
}
