import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const autenticado = localStorage.getItem("admin");

  if (!autenticado) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}

export default ProtectedRoute;