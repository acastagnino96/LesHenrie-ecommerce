import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import Logo from "../src/assets/images/Logo.png";

function BasicExample() {
  return (
    <Navbar className="nvbar sticky-top" expand="lg">
      <Container className="d-block d-lg-flex">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo}  height={32}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='float-end'/>
        <Navbar.Collapse id="basic-navbar-nav" className='pb-4 pb-lg-0'>
          <Nav className="menuInicio me-auto">
            <Nav.Link as={Link} to="/" className="linkTodos pt-5 pt-lg-2">Home</Nav.Link>
            <Nav.Link href="/#nosotras" className="linkTodos pt-5 pt-lg-2">Nosotras</Nav.Link>
            <NavDropdown title="La tienda" className="linkTodos pt-5 pt-lg-0" id="basic-nav-dropdown">
                <div className="menuDropdown">
                  <NavDropdown.Item as={Link} to="/products" className="dropdownText">Todos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/tarteletas" className="dropdownText">Tarteletas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/bombones" className="dropdownText">Bombones</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/mentitas" className="dropdownText">Mentitas</NavDropdown.Item>
                </div>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex justify-content-end pb-2 pb-lg-0 pt-3 pt-lg-0">
          <div className="logInExt">
            <Nav.Link as={Link} to="#login" className="logInIcon px-4">Log In</Nav.Link>
          </div>
          <CartWidget/>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
