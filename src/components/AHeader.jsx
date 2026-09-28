import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AHeader() {


  const navigate = useNavigate();



  function cerrarSesion() {


    axios.post(
      "http://localhost:8080/auth/logout",
      {},
      {
        withCredentials: true
      }
    )
    .then(() => {


      localStorage.removeItem("admin");


      navigate("/admin/login");


    })
    .catch((error) => {

      console.log(error);

    });


  }



  return (

    <header>

      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "#004d40",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >


        <div className="container">


          <Link 
            className="navbar-brand text-white"
            to="/"
          >
            Cruz Blanca
          </Link>



          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >

            <span className="navbar-toggler-icon"></span>

          </button>



          <div 
            className="collapse navbar-collapse" 
            id="navbarNav"
          >


            <ul className="navbar-nav ms-auto gap-2">


              <li className="nav-item">

                <Link 
                  className="nav-link nav-boton textoaa" 
                  to="/admin/mapa"
                >

                  <i className="bi bi-geo-alt-fill me-2"></i>

                  MAPA

                </Link>

              </li>

              <li className="nav-item">

                <Link 
                  className="nav-link nav-boton textoaa" 
                  to="/admin/opiniones"
                >

                  <i className="bi bi-chat-square-text me-2"></i>

                  Opiniones

                </Link>

              </li>

              <li className="nav-item">

                <Link 
                  className="nav-link nav-boton textoaa" 
                  to="/admin/mensajes"
                >

                  <i className="bi bi-book me-2"></i>

                  Mensajes

                </Link>

              </li>



              <li className="nav-item">

                <button
                  className="btn btn-danger"
                  onClick={cerrarSesion}
                >

                  Cerrar sesión

                </button>

              </li>



            </ul>


          </div>


        </div>


      </nav>


    </header>

  );

}


export default AHeader;