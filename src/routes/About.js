import React  from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, Link, Outlet,useNavigate }from 'react-router-dom'
import data from '../components/data.js';
import Button from 'react-bootstrap/Button';


const About = ()=>{
    let navigate = useNavigate();

    return(
      <div>
        <h4>About the Company</h4>
        <Outlet></Outlet>
        <Button variant="info" onClick={()=>{
            navigate('/about/member')
        }}>Member</Button>{' '}
        <Button variant="info" onClick={()=>{
            navigate('/about/location')
        }}>Location</Button>{' '}
      </div>
    );
}
const Member = ()=>{
    return(
      <div>
        <p>Our Member </p>
      </div>
    );
}

const Location = ()=>{
    return(
      <div>
        <p>Our Location </p>
      </div>
    );
}
export  {About, Member, Location};