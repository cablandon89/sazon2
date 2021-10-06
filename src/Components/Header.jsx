import { Link } from "react-router-dom";

//Bootstrap
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link">
            <i className="icon-food"/>
            Sazón cafetero
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to="/carta" className="link">
                Carta
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/carrito" className="link">
                Carrito
              </Link>
            </Nav.Link>
            <Nav.Link>Items: {0}</Nav.Link>
            <Nav.Link>Total: {0}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header;