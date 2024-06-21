import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Productos = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://66467a4d51e227f23aaf08fb.mockapi.io/endpoints/productos')
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })

  }, [])

  return (
    <main>
      <h1 className='text-center mb-4'>Productos</h1>
      <div className="d-flex flex-wrap justify-content-center gap-5">
      {
        loading ? <h1>Cargando...</h1> : (
          data?.map(producto => (
            <div className="card" style={{ width: '18rem' }}>
              <img src={producto.image} className="card-img-top" alt={producto.name} />
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">{producto.precio}</p>
                <a href="#" className="btn btn-primary">Lo quiero!</a>
              </div>
            </div>
          ))
        )
      }</div>
      <ul><Link to="/Home">Ir a Home</Link></ul> 
      <ul><Link to="/contacto">Ir a Contacto</Link></ul> 
    </main>
  )
}

export default Productos