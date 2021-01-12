import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Minotaur Games and Gifts',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Minotaur Gifts and Games',
        subTitle: 'Gifts and games that are fun',
        text: 'Offering curbside pickup!'
      },
      about: {
        title: 'About Us'
      },
      contact: {
        title: 'Ask us anything'
      }
    }
  }
  
  
  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="sm">
            <Navbar.Brand>Minotaur</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
