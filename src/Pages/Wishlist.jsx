import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card  from 'react-bootstrap/Card'
import Header from '../Components/Header'
function Wishlist() {
  return (
    <>
      <Header/>
      <div className='container my-5'>
        <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
        <div className='row pt-5'>
              {/*Duplicate accroding to product count */}
              <div className="col-3">
                  {/*Cards  */}
               <Card className='shadow p-2'>
        <Card.Img style={{height:'250px'}} variant='top' src="https://cdn.pixabay.com/photo/2024/05/13/20/10/ai-generated-8759674_1280.jpg" />
        <Card.Body className='text-center'>
          <Card.Title>Perfume</Card.Title>
          <div className='d-flex justify-content-evenly'>
               <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>
          </div>
        </Card.Body>
      </Card>
              </div>
          </div>
      </div>
    </>
  )
}

export default Wishlist