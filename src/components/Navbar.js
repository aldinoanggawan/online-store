import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
import styled from 'styled-components'

import cartlogo from '../cart-logo.png'

const NavBar = () => {
    const Div = styled.div`
        .drop-down{
            background-color: snow;
        }

        .dropdown-item{   
            :hover {
                background-color: lavenderblush; 
              }
        }
    `

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Div>
        <Navbar style={{backgroundColor: 'snow'}} light expand="md">
            <NavbarBrand href="/">B.O.B.O.I</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">H O M E</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            S H O P
                        </DropdownToggle>
                        <DropdownMenu className="drop-down" right>
                            <DropdownItem>
                                All
                            </DropdownItem>
                            <DropdownItem>
                                Tops
                            </DropdownItem>
                            <DropdownItem>
                                Bottoms
                            </DropdownItem>
                            <DropdownItem>
                                Dresses
                            </DropdownItem>
                            <DropdownItem>
                                Jumpsuit
                            </DropdownItem>
                            <DropdownItem>
                                Two-Piece
                            </DropdownItem>
                            <DropdownItem>
                                Accesories
                            </DropdownItem>
                            <DropdownItem>
                                Bags
                            </DropdownItem>
                            <DropdownItem>
                                Swimsuit
                            </DropdownItem>
                            <DropdownItem>
                                Outerwear
                            </DropdownItem>
                            <DropdownItem>
                                Shoes
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/">S A L E</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">
                            <img src={cartlogo} alt="cart-logo" width="20"/>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </Div>
    )
}

export default NavBar