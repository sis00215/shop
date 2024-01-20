import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet}from 'react-router-dom'
// importing pages and data
import data from './components/data.js';
import {MainPage, Card} from'./routes/MainPage.js';
import {Products, Detail} from './routes/Products.js';
import NotFound from'./routes/NotFound.js';
import {About, Member, Location} from'./routes/About.js';
import {Event, EventOne, EventTwo} from'./routes/Event.js';


function App() {

  let [tents] = useState(data);
  // let MainPage = useState(MainPage);

  return (
    <div className="App">
      <Navbar bg="grey" data-bs-theme="grey">
        <Container fluid>
          <Navbar.Brand href="/">TentShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link" replace>Home </Link>
            <Link to="/products" className="nav-link" replace>Products</Link>
            <Link to="/about" className="nav-link" replace> About </Link>
            <Link to="/event" className="nav-link" replace>Event</Link>
           <Link to="#pricing" className="nav-link" replace> Pricing</Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routes for diffrenet page layouts */}
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={ <div><MainPage tents={tents}/></div> }/>
        <Route path="/products" element={<div><Products/></div>}>

        </Route>
        <Route path="/details/:id" element={<div><Detail tents={tents}/></div>}></Route>
        <Route path="/about" element={<About/>}> 
          <Route path="/about/member" element={<Member/>}></Route>
          <Route path="/about/location" element={<Location/>}></Route>
        </Route>
        <Route path="/event" element={<Event/>}>  
         <Route path="/event/EventOne" element={<EventOne/>}></Route> 
         <Route path="/event/EventTwo" element={<EventTwo/>}></Route> 
        </Route>

      </Routes>


    </div>
  );
}

export default App;