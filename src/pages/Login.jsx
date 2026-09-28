import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function iniciarSesion(e) {
    e.preventDefault();

    setError("");

    axios
      .post(
        "http://localhost:8080/auth/login",
        {
          usuario: usuario,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);

        // Guardamos que el administrador inició sesión
        localStorage.setItem("admin", "true");

        // Entrar al panel
        navigate("/admin/mensajes");
      })
      .catch((error) => {
        console.log(error);

        setError("Usuario o contraseña incorrectos");
      });
  }

  return (
    <div className="container mt-5">

      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "450px" }}
      >

        <div className="card-body p-4">

          <h2 className="text-center mb-4">
            Iniciar sesión
          </h2>

          <form onSubmit={iniciarSesion}>

            <div className="mb-3">

              <label className="form-label">
                Usuario
              </label>

              <input
                type="text"
                className="form-control"
                value={usuario}
                onChange={(e) =>
                  setUsuario(e.target.value)
                }
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Contraseña
              </label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Iniciar sesión
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;