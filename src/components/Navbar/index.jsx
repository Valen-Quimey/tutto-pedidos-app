import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import { useCartContext } from '../../context/CartContext';


const NavBar = ({children}) => {

    const {cantidadTotal} = useCartContext()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/'>React-Bootstrap</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/category/gorras'>Semana</NavLink>
                        <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to="/category/remeras">Hoy</NavLink>
                        
                    </Nav>
                    <Nav>
                        <Link to='/cart'>
                            {cantidadTotal()} <CartWidget saludo={'hola saludos'} />    
                        </Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {children}
        </>
)}

export default NavBar