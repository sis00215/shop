import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';


function App() {

  let [tents] = useState(data);

  return (
    <div className="App">
      <Navbar bg="Red" data-bs-theme="Red">
        <Container>
          <Navbar.Brand href="#home">TentShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'> </div>
       {/* Columns of products */}
       <Container>
        <Row style={{marginTop: '15px'}}>
         {/* component for listing products */}
         <Card tents={tents}/>   
        </Row>
       </Container>
      </div>
  );
}

//Card component for listing products
function Card(props){
  return (
    props.tents.map((tent, i) => (
      <Col sm={4} key={tent.id}>
        <img src={tent.image} alt={tent.Category} width="80%" />
        <h6>{`Price: $${tent.price}`}</h6>
        <div className='description'>
          <p><span style={{ fontWeight: 'bold' }}>Category:</span> {tent.Category}</p>
          <p><span style={{ fontWeight: 'bold' }}>Packaged Weight:</span> {tent.PackagedWeight}</p>
          <p><span style={{ fontWeight: 'bold' }}>Floor Dimensions:</span> {tent.FloorDimensions}</p>
          <p><span style={{ fontWeight: 'bold' }}>Capacities:</span> {tent.Capacities}</p>
        </div>
      </Col>
    ))
  );
  
}



export default App;