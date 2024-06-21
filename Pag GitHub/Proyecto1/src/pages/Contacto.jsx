import React from 'react'
import { Link } from 'react-router-dom'

const Contacto = () => {
  return (
    <main>

    <h1 className='text-center'>Contacto</h1>
<div className="mb-4 ">
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com"  />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
      
     <ul><Link to="/Home">Ir a Home</Link></ul> 
     <ul><Link to="/Productos">Ir a Producto</Link></ul> 
    </main>
  )
}



export default Contacto