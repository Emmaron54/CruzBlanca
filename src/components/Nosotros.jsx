function Nosotros() {

const eventos = [
  {
    año: "1983",
    titulo: "El origen de Cruz Blanca",
    texto:
      "Durante el fenómeno de El Niño en Piura, Richard Olaechea recupera una antigua fórmula familiar de polvo medicado para ayudar a las personas afectadas por el sarpullido y las escaldaduras. Al comprobar su eficacia, los vecinos comienzan a solicitar el producto.",
    imagen: "/img/img1.jpg",
    lado: "izquierda",
  },
  {
    año: "1983",
    titulo: "Nace el nombre Cruz Blanca",
    texto:
      "Mientras buscaba un nombre para el producto, Richard Olaechea encontró inspiración en un sueño en el que vio una Cruz Blanca. Desde entonces, ese nombre se convirtió en la identidad de un proyecto familiar que comenzó a crecer paso a paso.",
    imagen: "/img/img1.jpg",
    lado: "derecha",
  },
  {
    año: "1980s",
    titulo: "Los primeros pasos",
    texto:
      "Cruz Blanca comienza a llegar a pequeñas bodegas de Piura y posteriormente a la farmacia militar y a tradicionales farmacias de la ciudad, ampliando poco a poco su presencia entre las familias del norte del Perú.",
    imagen: "/img/img5.png",
    lado: "izquierda",
  },
  {
    año: "2006",
    titulo: "Laboratorios Cruz Blanca del Perú EIRL",
    texto:
      "El proyecto familiar se consolida formalmente bajo el nombre Laboratorios Cruz Blanca del Perú EIRL, fortaleciendo la identidad de una marca que ya contaba con reconocimiento entre sus consumidores.",
    imagen: "/img/img1.jpg",
    lado: "derecha",
  },
  {
    año: "2014",
    titulo: "Alelu Yah SAC",
    texto:
      "La empresa inicia una nueva etapa bajo el nombre Alelu Yah SAC, manteniendo la esencia, la identidad y el propósito que acompañaron a Cruz Blanca desde sus primeros años.",
    imagen: "/img/img1.jpg",
    lado: "izquierda",
  },
  {
    año: "2020s",
    titulo: "Una marca con trayectoria",
    texto:
      "Después de décadas de trabajo, Cruz Blanca consolida su reconocimiento en el norte del Perú, especialmente por su tradición en el cuidado de la piel frente a las escaldaduras y el sarpullido.",
    imagen: "/img/img1.jpg",
    lado: "derecha",
  },
  {
    año: "2026",
    titulo: "Alelu Yah Corp",
    texto:
      "En 2026 comienza una nueva etapa bajo el nombre Alelu Yah Corp, orientada a fortalecer la organización y proyectar la marca hacia nuevos mercados y oportunidades de crecimiento.",
    imagen: "/img/img1.jpg",
    lado: "izquierda",
  },
  {
    año: "2026",
    titulo: "Modernización y expansión",
    texto:
      "Cruz Blanca avanza hacia una imagen corporativa más moderna y profesional, desarrolla nuevos formatos y busca ampliar su presencia nacional sin perder su esencia familiar, sus valores y la identidad que la acompañan desde su origen.",
    imagen: "/img/img1.jpg",
    lado: "derecha",
  },
];

  const valores = [
    {
      icono: "bi-award-fill",
      color: "text-success",
      titulo: "Calidad",
      texto:
        "Buscamos ofrecer productos elaborados bajo altos estándares de calidad.",
    },
    {
      icono: "bi-heart-fill",
      color: "text-danger",
      titulo: "Compromiso",
      texto:
        "Trabajamos pensando en el bienestar y las necesidades de nuestros clientes.",
    },
    {
      icono: "bi-clock-history",
      color: "text-success",
      titulo: "Experiencia",
      texto:
        "Más de 4 décadas acompañando a las familias peruanas.",
    },
    {
      icono: "bi-people-fill",
      color: "text-primary",
      titulo: "Confianza",
      texto:
        "Construimos relaciones basadas en la responsabilidad, transparencia y calidad.",
    },
  ];

  return (
    <div className="container mt-5 mb-5">

      {/* QUIÉNES SOMOS */}

      <section
        className="row align-items-center mb-5"
        data-aos="fade-up"
      >

        <div className="col-md-4 mb-4 mb-md-0">

          <img
            src="/img/img1.jpg"
            alt="Cruz Blanca"
            className="img-fluid rounded-4 shadow"
          />

        </div>


        <div className="col-md-8">

          <h2 className="resalto1 mb-3">
            ¿Quiénes somos?
          </h2>

          <p className="parrafoseparado lead">
            Cruz Blanca es una propuesta orientada al cuidado
            personal y al bienestar. Nuestro objetivo es ofrecer
            productos que respondan a las necesidades de nuestros
            clientes y que puedan formar parte de su vida cotidiana.
          </p>

          <p className="parrafoseparado lead">
            Creemos que un buen producto debe combinar calidad,
            responsabilidad e innovación. Por ello, buscamos
            continuar creciendo y desarrollando nuevas alternativas
            para nuestros clientes.
          </p>

        </div>

      </section>


      {/* VALORES */}
      <section className="py-4">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >

          <h2 className="resalto linea">
            Nuestros valores
          </h2>

          <p className="lead">
            Los principios que guían nuestro trabajo.
          </p>

        </div>


        <div className="row g-4">

          {valores.map((valor, index) => (

            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="card h-100 text-center shadow border-0">

                <div className="card-body p-4">

                  <i
                    className={`bi ${valor.icono} fs-1 ${valor.color}`}
                  ></i>

                  <h5 className="mt-3 fw-bold">
                    {valor.titulo}
                  </h5>

                  <p className="text-muted">
                    {valor.texto}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* MISIÓN Y VISIÓN */}

      <section className="mt-5">

        <div
          className="text-center mb-4"
          data-aos="fade-up"
        >

          <h2 className="resalto linea">
            ¿Cómo pensamos?
          </h2>

          <p className="lead">
            Nuestra misión y visión representan el rumbo que
            queremos seguir.
          </p>

        </div>


        <div className="row g-4">


          {/* MISIÓN */}

          <div
            className="col-md-6"
          >

            <div className="accordion" id="accordionMision">

              <div className="accordion-item">

                <h2 className="accordion-header">

                  <button
                    className="accordion-button collapsed fs-5 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mision"
                  >

                    <span className="icono-circulo">

                      <i className="bi bi-bullseye fs-2"></i>

                    </span>

                    Nuestra Misión

                  </button>

                </h2>


                <div
                  id="mision"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionMision"
                >

                  <div className="accordion-body text-justify">

                    Somos una empresa peruana que busca satisfacer
                    las necesidades de las personas mediante
                    productos y servicios que cumplan con altos
                    estándares de calidad, trabajando con
                    responsabilidad y compromiso con el bienestar
                    de nuestros clientes.

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* VISIÓN */}

          <div
            className="col-md-6"
          >

            <div className="accordion" id="accordionVision">

              <div className="accordion-item">

                <h2 className="accordion-header">

                  <button
                    className="accordion-button collapsed fs-5 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#vision"
                  >

                    <span className="icono-circulo">

                      <i className="bi bi-eye-fill fs-2"></i>

                    </span>

                    Nuestra Visión

                  </button>

                </h2>


                <div
                  id="vision"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionVision"
                >

                  <div className="accordion-body text-justify">

                    Buscamos ampliar nuestra propuesta de productos
                    de cuidado personal, desarrollando nuevas
                    alternativas y líneas que respondan a las
                    necesidades de nuestros clientes y permitan
                    consolidar el crecimiento de Cruz Blanca.

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* HISTORIA */}

      <section className="mt-5">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >

          <h2 className="resalto linea">
            Nuestra historia
          </h2>

          <p className="lead">
            Conoce nuestro camino y los pasos que hemos dado
            para construir Cruz Blanca.
          </p>

        </div>


        <div className="timeline">

          {eventos.map((evento, index) => (

            <div
              className={`timeline-item ${evento.lado}`}
              key={index}
              data-aos={
                evento.lado === "izquierda"
                  ? "fade-right"
                  : "fade-left"
              }
            >

              <div className="timeline-contenido">

                <div className="timeline-imagen">

                  <img
                    src={evento.imagen}
                    alt={evento.titulo}
                  />

                </div>


                <div className="timeline-texto">

                  <span className="timeline-año">
                    {evento.año}
                  </span>

                  <h3>
                    {evento.titulo}
                  </h3>

                  <p>
                    {evento.texto}
                  </p>

                </div>

              </div>


              <div className="timeline-punto">
                {index + 1}
              </div>

            </div>

          ))}

        </div>

      </section>


    </div>
  );
}

export default Nosotros;