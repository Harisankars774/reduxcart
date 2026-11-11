import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card  from 'react-bootstrap/Card'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

function Wishlist() {
  const userWishlist=useSelector(state=>state.WishlistReducer)
  const userCart  =useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const handleCart=(product)=>
    {
      //check the product already in cart
      const existingItem=userCart?.find(item=>item?.id==product?.id)
      dispatch(addCart(product))
      dispatch(removeWishlistItem((product.id)))
      Swal.fire({
             title:"success",
             text:existingItem? `${existingItem.title} quantity incremented` : "product added to your cart ",
             icon:"success",
             confirmButtonText:"ok"
      })
     
    }
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
               <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                <button onClick={()=>handleCart(item)} className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>
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