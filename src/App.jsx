import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Mensaje from "./components/Mensaje";
import FAQ from "./components/FAQ";
import Nosotros from "./components/Nosotros";
import Producto from "./components/Producto";
import Main from "./components/Main";
import Plantilla from "./components/Plantilla";

import AdminMapa from "./pages/AdminMapa";
import AdminMensaje from "./pages/AdminMensaje";
import Login from "./pages/Login";
import AdminOpiniones from "./pages/AdminOpiniones";

import AHeader from "./components/AHeader";
import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import BotonFlotante from "./components/BotonFlotante";
import ScrollToHash from "./components/ScrollToHash";
import Mapa from "./components/Mapa";

function App() {
  const location = useLocation();

  const esAdmin = location.pathname.startsWith("/admin");

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="app">
      {esAdmin ? <AHeader /> : <Header />}

      <ScrollToHash />

      <Routes>
        {/* Paginas publicas */}

        <Route path="/" element={<Main />} />

        <Route path="/producto" element={<Producto />} />

        <Route path="/plantilla" element={<Plantilla />} />

        <Route path="/mensaje" element={<Mensaje />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/faq" element={<FAQ />} />

        
        <Route path="/mapa" element={<Mapa />} />

        

        {/* Login admin */}

        <Route path="/admin/login" element={<Login />} />

        {/* Panel administrador protegido */}

        <Route
          path="/admin/mapa"
          element={
            <ProtectedRoute>
              <AdminMapa />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/mensajes"
          element={
            <ProtectedRoute>
              <AdminMensaje />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/opiniones"
          element={
            <ProtectedRoute>
              <AdminOpiniones />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!esAdmin && <Footer />}
      {!esAdmin && <BotonFlotante />}
    </div>
  );
}

export default App;
