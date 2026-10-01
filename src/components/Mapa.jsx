import MapaProducto from "./MapaProducto";

function Mapa() {
  return (
    <div>

<section id="mapa" className="container py-5 mt-3">

  <div className="text-center mb-5">
    <h1 className="resalto linea">
      ¿Dónde encontrar Cruz Blanca?
    </h1>

    <p className="lead">
      Encuentra nuestro producto en establecimientos autorizados de todo el Perú.
    </p>
  </div>

  <div className="row g-4 align-items-stretch">

    <div className="col-lg-9 col-md-12">
      <MapaProducto />
    </div>

    <div className="col-lg-3 col-md-12">

      <div className="card border-0 shadow-sm h-100 p-4">

        <h3 className="fw-bold mb-4">
          Disponible en:
        </h3>

        <div className="ubicacion-item mb-4">
          <i className="bi bi-shop text-white bg-success"></i>

          <div>
            <h5 className="mb-1">Farmacias</h5>
            <p className="mb-0 text-muted">
              Encuéntralo en farmacias autorizadas de diferentes ciudades.
            </p>
          </div>
        </div>

        <div className="ubicacion-item mb-4">
          <i className="bi bi-cart3 text-white bg-primary"></i>

          <div>
            <h5 className="mb-1">Supermercados</h5>
            <p className="mb-0 text-muted">
              Disponible en cadenas de supermercados participantes.
            </p>
          </div>
        </div>

        <div className="ubicacion-item mb-4">
          <i className="bi bi-truck text-white bg-danger"></i>

          <div>
            <h5 className="mb-1">Distribuidores</h5>
            <p className="mb-0 text-muted">
              También puedes adquirirlo mediante distribuidores oficiales.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>


    </div>
  );
}

export default Mapa;
