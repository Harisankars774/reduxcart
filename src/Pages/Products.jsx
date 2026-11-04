import React from 'react'
import Card  from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div className='m-5'>
        <div className='row'>
            {/*Duplicate accroding to product count */}
            <div className="col-3">
                {/*Cards  */}
             <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'250px'}} variant='top' src="https://cdn.pixabay.com/photo/2024/05/13/20/10/ai-generated-8759674_1280.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>Perfume</Card.Title>
        <Link to={'/products/:id'} className='btn btn-primary'>View More</Link>
      </Card.Body>
    </Card>
            </div>
        </div>
    </div>
  )
}

export default Products