import React, {useState} from 'react';
import {Container, Navbar, NavLink} from 'react-bootstrap'
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

function Header() {
  
  return (
    <section>
      <Navbar expand={'lg'} bg={'light'} variant={'light'}>
      <Navbar.Brand href={'#home'}>Movie Browser</Navbar.Brand>
        <NavbarCollapse className={'mr-auto'}>
          <NavLink>Home</NavLink>
          <NavLink>Search for movie</NavLink>
          <NavLink>Contact</NavLink>
        </NavbarCollapse>
      </Navbar>
    </section>
  );
}

export default Header;