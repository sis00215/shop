
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate}from 'react-router-dom';
;

//Component for main page
function MainPage(props){
  
    return (
      <Container fluid>
        <div className='main-bg'>
          {/* Your main-bg content, such as an image */}
        </div>
        <Row style={{marginTop: '15px'}}>
          {/* component for listing products */}
          <Card tents={props.tents} />   
        </Row>
      </Container>
    );
  }
  
  
 // Card component for listing products
function Card(props) {
  let navigate = useNavigate();
  return (
    props.tents.map((tent, i) => (
      <Col sm={4} key={tent.id}>
        {/* Add a unique id to the container element */}
        <div id={`container-${i}`} className="card-container">
          <img
            src={tent.image}
            alt={tent.Category}
            width="80%"
            onClick={() => navigate('/details/'+i)}
          />
          <h6>{tent.name}</h6>
          <p>{`$${tent.price}`}</p>
        </div>
      </Col>
    ))
  );
}


  export {MainPage, Card};