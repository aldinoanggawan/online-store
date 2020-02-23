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

import cartlogo from '../cart-logo.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="light" light expand="md">
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
                        <DropdownMenu right>
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
                            <img src={cartlogo} width="20"/>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar