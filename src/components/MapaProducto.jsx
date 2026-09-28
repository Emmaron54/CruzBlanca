import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";

import axios from "axios";


const iconoCruzBlanca = L.icon({
  iconUrl: "/CBMarcador.png",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -45],
});



/* Icono para la ubicación del usuario */

const iconoUsuario = L.divIcon({
  className: "ubicacion-usuario",
  html: `
    <div style="
      width: 20px;
      height: 20px;
      background: #0d6efd;
      border: 4px solid white;
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(0,0,0,0.5);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});



/* Componente para mover el mapa */

function CentrarMapa({ tienda }) {

  const map = useMap();


  useEffect(() => {

    if (tienda) {

      map.flyTo(
        [
          tienda.latitud,
          tienda.longitud
        ],
        16,
        {
          duration: 1.5
        }
      );

    }

  }, [tienda, map]);


  return null;
}



function MapaProducto() {


  const [ubicaciones, setUbicaciones] = useState([]);

  const [miUbicacion, setMiUbicacion] = useState(null);

  const [tiendaCercana, setTiendaCercana] = useState(null);

  const [buscando, setBuscando] = useState(false);



  useEffect(() => {

    axios
      .get("http://localhost:8080/ubicaciones")

      .then((res) => {

        setUbicaciones(res.data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);




  function calcularDistancia(
    lat1,
    lon1,
    lat2,
    lon2
  ) {

    const R = 6371;


    const dLat =
      ((lat2 - lat1) * Math.PI) / 180;


    const dLon =
      ((lon2 - lon1) * Math.PI) / 180;


    const a =

      Math.sin(dLat / 2) *
      Math.sin(dLat / 2)

      +

      Math.cos(
        (lat1 * Math.PI) / 180
      )

      *

      Math.cos(
        (lat2 * Math.PI) / 180
      )

      *

      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);


    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );


    return R * c;

  }




  function buscarTiendaCercana() {


    if (ubicaciones.length === 0) {

      alert(
        "No hay tiendas registradas."
      );

      return;

    }


    if (!navigator.geolocation) {

      alert(
        "Tu navegador no permite obtener tu ubicación."
      );

      return;

    }


    setBuscando(true);


    navigator.geolocation.getCurrentPosition(

      (position) => {


        const lat =
          position.coords.latitude;


        const lon =
          position.coords.longitude;



        setMiUbicacion({

          latitud: lat,
          longitud: lon,

        });



        let tiendaMasCercana = null;

        let menorDistancia = Infinity;



        ubicaciones.forEach((ubicacion) => {


          const distancia =
            calcularDistancia(

              lat,
              lon,

              ubicacion.latitud,
              ubicacion.longitud

            );



          if (
            distancia < menorDistancia
          ) {

            menorDistancia =
              distancia;

            tiendaMasCercana = {

              ...ubicacion,

              distancia,

            };

          }

        });



        setTiendaCercana(
          tiendaMasCercana
        );


        setBuscando(false);

      },

      (error) => {

        console.log(error);

        setBuscando(false);


        if (error.code === 1) {

          alert(
            "Necesitamos permiso para conocer tu ubicación."
          );

        } else {

          alert(
            "No se pudo obtener tu ubicación."
          );

        }

      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }

    );

  }




  return (

    <div>


      {/* Botón */}

      {!tiendaCercana && (
  <div className="d-flex justify-content-center mb-3">
    <button
      className="btn btn-primary"
      onClick={buscarTiendaCercana}
      disabled={buscando}
    >
      <i className="bi bi-geo-alt-fill me-2"></i>

      {buscando
        ? "Buscando..."
        : "Encontrar tienda más cercana"
      }
    </button>
  </div>
)}




      {/* Resultado */}

      {tiendaCercana && (

        <div className="alert alert-success text-center">


          <strong>

            <i className="bi bi-shop me-2"></i>

            Tienda más cercana:

          </strong>


          <br />


          {tiendaCercana.nombre}


          <br />


          <small>

            Aproximadamente{" "}

            {tiendaCercana.distancia.toFixed(2)}

            {" "}km de distancia

          </small>


        </div>

      )}




      <MapContainer

        center={[
          -9.19,
          -75.02
        ]}

        zoom={5}

        style={{

          height: "450px",

          width: "100%",

          borderRadius: "20px",

        }}

      >


        <TileLayer

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />



        {/* Centrar automáticamente */}

        <CentrarMapa
          tienda={tiendaCercana}
        />



        {/* Ubicación del usuario */}

        {miUbicacion && (

          <Marker

            position={[

              miUbicacion.latitud,

              miUbicacion.longitud

            ]}

            icon={iconoUsuario}

          >

            <Popup>

              <strong>
                Tu ubicación
              </strong>

            </Popup>

          </Marker>

        )}




        <MarkerClusterGroup

          iconCreateFunction={
            (cluster) => {

              return L.divIcon({

                html: `

                  <div class="cluster-icon">

                    ${cluster.getChildCount()}

                  </div>

                `,

                className: "",

                iconSize: [
                  50,
                  50
                ],

              });

            }

          }

        >



          {ubicaciones.map(
            (ubicacion) => (

              <Marker

                key={
                  ubicacion.id
                }

                position={[

                  ubicacion.latitud,

                  ubicacion.longitud

                ]}

                icon={
                  iconoCruzBlanca
                }

              >


                <Popup>


                  <strong>

                    {ubicacion.nombre}

                  </strong>


                  <br />


                  Dirección:{" "}

                  {ubicacion.tipo}



                  {tiendaCercana?.id ===
                    ubicacion.id && (

                    <>

                      <br />
                      <br />

                      <span className="text-success">

                        Tu tienda más cercana

                      </span>

                    </>

                  )}


                </Popup>


              </Marker>

            )
          )}


        </MarkerClusterGroup>


      </MapContainer>


    </div>

  );

}


export default MapaProducto;