import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTruckFast} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

function Header({insideProduct}) {
  const userWishList=useSelector(state=>state.WishlistReducer)
  const dispatch=useDispatch()
  return (
        <Navbar expand="lg" className="bg-info fixed-top">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faTruckFast}/>E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         {
            insideProduct && <Nav.Item>
           <input type="text" onChange={(e)=>dispatch(searchProduct(e.target.value))} className='form-control' placeholder='search your products'/>
         </Nav.Item>
         }
         <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faHeart} className='btn btn-danger me-2'/>Wishlist<Badge pill bg="secondary">{userWishList?.length}</Badge></Link>
          <Link to={'/cart'} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faCartPlus} className='btn btn-success me-2'/>Cart<Badge pill bg="secondary">10</Badge></Link>
          </Nav>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header