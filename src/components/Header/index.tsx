import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap';

const Header = () => {
  return (
      <header>
        <Navbar color="pink" light expand="md">
          <Link to="/" className="navbar-brand">Guild Wars 2 Stuff</Link>
          <NavbarToggler onClick={function noRefCheck() {
          }}/>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              {/*<NavItem>*/}
              {/*  <NavLink to="items" className="nav-link">*/}
              {/*    Items*/}
              {/*  </NavLink>*/}
              {/*</NavItem>*/}
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  API
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="items" className="nav-link">Items</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownToggle caret nav>
                      Accounts
                      <DropdownMenu end>
                        <DropdownItem>
                          <NavLink to="character" className="nav-link">Characters</NavLink>
                        </DropdownItem>
                      </DropdownMenu>

                    </DropdownToggle>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              User Info
            </NavbarText>
          </Collapse>
        </Navbar>
      </header>
  );
};

export default Header;