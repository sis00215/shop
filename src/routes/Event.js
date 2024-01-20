import React  from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet}from 'react-router-dom'



const Event = ()=>{
    return(
        <div>
            <h3>Today's Event</h3> 
            <Outlet></Outlet>
        </div>
    );
}

const EventOne = ()=>{
    return(
        <div>
            <p>Free Cabbage Jerkey on first order</p>
        </div>
    );
}

const EventTwo = ()=>{
    return(
       <div>
         <p>Claim birthday coupon</p>
       </div> 
    );
}

export {Event, EventOne, EventTwo};
