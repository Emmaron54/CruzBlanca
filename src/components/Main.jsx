import Galeria from "./Galeria";
import Opiniones from "./Opiniones";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-start mb-3 ps-5">
          <h1 className="fw-bold display-5">
            Bienvenido a <span className="resalto">Cruz Blanca</span>
          </h1>
          <p className="lead">
            Productos para cuidado de la piel <div>Confiables y de calidad</div>
          </p>
       
        </div>
        <div className="col-md-6 text-center mb-3 ps-4">
          <img
            className="img-fluid rounded-4 shadow-sm img1"
            style={{ maxHeight: "350px", objectFit: "cover" }}
            src="/imagen1.png"
            alt="Servicios de salud"
          />
        </div>
      </div>

      <section
        id="producto"
        data-aos="fade-up"
        className="mt-5 text-center py-4 container producto"
      >
        <div className="text-center mb-4">
          <h2 className="resalto linea">Nuestro Producto</h2>
          <p className="lead">
            Conoce el producto que ha acompañado a miles de familias durante
            años.
          </p>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <img
              className="imagen-producto btnan"
              src="/imagen11.png"
              alt="Producto Cruz Blanca"
            />
          </div>

          <div className="col-md-8 text-start mt-md-4 parrafoseparado">
            <h3 className="fw-bold resalto1">CRUZ BLANCA</h3>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              consequuntur voluptas tempore est hic accusantium, suscipit
              laudantium blanditiis, id minus aliquam placeat tempora quis.
              Iusto esse quos laudantium quidem soluta.
            </p>
            <p>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Calidad garantizada.
            </p>

            <p>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Elaborado con altos estándares.
            </p>

            <p>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Producto de confianza.
            </p>

            <Link className="btn btnan btn-success mt-3 px-4" to="/producto">
                  Mas información
                </Link>
            
          </div>
        </div>
      </section>

      <Galeria />

      <section data-aos="fade-up" className="container">

<div className="text-center mb-5">
  <h2 className="resalto linea">¿Por qué elegirnos?</h2>
  <p className="lead">
    Miles de familias siguen confiando en nosotros por nuestro compromiso con la calidad y el bienestar.
  </p>
</div>

<div className="row g-4">

  <div className="col-md-6">
    <div className="d-flex align-items-start">
      <div className="icono-circulo me-3">
        <i className="bi bi-shield-check fs-4 text-white"></i>
      </div>

      <div>
        <h5 className="fw-bold">Calidad garantizada</h5>
        <p className="text-muted">
          Elaborado bajo altos estándares para brindar confianza y seguridad en cada uso.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="d-flex align-items-start">
      <div className="icono-circulo me-3">
        <i className="bi bi-clock-history fs-4 text-white"></i>
      </div>

      <div>
        <h5 className="fw-bold">Más de 40 años de experiencia</h5>
        <p className="text-muted">
          Décadas acompañando a las familias peruanas con un producto reconocido.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="d-flex align-items-start">
      <div className="icono-circulo me-3">
        <i className="bi bi-heart-pulse-fill fs-4 text-white"></i>
      </div>

      <div>
        <h5 className="fw-bold">Bienestar y cuidado</h5>
        <p className="text-muted">
          Nuestro compromiso es ofrecer un producto pensado para el cuidado diario.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="d-flex align-items-start">
      <div className="icono-circulo me-3">
        <i className="bi bi-stars fs-4 text-white"></i>
      </div>

      <div>
        <h5 className="fw-bold">Confianza de generaciones</h5>
        <p className="text-muted">
          Un producto que ha permanecido en el mercado gracias a la satisfacción de sus clientes.
        </p>
      </div>
    </div>
  </div>

</div>

</section>


<section> 
<Opiniones />
</section>

      
    </div>
  );
}

export default Main;
