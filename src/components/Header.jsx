import React from 'react'
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa";



function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/e">Shopping Cart</Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl 
            style={{width: 500}}
            placeholder="search a product"
            className="m-auto"
            />
          </Navbar.Text>
          <Nav>
          <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    <FaShoppingCart color="white" fontsize="25px" style={{marginRight: 10}} />
                    Cart
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Cart is Empty</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
          </Nav>
        </Container>

    </Navbar>
  )
}

export default Header