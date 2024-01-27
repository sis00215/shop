
import React,{useEffect}   from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, Link, useParams }from 'react-router-dom'
import data from '../components/data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




const Products = () => {
  let [tents] = useState(data);
  
    return(
    tents.map((tent,i)=>(
    <div className="container" id={`tent-${i}`} key={i}>
      <div className="row">
        <div className="col-md-6">
          <img src= {tent.image} style={{ width: '100%', height: 'auto'}} />
        </div>

        <div className="col-md-6 d-flex justify-content-center">
        <div className="col-md-6 ">
          <h2 className="pt-5">{tent.name}</h2>
          <h4>${tent.price}</h4>
           <p><span style={{ fontWeight: 'bold' }}>Category:</span> {tent.Category}</p>
            <p><span style={{ fontWeight: 'bold' }}>Packaged Weight:</span> {tent.PackagedWeight}</p>
            <p><span style={{ fontWeight: 'bold' }}>Floor Dimensions:</span> {tent.FloorDimensions}</p>
            <p><span style={{ fontWeight: 'bold' }}>Capacities:</span> {tent.Capacities}</p>
          <button className="btn btn-danger" style={{ marginTop: '20px' }}>ORDER</button> 
        </div>
        </div>
      </div>
    </div>
    ))
    );
    }

 const Detail = (props) =>{
  let {id} = useParams();
  let tent = props.tents.find((x)=>x.id==id)
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)

  useEffect(()=>{
    let timer = setTimeout(()=>{ setAlert(false)}, 3000)
  
    return ()=>{
      clearTimeout(timer)
    }
  },[])



      return(

        
        <div className="container">
          {/* Promotion button ends in 3 seconds */}
          { 
            alert == true ?  
            <div>
            <div className ="alert alert-warning">Promotion ends in 3sec</div> 
           <Button variant="warning">Claim Promo</Button>{' '}
           </div>
           : null
          } 
      
        <div className="row">
          <div className="col-md-6">
            <img src= {tent.image} style={{ width: '100%', height: 'auto'}} />
          </div>
          {/* Product details */}
          <div className="col-md-6 d-flex justify-content-center">
          <div className="col-md-6 ">
            <h2 className="pt-5">{tent.name}</h2>
            <h4>${tent.price}</h4>
             <p><span style={{ fontWeight: 'bold' }}>Category:</span> {tent.Category}</p>
              <p><span style={{ fontWeight: 'bold' }}>Packaged Weight:</span> {tent.PackagedWeight}</p>
              <p><span style={{ fontWeight: 'bold' }}>Floor Dimensions:</span> {tent.FloorDimensions}</p>
              <p><span style={{ fontWeight: 'bold' }}>Capacities:</span> {tent.Capacities}</p>
            <button className="btn btn-danger" style={{ marginTop: '20px' }}>ORDER</button> 
          </div>
          </div>
        </div>
      </div>
      );
    }

export {Products, Detail};