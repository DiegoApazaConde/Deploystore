import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CarritoContext } from '../Constext/carritoContext';
import { AuthContext } from '../Constext/authContext';
export default function NavTop() {

  const {userState,signOut} = useContext(AuthContext)

  const {carrito} = useContext(CarritoContext)
  return (
    <div>
       <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Tienda</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/" className='nav-link'>Inicio</Link>
        <Link to="/productos" className='nav-link'>Productos</Link>
        </Nav>
        {userState?
        (
          <NavDropdown
              title={
                <div className='d-inline'>
                    <img src={userState.photoURL}
                    className='me-2'
                    style={{borderRadius:'50%',width:'30px'}}
                      alt='avatar'
                    />
                    <span>{userState.displayName}</span>
                </div>
              }
         > 
            <NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
         </NavDropdown>
        ):
            <Link to="/login" className='nav-link'>Ingresar</Link>
        }
        <Link to="/carrito" className='nav-link'>
          <Badge badgeContent={carrito.length} color="primary">
          <ShoppingCartIcon />
          </Badge>
        </Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
