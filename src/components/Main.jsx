import Galeria from "./Galeria";
import Opiniones from "./Opiniones";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-start mb-3 ps-5">
          <h1 className="titulo display-5">
            Bienvenido a <span className="resalto">Cruz Blanca</span>
          </h1>
          <p className="lead">
           Alivia, previene y cura
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
  className="container producto mt-5 py-5"
>
  <div className="text-center mb-3">
    <h2 className="resalto titulo linea">Nuestro Producto</h2>
    <p className="lead text-muted mt-2">
      Tradición y cuidado para acompañar a tu familia día a día.
    </p>
  </div>

  <div className="row align-items-center g-4 g-lg-5">
    {/* Imagen del producto */}
    <div className="col-md-5 d-flex justify-content-center align-items-center">
      <div className="producto-imagen-contenedor">
        <img
          className="imagen-producto btnan"
          src="/imagen11.png"
          alt="Talco multiusos Cruz Blanca"
          loading="lazy"
        />
      </div>
    </div>

    {/* Información del producto */}
    <div className="col-md-7 text-start parrafoseparado">
      <span className="producto-etiqueta">
        Tradición desde hace más de 40 años
      </span>

      <h3 className="resalto1 medio mt-3 mb-3">
        Talco multiusos Cruz Blanca
      </h3>

      <p className="text-muted producto-descripcion">
        Nuestra fórmula, desarrollada y perfeccionada durante más de cuatro
        décadas, forma parte de la tradición de muchas familias. Su principio
        activo ayuda a aliviar molestias cutáneas como el escozor y el
        salpullido.
      </p>

      <p className="text-muted producto-descripcion">
        Un producto versátil que acompaña el cuidado diario de la piel y
        mantiene viva una historia de confianza transmitida de generación
        en generación.
      </p>

      <Link
        className="btn btncb mt-3 px-4 py-2"
        to="/producto"
      >
        Más información
        <span className="ms-2" aria-hidden="true">→</span>
      </Link>
    </div>
  </div>
</section>


      <Galeria />

      <section data-aos="fade-up" className="container">

<div className="text-center mb-5">
  <h2 className="resalto titulo linea">¿Por qué elegirnos?</h2>
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
        <h5 className="medio">Calidad garantizada</h5>
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
        <h5 className="medio">Más de 40 años de experiencia</h5>
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
        <h5 className="medio">Bienestar y cuidado</h5>
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
        <h5 className="medio">Confianza de generaciones</h5>
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
