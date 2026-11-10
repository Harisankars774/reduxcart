import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card  from 'react-bootstrap/Card'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Wishlist() {
  const userWishlist=useSelector(state=>state.WishlistReducer)
  return (
    <>
      <Header/>
      <div className='container my-5'>
      {
        userWishlist?.length>0 ?
         <>
              <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
        <div className='row pt-5'>
              {/*Duplicate accroding to product count */}
              {
                userWishlist?.map(item=>
                (
                   <div className="col-3" key={item?.id}>
                  {/*Cards  */}
               <Card className='shadow p-2'>
        <Card.Img style={{height:'250px'}} variant='top' src={item?.thumbnail} />
        <Card.Body className='text-center'>
          <Card.Title>{item?.title}</Card.Title>
          <div className='d-flex justify-content-evenly'>
               <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>
          </div>
        </Card.Body>
      </Card>
              </div>
                )
                )
              }
          </div>
         
         </>
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
                <img className='img-fluid' src='https://www.shutterstock.com/image-vector/no-shopping-cart-sign-crossed-260nw-779615785.jpg' alt=''/>
                <h1>Your Wishlist is empty</h1>  
                <Link to={'/'} className='btn btn-dark'>Add More</Link>
          </div>
      }
      </div>
    </>
  )
}

export default Wishlist