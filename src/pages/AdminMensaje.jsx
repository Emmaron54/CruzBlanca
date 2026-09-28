import { useState, useEffect } from "react";
import axios from "axios";

function AdminMensaje() {
  const [mensajes, setMensajes] = useState([]);

  const [mensaje, setMensaje] = useState({
    titulo: "",
    texto: "",
    autor: "",
    imagen: "",
  });

  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    cargarMensajes();
  }, []);


  
  function cargarMensajes() {
    axios
    .get(
      "http://localhost:8080/mensajes",
      {
        withCredentials:true
      })
      .then((res) => {
        setMensajes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function guardarMensaje(e) {
    e.preventDefault();

    const datos = new FormData();

    datos.append("titulo", mensaje.titulo);
    datos.append("texto", mensaje.texto);
    datos.append("autor", mensaje.autor);
    datos.append("imagen", imagen);

    console.log(datos.get("titulo"));
    console.log(datos.get("texto"));
    console.log(datos.get("autor"));
    console.log(datos.get("imagen"));

    axios.post(
      "http://localhost:8080/mensajes",
      datos,
      {
        withCredentials: true
      }
    )
      .then(() => {
        alert("Mensaje guardado correctamente");

        cargarMensajes();

        setMensaje({
          titulo: "",
          texto: "",
          autor: "",
          imagen: "",
        });

        setImagen(null);

        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function eliminarMensaje(id) {
    if (!window.confirm("¿Eliminar mensaje?")) return;

    axios
    .delete(
      `http://localhost:8080/mensajes/${id}`,
      {
        withCredentials: true
      }
    )
      .then(() => {
        cargarMensajes();
      })
      .catch((error) => {
        console.log(error);
      });
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
            setMensaje({
              ...mensaje,
              titulo: e.target.value,
            })
          }
          required
        />

        <textarea
          className="form-control mb-2"
          placeholder="Texto del mensaje"
          rows="4"
          value={mensaje.texto}
          onChange={(e) =>
            setMensaje({
              ...mensaje,
              texto: e.target.value,
            })
          }
          required
        />

        <input
          className="form-control mb-2"
          placeholder="Autor"
          value={mensaje.autor}
          onChange={(e) =>
            setMensaje({
              ...mensaje,
              autor: e.target.value,
            })
          }
          required
        />

        <input
          type="file"
          className="form-control mb-3"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
          required
        />

        <button className="btn btn-primary">
          Guardar mensaje
        </button>

      </form>

      <hr />

      <h3>Mensajes registrados</h3>

      <div className="row">
        {mensajes.map((item) => (
          <div className="col-md-6 col-lg-3 col-sm-12 mt-3 mb-4" key={item.id}>
            <div className="card shadow h-100">

              <img
                src={`http://localhost:8080/uploads/${item.imagen}`}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
                alt={item.titulo}
              />

              <div className="card-body d-flex flex-column">

                <h5>{item.titulo}</h5>

                <p>
  {item.texto.length > 100
    ? item.texto.substring(0, 100) + "..."
    : item.texto}
</p>

                <small className="text-muted">
                  {item.autor}
                </small>

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