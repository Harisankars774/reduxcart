import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function View() {
  return (
    <div className='container my-5 pt-5'>
       <div style={{height:"80vh"}} className='row align-items-center'>
        <div className="col-lg-6">
          <img className='img-fluid' style={{height:'420px'}} src=" https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1148262/6CbZ5knq0A-1148262_1.jpg" alt="product"/>
         <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-info'> ADD TO WISHLIST</button>
            <button className='btn btn-success me-5'>ADD TO CART</button>
         </div>
        </div>
        <div className="col-lg-6">
          <h3 className='fw-bold'>Title</h3>
          <h2 className='fw-bold'>$ 30</h2>
          <h4 className='fw-bold'>Brand: </h4>
          <h4 className='fw-bold'>Category: </h4>
          <h4 className='fw-bold'>Description: </h4>
         <h5 className='fw-bold'>Client Reviews: </h5>
         <div className='border rounded p-2 shadow my-2'>
             <p><span className='fw-bolder'>Name:</span>Message</p>
             <p>Rating:5<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
         </div>
        </div>
       </div>
    </div>
  )
}

export default View