import React from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler, NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

const Header = () => {
  return (
      <header>
        <Navbar color="pink" light expand="md">
          <NavLink href="/" className="navbar-brand">Guild Wars 2 Stuff</NavLink>
          <NavbarToggler onClick={function noRefCheck() {
          }}/>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  API
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <NavLink href="items" className="nav-link">Items</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="accounts" className="nav-link">Accounts</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText className="me-4">
              User Info
            </NavbarText>
          </Collapse>
        </Navbar>
      </header>
  );
};

export default Header;