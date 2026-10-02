import { Link } from "react-router-dom";

function BotonFlotante() {
  return (
    <div>
      <Link
        to="/mapa"
        className="boton-flotante"
      >
        <i className="bi bi-geo-alt-fill"></i>
      </Link>
    </div>
  );
}

export default BotonFlotante;