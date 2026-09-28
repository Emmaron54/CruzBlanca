import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";
import axios from "axios";

import "leaflet/dist/leaflet.css";


const iconoCruzBlanca = L.icon({
  iconUrl: "/CBMarcador.png",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
});


function ClickMapa({ setUbicacion }) {

  useMapEvents({

    click(e) {

      setUbicacion((prev) => ({
        ...prev,
        latitud: e.latlng.lat,
        longitud: e.latlng.lng,
      }));

    },

  });

  return null;
}



function AdminMapa() {


  const [lugares, setLugares] = useState([]);


  const [ubicacion, setUbicacion] = useState({

    nombre: "",
    tipo: "",
    latitud: null,
    longitud: null,

  });



  useEffect(() => {

    cargarUbicaciones();

  }, []);



  const cargarUbicaciones = () => {

    axios
      .get(
        "http://localhost:8080/ubicaciones"
      )
      .then((res) => {

        setLugares(res.data);

      })
      .catch((error) => {

        console.log(error);

      });

  };



  const guardarUbicacion = (e) => {

    e.preventDefault();


    axios
      .post(
        "http://localhost:8080/ubicaciones",
        ubicacion,
        {
          withCredentials: true
        }
      )
      .then(() => {


        alert("Ubicación guardada");


        cargarUbicaciones();


        setUbicacion({

          nombre: "",
          tipo: "",
          latitud: null,
          longitud: null,

        });


      })
      .catch((error) => {

        console.log(error);

      });

  };



  const eliminarUbicacion = (id) => {


    if (!window.confirm("¿Eliminar esta ubicación?")) return;



    axios
      .delete(
        `http://localhost:8080/ubicaciones/${id}`,
        {
          withCredentials: true
        }
      )
      .then(() => {

        cargarUbicaciones();

      })
      .catch((error) => {

        console.log(error);

      });


  };



  return (

    <div className="container mt-4">


      <h2>
        Agregar ubicación
      </h2>



      <MapContainer

        center={[-5.1945, -80.6328]}

        zoom={13}

        style={{

          height: "450px",
          width: "100%",
          borderRadius: "20px",

        }}

      >


        <TileLayer

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />



        <ClickMapa 
          setUbicacion={setUbicacion}
        />



        {lugares.map((lugar) => (

          <Marker

            key={lugar.id}

            position={[
              lugar.latitud,
              lugar.longitud
            ]}

            icon={iconoCruzBlanca}

          >

            <Popup>


              <strong>
                {lugar.nombre}
              </strong>


              <br />


              {lugar.tipo}


              <br />
              <br />



              <button

                className="btn btn-danger btn-sm"

                onClick={() => eliminarUbicacion(lugar.id)}

              >

                Eliminar

              </button>


            </Popup>


          </Marker>

        ))}




        {ubicacion.latitud && (

          <Marker

            position={[
              ubicacion.latitud,
              ubicacion.longitud
            ]}

            icon={iconoCruzBlanca}

          >

            <Popup>

              Nueva ubicación

            </Popup>


          </Marker>

        )}



      </MapContainer>




      <form

        onSubmit={guardarUbicacion}

        className="mt-3"

      >



        <input

          className="form-control mb-2"

          placeholder="Nombre"

          value={ubicacion.nombre}

          onChange={(e) =>
            setUbicacion({

              ...ubicacion,

              nombre:e.target.value

            })
          }

        />



        <input

          className="form-control mb-2"

          placeholder="Dirección"

          value={ubicacion.tipo}

          onChange={(e) =>
            setUbicacion({

              ...ubicacion,

              tipo:e.target.value

            })
          }

        />



        <p>

          <strong>Latitud:</strong> {ubicacion.latitud}

        </p>



        <p>

          <strong>Longitud:</strong> {ubicacion.longitud}

        </p>




        <button className="btn btn-primary mb-4">

          Guardar ubicación

        </button>



      </form>



    </div>

  );

}



export default AdminMapa;