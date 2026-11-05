import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
      <div
     style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
    <img className='w-50' src="https://www.innonet.nl/wp-content/uploads/2017/11/Page-not-found.png" alt="page not found"/>
    <h1 className='my-5'>WE ARE SORRY,LOOK LIKE YOU LOST</h1>
    <Link to={'/'} className='btn btn-info'>BACK TO HOME</Link>
    </div>
  )
}

export default PageNotFound  