import React from 'react';
import {Navbar, NavLink} from 'react-bootstrap'
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  
  return (
    <section>
      <Navbar expand={'lg'} bg={'light'} variant={'light'}>
        <Navbar.Brand href={'#'}>Movie Browser</Navbar.Brand>
        <NavbarCollapse className={'mr-auto'}>
            <LinkContainer to={'/'}>
              <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer to={'/search'}>
              <NavLink>Search for movie</NavLink>
            </LinkContainer>
            <LinkContainer to={'/contact'}>
              <NavLink>Contact</NavLink>
            </LinkContainer>
        </NavbarCollapse>
      </Navbar>
    </section>
  );
}

export default Header;