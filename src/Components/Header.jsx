import {useContext} from 'react'
import { Link } from "react-router-dom";

import StoreContext from  '../Context/Store';

//Bootstrap
import {Navbar, Nav, Container} from 'react-bootstrap';


const Header = () => {
  const sumatoria = (a,b)=>a+b;
  const {store} = useContext(StoreContext);
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
              <Link to="/carrito" className="link position-relative">
                {/* { store.total > 0 && ( */}
                  <span className="position-absolute top-5 start-100 p-2 translate-middle badge rounded-pill bg-primary">
                    <span className="visually-hidden">unread messages</span>
                  </span>
                {/* )} */}
              <i className="icon-basket "/>
              </Link>
            </Nav.Link>

            { store.total > 0 && (
              <>
                <Nav.Link>Items: {store.cantidades.reduce(sumatoria)}</Nav.Link>
                <Nav.Link>Total: {store.total}</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header;