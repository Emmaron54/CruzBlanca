import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Opiniones() {
  const [opiniones, setOpiniones] = useState([]);

  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [estrellas, setEstrellas] = useState(5);

  const ultimaOpinion = localStorage.getItem("ultimaOpinion");

  const puedeComentar =
    !ultimaOpinion || Date.now() - Number(ultimaOpinion) > 24 * 60 * 60 * 1000;

  // Mostrar u ocultar formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Obtener opiniones aprobadas desde Spring Boot
  useEffect(() => {
    fetch("http://localhost:8080/api/opiniones")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al obtener las opiniones");
        }

        return respuesta.json();
      })
      .then((datos) => {
        setOpiniones(datos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Enviar opinión a Spring Boot
  const agregarOpinion = async (e) => {
    e.preventDefault();

    if (!puedeComentar) {
      alert(
        "Debes esperar 24 horas antes de volver a comentar."
      );
      return;
    }

    if (!nombre.trim() || !comentario.trim()) {
      return;
    }

    const nuevaOpinion = {
      nombre: nombre.trim(),
      comentario: comentario.trim(),
      estrellas: estrellas,
    };

    try {
      const respuesta = await fetch("http://localhost:8080/api/opiniones", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(nuevaOpinion),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo guardar la opinión");
      }

      const opinionGuardada = await respuesta.json();

      console.log("Opinión enviada:", opinionGuardada);

      // Limpiar formulario
      setNombre("");
      setComentario("");
      setEstrellas(5);

      localStorage.setItem("ultimaOpinion", Date.now().toString());

      setMostrarFormulario(false);

      alert("¡Tu opinión fue enviada! Quedará pendiente de aprobación.");
    } catch (error) {
      console.error("Error:", error);

      alert("No se pudo enviar tu opinión.");
    }
  };

  return (
    <section className="container py-5">
      <div className="text-center mb-3">
        <h2 className="resalto linea">Lo que dicen nuestros clientes</h2>
      </div>

      {opiniones.length > 0 ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={opiniones.length > 1}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 3,
            },
          }}
        >
          {opiniones.map((opinion) => (
            <SwiperSlide key={opinion.id}>
              <div className="card opinion-card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  {/* COMILLAS + ESTRELLAS */}

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="opinion-comillas">
                      <i className="bi bi-quote"></i>
                    </span>

                    <div className="opinion-estrellas">
                      {"★".repeat(opinion.estrellas)}

                      {"☆".repeat(5 - opinion.estrellas)}
                    </div>
                  </div>

                  {/* COMENTARIO */}

                  <p className="opinion-text">{opinion.comentario}</p>

                  {/* USUARIO */}

                  <div className="d-flex align-items-center mt-4">
                    <div className="opinion-avatar">
                      <i className="bi bi-person-fill"></i>
                    </div>

                    <div className="ms-3">
                      <h6 className="fw-bold mb-0">{opinion.nombre}</h6>

                      <small className="text-muted">Cliente</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center text-muted py-4">
          <i className="bi bi-chat-square-text fs-1"></i>

          <p className="mt-2">Todavía no hay opiniones publicadas.</p>
        </div>
      )}

      {/* ================================= */}
      {/* BOTÓN DEJAR OPINIÓN */}
      {/* ================================= */}

      <div className="text-center mt-4">
        {puedeComentar ? (
         <button
         type="button"
         className="btn btnan btn-success px-4"
         onClick={() => setMostrarFormulario(!mostrarFormulario)}
       >
         <i
           className={`bi ${
             mostrarFormulario
               ? "bi-x-lg"
               : "bi-chat-left-text"
           } me-2`}
         ></i>
       
         {mostrarFormulario
           ? "Cerrar formulario"
           : "Dejar una opinión"}
       </button>
        ) : (
          <div className="alert alert-info d-inline-block">
            Ya enviaste una opinión. Podrás volver a comentar en 24 horas.
          </div>
        )}
      </div>

      {/* ================================= */}
      {/* FORMULARIO */}
      {/* ================================= */}

      {mostrarFormulario && (
        <div className="row justify-content-center mt-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                {/* TÍTULO DEL FORMULARIO */}

                <div className="text-center mb-3">
                  <h3 className="fw-bold">Comparte tu opinión</h3>
                </div>

                {/* FORMULARIO */}

                <form onSubmit={agregarOpinion}>
                  {/* ========================= */}
                  {/* NOMBRE */}
                  {/* ========================= */}

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Nombre</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Escribe tu nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      maxLength="50"
                      required
                    />
                  </div>

                  {/* ========================= */}
                  {/* ESTRELLAS */}
                  {/* ========================= */}

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Tu calificación
                    </label>

                    <select
                      className="form-select"
                      value={estrellas}
                      onChange={(e) => setEstrellas(Number(e.target.value))}
                    >
                      <option value="5">★★★★★ - Excelente</option>

                      <option value="4">★★★★☆ - Muy bueno</option>

                      <option value="3">★★★☆☆ - Bueno</option>

                      <option value="2">★★☆☆☆ - Regular</option>

                      <option value="1">★☆☆☆☆ - Malo</option>
                    </select>
                  </div>

                  {/* ========================= */}
                  {/* COMENTARIO */}
                  {/* ========================= */}

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Comentario</label>

                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Escribe tu experiencia..."
                      value={comentario}
                      onChange={(e) => setComentario(e.target.value)}
                      maxLength="300"
                      required
                    />
                  </div>

                  {/* ========================= */}
                  {/* BOTÓN PUBLICAR */}
                  {/* ========================= */}

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btnan btn-success px-4"
                    >
                      <i className="bi bi-send me-2"></i>
                      Enviar opinión
                    </button>
                  </div>

                  {/* AVISO */}

                  <p className="text-center text-muted small mt-3 mb-0">
                    <i className="bi bi-info-circle me-1"></i>
                    Tu opinión será revisada antes de publicarse.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Opiniones;
