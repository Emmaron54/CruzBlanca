
import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://cruzblanca-backend-production.up.railway.app";

function AdminMensaje() {
  const [mensajes, setMensajes] = useState([]);

  const [mensaje, setMensaje] = useState({
    titulo: "",
    texto: "",
    autor: "",
  });

  const [imagen, setImagen] = useState(null);
  const [imagenAnterior, setImagenAnterior] = useState("");
  const [usarAnterior, setUsarAnterior] = useState(false);

  useEffect(() => {
    cargarMensajes();
  }, []);

  function cargarMensajes() {
    axios
      .get(`${API}/mensajes`, { withCredentials: true })
      .then((res) => setMensajes(res.data))
      .catch((error) => console.log(error));
  }

  // Obtener imágenes únicas de los mensajes existentes
  const imagenesDisponibles = [
    ...new Map(
      mensajes
        .filter((item) => item.imagen)
        .map((item) => {
          const url = item.imagen.startsWith("http")
            ? item.imagen
            : `${API}/uploads/${item.imagen}`;
  
          return [
            url.split("?")[0],
            {
              url,
              titulo: item.titulo,
            },
          ];
        })
    ).values(),
  ];

  function guardarMensaje(e) {
    e.preventDefault();

    const imagenFinal = usarAnterior ? imagenAnterior : imagen;

    if (!imagenFinal) {
      alert("Selecciona o sube una imagen.");
      return;
    }

    const datos = new FormData();
    datos.append("titulo", mensaje.titulo);
    datos.append("texto", mensaje.texto);
    datos.append("autor", mensaje.autor);

    // El backend actual recibe un archivo MultipartFile.
    // Si se selecciona una URL anterior, descargamos esa imagen
    // y la enviamos como archivo para mantener el backend compatible.
    const prepararYGuardar = async () => {
      let archivo = imagenFinal;

      if (usarAnterior) {
        try {
          const respuesta = await fetch(imagenAnterior);

          if (!respuesta.ok) {
            throw new Error("No se pudo obtener la imagen anterior.");
          }

          const blob = await respuesta.blob();
          archivo = new File(
            [blob],
            "imagen-reutilizada.jpg",
            { type: blob.type || "image/jpeg" }
          );
        } catch (error) {
          console.error(error);
          alert(
            "No se pudo reutilizar esta imagen. Prueba subirla nuevamente."
          );
          return;
        }
      }

      datos.append("imagen", archivo);

      axios
        .post(`${API}/mensajes`, datos, { withCredentials: true })
        .then(() => {
          alert("Mensaje guardado correctamente");

          setMensaje({ titulo: "", texto: "", autor: "" });
          setImagen(null);
          setImagenAnterior("");
          setUsarAnterior(false);

          e.target.reset();
          cargarMensajes();
        })
        .catch((error) => {
          console.error(error);
          alert("No se pudo guardar el mensaje.");
        });
    };

    prepararYGuardar();
  }

  function eliminarMensaje(id) {
    if (!window.confirm("¿Eliminar mensaje?")) return;

    axios
      .delete(`${API}/mensajes/${id}`, { withCredentials: true })
      .then(() => cargarMensajes())
      .catch((error) => console.log(error));
  }

  return (
    <div className="container mt-4">
      <h2>Administrar mensajes</h2>

      <form onSubmit={guardarMensaje} className="mt-3">
        <input
          className="form-control mb-2"
          placeholder="Título"
          value={mensaje.titulo}
          onChange={(e) =>
            setMensaje({ ...mensaje, titulo: e.target.value })
          }
          required
        />

        <textarea
          className="form-control mb-2"
          placeholder="Texto del mensaje"
          rows="4"
          value={mensaje.texto}
          onChange={(e) =>
            setMensaje({ ...mensaje, texto: e.target.value })
          }
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Autor"
          value={mensaje.autor}
          onChange={(e) =>
            setMensaje({ ...mensaje, autor: e.target.value })
          }
          required
        />

        <div className="mb-3">
          <label className="form-label fw-bold">
            Imagen del mensaje
          </label>

          <div className="d-flex gap-2 flex-wrap mb-3">
            <button
              type="button"
              className={`btn ${
                !usarAnterior ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => {
                setUsarAnterior(false);
                setImagenAnterior("");
              }}
            >
              Subir imagen nueva
            </button>

            <button
              type="button"
              className={`btn ${
                usarAnterior ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => {
                setUsarAnterior(true);
                setImagen(null);
              }}
            >
              Usar imagen anterior
            </button>
          </div>

          {!usarAnterior ? (
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImagen(e.target.files[0] || null)}
              required={!usarAnterior}
            />
          ) : (
            <>
              {imagenesDisponibles.length > 0 ? (
                <div className="row g-3">
                  {imagenesDisponibles.map((item) => (
                    <div className="col-6 col-md-4 col-lg-3" key={item.url}>
                      <button
                        type="button"
                        className={`card w-100 h-100 p-1 ${
                          imagenAnterior === item.url
                            ? "border-primary border-3"
                            : ""
                        }`}
                        onClick={() => setImagenAnterior(item.url)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={item.url}
                          alt={item.titulo}
                          style={{
                            width: "100%",
                            height: "120px",
                            objectFit: "cover",
                          }}
                        />
                        <span className="small text-center p-1">
                          {item.titulo || "Imagen anterior"}
                        </span>
                        {imagenAnterior === item.url && (
                          <span className="badge bg-primary">
                            Seleccionada
                          </span>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">
                  Todavía no hay imágenes disponibles.
                </p>
              )}
            </>
          )}
        </div>

        <button className="btn btn-primary">
          Guardar mensaje
        </button>
      </form>

      <hr />

      <h3>Mensajes registrados</h3>

      <div className="row">
        {mensajes.map((item) => (
          <div
            className="col-md-6 col-lg-3 col-sm-12 mt-3 mb-4"
            key={item.id}
          >
            <div className="card shadow h-100">
              <img
                src={
                  item.imagen?.startsWith("http")
                    ? item.imagen
                    : `${API}/uploads/${item.imagen}`
                }
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt={item.titulo}
              />

              <div className="card-body d-flex flex-column">
                <h5>{item.titulo}</h5>

                <p>
                  {item.texto.length > 100
                    ? item.texto.substring(0, 100) + "..."
                    : item.texto}
                </p>

                <small className="text-muted">{item.autor}</small>

                <div className="mt-auto">
                  <button
                    className="btn btn-danger btn-sm mt-3"
                    onClick={() => eliminarMensaje(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminMensaje;
