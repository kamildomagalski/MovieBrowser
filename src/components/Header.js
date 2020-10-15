import React from 'react';
import {Container, Navbar, NavLink} from 'react-bootstrap'
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  
  return (
    <Navbar expand={'lg'} bg={'light'} variant={'light'}>
      <Container>
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
      </Container>
    </Navbar>
  
  );
}

export default Header;