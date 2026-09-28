import { useState, useEffect } from "react";
import axios from "axios";

function Mensaje() {
  const [mensajes, setMensajes] = useState([]);
  const [mensaje, setMensaje] = useState(null);
  const [esAleatorio, setEsAleatorio] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/mensajes")
      .then((res) => {
        setMensajes(res.data);

        if (res.data.length > 0) {
          const indiceDelDia = new Date().getDate() % res.data.length;
          setMensaje(res.data[indiceDelDia]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function cambiarMensaje() {
    if (mensajes.length === 0) return;

    const indice = Math.floor(Math.random() * mensajes.length);
    setMensaje(mensajes[indice]);
    setEsAleatorio(true);
  }

  function volverAlDelDia() {
    if (mensajes.length === 0) return;

    const indiceDelDia = new Date().getDate() % mensajes.length;
    setMensaje(mensajes[indiceDelDia]);
    setEsAleatorio(false);
  }

  if (!mensaje) {
    return (
      <div className="container mt-5 text-center">
        <h4>Cargando mensaje...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`http://localhost:8080/uploads/${mensaje.imagen}`}
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover" }}
              alt={mensaje.titulo}
            />
          </div>

          <div className="col-md-8 d-flex flex-column">
            <div className="card-body">
              <h2 className="card-title resalto">
                {mensaje.titulo}
              </h2>

              {esAleatorio ? (
                <span className="badge bg-primary mb-3">
                  <i className="bi bi-shuffle me-2"></i>
                  Mensaje aleatorio
                </span>
              ) : (
                <span className="badge bg-success mb-3">
                  <i className="bi bi-calendar-heart me-2"></i>
                  Mensaje del día
                </span>
              )}

              <p className="card-text fs-5">
                {mensaje.texto}
              </p>
            </div>

            <div className="mt-auto p-3 d-flex justify-content-end gap-2">
              {esAleatorio ? (
                <>
                  <button
                    className="btn btn-outline-success btnan"
                    onClick={volverAlDelDia}
                  >
                    <i className="bi bi-calendar-heart me-2"></i>
                    Volver al mensaje del día
                  </button>

                  <button
                    className="btn btn-primary btnan"
                    onClick={cambiarMensaje}
                  >
                    <i className="bi bi-arrow-repeat me-2"></i>
                    Otro mensaje aleatorio
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary btnan"
                  onClick={cambiarMensaje}
                >
                  <i className="bi bi-shuffle me-2"></i>
                  Mensaje aleatorio
                </button>
              )}
            </div>

            <div className="card-footer text-end">
              <small className="text-muted">
                {mensaje.autor}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mensaje;