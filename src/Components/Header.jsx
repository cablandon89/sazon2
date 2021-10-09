import {useContext} from 'react'
import { Link } from "react-router-dom";

import StoreContext from  '../Context/Store';

//utiles
import {formatCop} from '../Utiles/utiles';

//Bootstrap
import {Navbar, Nav, Container} from 'react-bootstrap';


const Header = () => {
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
            <Link to="/carta" className="nav-link link">
              Carta
            </Link>
            <Link to="/carrito" className="nav-link link position-relative">
              { store.length > 0 && (
                <span className="position-absolute top-5 start-100 p-2 translate-middle badge rounded-pill bg-primary">
                   <span className="visually-hidden">unread messages</span>
                </span>
              )}
            <i className="icon-basket "/>
            </Link>

            { store.length  && (
              <>
                <Nav.Link href="#">Items: {store.reduce((sum,value) => (sum + value.quantity),0)}</Nav.Link>
                <Nav.Link href="#">Total: {formatCop.format(store.reduce((sum,value) => (sum + value.total),0))}</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header;