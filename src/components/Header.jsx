import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [mostrarHeader, setMostrarHeader] = useState(true);

     const cerrarMenu = () => {
      const menu = document.getElementById("navbarNav");
    
      if (menu && menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    };

  useEffect(() => {
    let ultimaPosicion = window.scrollY;

    function controlarScroll() {
      const posicionActual = window.scrollY;

      // Si estamos arriba, siempre mostrar
      if (posicionActual <= 50) {
        setMostrarHeader(true);
      }
      // Si bajamos, ocultar
      else if (posicionActual > ultimaPosicion) {
        setMostrarHeader(false);
      }
      // Si subimos, mostrar
      else {
        setMostrarHeader(true);
      }

      ultimaPosicion = posicionActual;
    }

    window.addEventListener("scroll", controlarScroll);

    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, []);

  return (
    <header className={mostrarHeader ? "header-visible" : "header-oculto"}>
      <nav
        className="navbar navbar-expand-lg barra" >
        <div className="container">
          <Link
            className="navbar-brand fw-bold cb d-flex align-items-center"
            to="/"
          >
            <img src="/logoletras.png" alt="Cruz Blanca" className="logo-header" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <NavLink
                  to="/producto"
                  onClick={cerrarMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-boton textoaa activo"
                      : "nav-link nav-boton textoaa"
                  }
                >
                  <i className="bi bi-stars me-2"></i>
                  Nuestro producto
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/faq"
                  onClick={cerrarMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-boton textoaa activo"
                      : "nav-link nav-boton textoaa"
                  }
                >
                  <i className="bi bi-question-circle-fill me-2"></i>
                  FAQ
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/nosotros"
                  onClick={cerrarMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-boton textoaa activo"
                      : "nav-link nav-boton textoaa"
                  }
                >
                  <i className="bi bi-people-fill me-2"></i>
                  Conocenos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/mensaje"
                  onClick={cerrarMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-boton textoaa activo"
                      : "nav-link nav-boton textoaa"
                  }
                >
                  <i className="bi bi-book me-2"></i>
                  Lo que Dios tiene para decirte
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
