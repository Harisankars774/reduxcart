import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
function Cart() {
  return (
    <>
      <Header/>
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
                <tr>
                    <td>1</td>
                    <td>Eyeshadow</td>
                    <td><img src="https://img.magnific.com/premium-psd/png-photo-laptop-screen-electronics-computer_53876-653212.jpg?semt=ais_hybrid&w=740&q=80 " alt=" " width={'50px'} height={'50px'}/></td>
                    <td>
                      <div className='d-flex'>
                        <button className='btn fs-1'>-</button>
                        <input style={{width:'40px'}} value={10} readOnly/>
                        <button className='btn fs-1'>+</button>
                      </div>
                    </td>
                    <td>
                      <p>$ 5.30</p>
                    </td>
                    <td>
                     <button className='btn btn-danger'> <FontAwesomeIcon icon={faXmark} /></button>
                    </td>
                  </tr>
               </tbody>
            </table>
           <div className='float-end'>
            <button className='btn btn-danger'>EMPTY CART</button>
            <Link to={'/'} className='mx-2 btn btn-info'>SHOP MORE</Link>
           </div>
          </div>
          <div className="col-lg-4">
            <div className='border rounded shadow p-5'>
              <h3>Total Amount:<span className='text-danger'>$300</span></h3>
              <hr/>
              <button className='btn btn-success w-75'>CHECKOUT</button>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Cart