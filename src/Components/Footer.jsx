
import React from 'react'
import { FaArrowRight,FaTruck, FaFacebook, FaForward, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaMessage,FaPhone } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-info p-4'>
      <div className="row mt-3">
        <div className='col-3'>
              <div className='d-flex'>
                <FaTruck className='fs-4 mx-2'/>
                 <h3>DailyCart</h3>
                  
              </div>
               <p>Designed and built with all love in the world by Luminar Team with the help of our contributors</p>
               <p>Code licensed Luminar.docs CC By 3.0</p>
               <p>Currently v5.3.2</p>
        </div>
        <div className='col-3 '>
            <h3>Links</h3>
            <p>Home</p>
            <p>Wishlist</p>
            <p>Cart</p>
        </div>
        <div className='col-3'>
           <h3>Guides</h3>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>React Router</p>
        </div>
        <div className='col-3'>
           <h3>Contact Us</h3>
          <div className='d-flex'>
             <input type='text' placeholder='Email here' className='form-control w-50'/>
             <FaArrowRight  className=' fs-4 ms-4'/>
          </div>
          <div className='d-flex mt-3 fs-4'>
             <FaFacebook className='mx-2'/>
             <FaTwitter className='mx-2'/>
             <FaWhatsapp className='mx-2'/>
             <FaInstagram className='mx-2'/>
             <FaMessage className='mx-2'/>
             <FaPhone className='mx-2'/>
          </div>
           
        </div>
      </div>
      <div className='text-center mt-5'>
          <p>CopyRight &copy; July 2026 Batch,Daily Cart,Build with React Redux</p>
      </div>
    </div> 
  )
}

export default Footer