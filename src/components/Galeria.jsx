
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Galeria() {

  const [imagenSeleccionada, setImagenSeleccionada] = useState({
    imagen: "",
    descripcion: "",
  });

  const imagenes = [
    {
      imagen: "/img/img2.png",
      descripcion: "Activación en Feria de los 80´s",
    },
    {
      imagen: "/img/img3.png",
      descripcion: "PUESTO DEL MERCADO LAS CAPULLANAS PIURA",
    },
    {
      imagen: "/img/img4.png",
      descripcion: "Mili Camacho (Fundadora) aplicado talco Cruz blanca (2001)",
    },
    {
      imagen: "/img/img6.png",
      descripcion: "PIEZA PUBLICITARIA EN REDES",
    },
    {
      imagen: "/img/img7.png",
      descripcion: "Carmen Rios (Creadora de la formula) llevando prodcuto a vender",
    },
    {
      imagen: "/img/img8.png",
      descripcion: "-ENVIO POR COURIER",
    },
  ];

  return (
    <section className="container my-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={25}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >

        {imagenes.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="galeria-card">

              <img
                src={item.imagen}
                className="galeria-img"
                alt={item.descripcion}
                data-bs-toggle="modal"
                data-bs-target="#modalImagen"
                onClick={() => setImagenSeleccionada(item)}
              />

              <div className="galeria-descripcion">
                {item.descripcion}
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>


      {/* Modal */}

      <div
        className="modal fade"
        id="modalImagen"
        tabIndex="-1"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-dialog-centered modal-lg">

          <div className="modal-content bg-transparent border-0">

            <button
              type="button"
              className="btn-close btn-close-white ms-auto mb-2"
              data-bs-dismiss="modal"
            ></button>

            <img
              src={imagenSeleccionada.imagen}
              className="img-fluid rounded"
              alt={imagenSeleccionada.descripcion}
            />

            <p className="text-white text-center mt-2 mb-0">
              {imagenSeleccionada.descripcion}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Galeria;

