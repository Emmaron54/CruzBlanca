import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Galeria() {

    const [imagenSeleccionada, setImagenSeleccionada] = useState("");
  
    const imagenes = [
      "/img/img2.png",
      "/img/img3.png",
      "/img/img4.png",
    ];
  
    return (
      <section className="container my-5">
  
        <div className="text-center mb-2">
          <h2 className="resalto linea">Galería</h2>
        </div>
  
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
  
          {imagenes.map((imagen, index) => (
            <SwiperSlide key={index}>
              <div className="galeria-card">
                <img
                  src={imagen}
                  className="galeria-img"
                  alt={`Imagen ${index + 1}`}
                  data-bs-toggle="modal"
                  data-bs-target="#modalImagen"
                  onClick={() => setImagenSeleccionada(imagen)}
                />
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
                src={imagenSeleccionada}
                className="img-fluid rounded"
                alt="Imagen ampliada"
              />
  
            </div>
          </div>
        </div>
  
      </section>
    );
}

export default Galeria;
