import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <h1 className='text-center'>Bienvenidos a Home</h1>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/imagen producto 1.jpg" className="d-block w-100" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src="images/imagen producto 2.jfif" className="d-block w-100" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src="images/imagen producto 3.jpg" className="d-block w-100" alt="Slide 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
    <ul><Link to="/contacto">Ir a Contacto</Link></ul>

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>Email: ejemplo@correo.com</li>
              <li>Teléfono: +123 456 7890</li>
              <li>Dirección: Calle Falsa 123, Ciudad, País</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
    </main>
  )
}

export default Home