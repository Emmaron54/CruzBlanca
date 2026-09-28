import { useEffect, useState } from "react";

function AdminOpiniones() {
  const [pendientes, setPendientes] = useState([]);
  const [aprobadas, setAprobadas] = useState([]);

  const cargarOpiniones = async () => {
    try {
      const pendientesRes = await fetch(
        "http://localhost:8080/api/opiniones/pendientes"
      );

      const aprobadasRes = await fetch(
        "http://localhost:8080/api/opiniones"
      );

      const pendientesData = await pendientesRes.json();
      const aprobadasData = await aprobadasRes.json();

      setPendientes(pendientesData);
      setAprobadas(aprobadasData);
    } catch (error) {
      console.error("Error al cargar opiniones:", error);
    }
  };

  useEffect(() => {
    cargarOpiniones();
  }, []);

  // APROBAR
  const aprobarOpinion = async (id) => {
    try {
      const respuesta = await fetch(
        `http://localhost:8080/api/opiniones/${id}/aprobar`,
        {
          method: "PUT",
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo aprobar");
      }

      // Recargar para moverla de Pendientes → Aprobadas
      cargarOpiniones();
    } catch (error) {
      console.error(error);
    }
  };

  // ELIMINAR
  const eliminarOpinion = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que quieres eliminar esta opinión?"
    );

    if (!confirmar) return;

    try {
      const respuesta = await fetch(
        `http://localhost:8080/api/opiniones/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo eliminar");
      }

      // Recargar ambas listas
      cargarOpiniones();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        Administración de opiniones
      </h1>

      {/* ========================= */}
      {/* OPINIONES PENDIENTES */}
      {/* ========================= */}

      <h2 className="mb-4">
        🕐 Opiniones pendientes
      </h2>

      {pendientes.length === 0 ? (
        <div className="alert alert-secondary">
          No hay opiniones pendientes.
        </div>
      ) : (
        <div className="row g-4 mb-5">
          {pendientes.map((opinion) => (
            <div className="col-md-6" key={opinion.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">

                  <h5 className="fw-bold">
                    {opinion.nombre}
                  </h5>

                  <div className="mb-2">
                    {"★".repeat(opinion.estrellas)}
                    {"☆".repeat(5 - opinion.estrellas)}
                  </div>

                  <p>
                    {opinion.comentario}
                  </p>

                  <div className="d-flex gap-2">

                    <button
                      className="btn btn-success"
                      onClick={() => aprobarOpinion(opinion.id)}
                    >
                      <i className="bi bi-check-lg me-2"></i>
                      Aprobar
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarOpinion(opinion.id)}
                    >
                      <i className="bi bi-trash me-2"></i>
                      Eliminar
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================= */}
      {/* OPINIONES APROBADAS */}
      {/* ========================= */}

      <h2 className="mb-4">
        ✅ Opiniones aprobadas
      </h2>

      {aprobadas.length === 0 ? (
        <div className="alert alert-secondary">
          No hay opiniones aprobadas.
        </div>
      ) : (
        <div className="row g-4">

          {aprobadas.map((opinion) => (
            <div className="col-md-6" key={opinion.id}>

              <div className="card shadow-sm h-100 border-success">

                <div className="card-body">

                  <div className="d-flex justify-content-between">

                    <h5 className="fw-bold">
                      {opinion.nombre}
                    </h5>

                    <span className="badge bg-success">
                      Aprobada
                    </span>

                  </div>

                  <div className="my-2">
                    {"★".repeat(opinion.estrellas)}
                    {"☆".repeat(5 - opinion.estrellas)}
                  </div>

                  <p>
                    {opinion.comentario}
                  </p>

                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarOpinion(opinion.id)}
                  >
                    <i className="bi bi-trash me-2"></i>
                    Eliminar
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AdminOpiniones;