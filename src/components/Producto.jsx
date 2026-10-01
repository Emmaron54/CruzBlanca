function Producto() {
  return (
    <div>
      <section className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold resalto">Cruz Blanca</h1>

          <p className="lead">
            Un producto que ha acompañado a generaciones de familias peruanas.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 text-center p-4">
                  <div className="producto-hover">
                    <img
                      src="/imagen11.png"
                      className="img-frontal"
                      alt="Producto"
                    />

                    <img
                      src="/imagen11.png"
                      className="img-hover"
                      alt="Producto"
                    />
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="card-body p-4">
                    <h2 className="fw-bold mb-4">Ficha del producto</h2>

                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Nombre</th>
                          <td>Cruz Blanca</td>
                        </tr>

                        <tr>
                          <th>Categoría</th>
                          <td>Talco corporal</td>
                        </tr>

                        <tr>
                          <th>Presentación</th>
                          <td>100 g</td>
                        </tr>

                        <tr>
                          <th>Uso</th>
                          <td>Cuidado e higiene personal</td>
                        </tr>

                        <tr>
                          <th>Calidad</th>
                          <td>
                            <span className="badge bg-success">
                              Garantizada
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container py-5">

<div className="text-center p-5 rounded-4 shadow-sm fondo-comprar">

  <i className="bi bi-geo-alt-fill fs-1 principal"></i>

  <h2 className="fw-bold mt-3 mb-3">
    ¿Dónde puedes encontrar Cruz Blanca?
  </h2>

  <p className="lead mb-4">
    Consulta nuestros puntos de venta y encuentra el establecimiento más cercano.
  </p>

  <a
    href="mapa#mapa"
    className="btn btncb btn-lg px-5 py-3 fw-bold"
  >
    <i className="bi bi-map me-2"></i>
    Ver puntos de venta
  </a>

</div>

</section>

      <section className="container py-4">
        <div className="text-center mb-4">
          <h2 className="resalto linea">¿Porque usar Cruz Blanca?</h2>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-shield-fill-check fs-1 text-success"></i>
                <h5 className="fw-bold mt-3">Calidad</h5>
                <p className="text-muted">
                  Elaborado bajo altos estándares para brindar confianza en cada
                  uso.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-heart-pulse-fill fs-1 text-danger"></i>
                <h5 className="fw-bold mt-3">Bienestar</h5>
                <p className="text-muted">
                  Pensado para el cuidado diario y el bienestar de toda la
                  familia.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-award-fill fs-1 text-warning"></i>
                <h5 className="fw-bold mt-3">Confianza</h5>
                <p className="text-muted">
                  Un producto reconocido por generaciones de consumidores.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-clock-fill fs-1 text-primary"></i>
                <h5 className="fw-bold mt-3">Duración</h5>
                <p className="text-muted">
                  Efecto prolongado, mayor a 36 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="resalto linea">Modo de uso</h2>
          <p className="lead">
            Sigue estos sencillos pasos para aprovechar al máximo el producto.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-box-seam fs-1 text-success"></i>
                <span className="badge bg-success d-block mt-3 mb-2">
                  Paso 1
                </span>
                <h5>Abrir el envase</h5>
                <p>Corta una esquina ayudándote de unas tijeras.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-hand-index-thumb fs-1 text-success"></i>
                <span className="badge bg-success d-block mt-3 mb-2">
                  Paso 2
                </span>
                <h5>Aplicar</h5>
                <p>
                  Coloca el producto sobre la zona deseada de forma uniforme.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-stars fs-1 text-success"></i>
                <span className="badge bg-success d-block mt-3 mb-2">
                  Paso 3
                </span>
                <h5>Distribuir</h5>
                <p>Extiende suavemente hasta cubrir toda el área.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-check-circle-fill fs-1 text-success"></i>
                <span className="badge bg-success d-block mt-3 mb-2">
                  Paso 4
                </span>
                <h5>¡Listo!</h5>
                <p>Disfruta de los beneficios del producto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Producto;
