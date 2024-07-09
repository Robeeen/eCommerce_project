import React from 'react'
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa";
import { FcCdLogo } from "react-icons/fc";



function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><FcCdLogo fontSize="50px" /></Navbar.Brand>
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
                    <FaShoppingCart color="white" fontSize="20px" style={{marginRight: 10}} />
                    Cart
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/cart">Cart is Empty</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
          </Nav>
        </Container>

    </Navbar>
  )
}

export default Header