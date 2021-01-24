import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export const MenuBar = () => (
  <Navbar bg='dark' variant='dark' expand="lg">
    <Navbar.Brand href="">Sorting Visualizer</Navbar.Brand>
    <Navbar.Toggle className='navbar-hamburger' bg='dark' aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Item><Link className='nav-link sort-elem' to="/">Bubble Sort</Link></Nav.Item>
        <Nav.Item><Link className='nav-link sort-elem' to="/merge-sort">Merge Sort</Link></Nav.Item>
        <Nav.Item><Link className='nav-link sort-elem' to="/quick-sort">Quick Sort</Link></Nav.Item>
        <Nav.Item><Link className='nav-link sort-elem' to="/heap-sort">Heap Sort</Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)