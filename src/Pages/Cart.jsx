

import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, emptyCart, incrementCart, removeCartItem } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'
function Cart() {
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const[cartTotal,setCartTotal]=useState()
  const navigate=useNavigate()
  useEffect(()=>
  {
    setCartTotal(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])
  const handleDecrementCart=(product)=>
  {
    if(product.quantity>1)
    {
      dispatch(decrementCart(product.id))
    }
    else
    {            
      dispatch(removeCartItem(product.id))
    }
  }
  const handleCheckOut=()=>
  {
    dispatch(emptyCart())
    Swal.fire(
      {
        title:"Order placed successfully",
        text:"Thank you for purchasing with us",
        icon:"success",
        confirmButtontext:"ok"
      }
    )
    navigate('/')
  }
  return (
    <>
      <Header/>
      {
             userCart?.length>0?
      <div className='container my-5'>
        <h1 className='pt-5 text-danger fw-bold'>User's Cart</h1>
        <div className='row'>
          <div className="col-lg-8 border shadow">
            <table className='table '>
               <thead>
                <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                  </tr>
               </thead>
               <tbody>
              {

                userCart.map((item,index)=>(
                    <tr key={item?.id}>
                  
                    <td>{index+1}</td>
                    <td>{item?.title}</td>
                    <td><img src={item?.thumbnail} alt=" " width={'50px'} height={'50px'}/></td>
                    <td>
                      <div className='d-flex'>
                        <button onClick={()=>handleDecrementCart(item)} className='btn fs-1'>-</button>
                        <input style={{width:'40px'}} value={item?.quantity} readOnly/>
                        <button onClick={()=>dispatch(incrementCart(item?.id))} className='btn fs-1'>+</button>
                      </div>
                    </td>
                    <td>  
                     {item?.totalPrice} 
                    </td>
                    <td onClick={()=>dispatch(removeCartItem(item?.id))} className='text-danger fs-1 fw-bold'>
                     X
                    </td>
                  </tr>    

                ))
              }
               </tbody>
            </table>
           <div className='float-end'>
            <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>EMPTY CART</button>
            <Link to={'/'} className='mx-2 btn btn-info'>SHOP MORE</Link>
           </div>
          </div>  
          <div className="col-lg-4">
            <div className='border rounded shadow p-5'>
              <h3>Total Amount:<span className='text-danger'>${cartTotal}</span></h3>
              <hr/>
              <button className='btn btn-success w-75' onClick={handleCheckOut}>CHECKOUT</button>
            </div>
          </div>
        </div>
     </div>
     :  //empty cart
     <div className='d-flex justify-content-center align-items-center flex-column'>
                     <img className='img-fluid' src='https://www.shutterstock.com/image-vector/no-shopping-cart-sign-crossed-260nw-779615785.jpg' alt=''/>
                     <h1>Your cart is empty</h1>  
                     <Link to={'/'} className='btn btn-dark'>Add More</Link>
               </div> 
        }
    </>
  )
}

export default Cart