
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useSelector } from 'react-redux';


function TopBar () {
  const { user } = useSelector((state) => state.auth)
  let display = (
    <>
     <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/"><h2>Home</h2></Nav.Link><br/>
                  <Nav.Link href="/profile"><h2>Workout Log</h2></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </>
  )
  
  if (user== null){
    display =
    <>
     <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="signIn"><h2>Login</h2></Nav.Link><br/>
                  <Nav.Link href="signUp"><h2>Register</h2></Nav.Link><br/>
                  <Nav.Link href="/"><h2>Home</h2></Nav.Link><br/>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </>
  }
 
  return (
  
      <div>   
     {display}

          
       </div>

      
     
    )
    
  
  
}

export default TopBar;