function FAQ() {
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="text-center fw-bold mb-3 resalto linea">
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-center text-secondary mb-4 fs-5">
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
            </p>

            <div className="accordion" id="faq">
              <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >

                    ¿Qué productos ofrece Cruz Blanca?
                  </button>
                </h2>

                <div
                  id="faq1"
                  className="accordion-collapse collapse "
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    Ofrecemos productos farmacéuticos, de cuidado personal,
                    bienestar y otros artículos orientados a mejorar la salud y la
                    calidad de vida de nuestros clientes.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    ¿Cuál es el horario de atención?
                  </button>
                </h2>

                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    Atendemos de lunes a sábado. El horario puede variar según la
                    sede.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    ¿Dónde se encuentran ubicados?
                  </button>
                </h2>

                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    Contamos con establecimientos en distintas ciudades del Perú.
                    Consulta la sección de contacto para conocer la sede más
                    cercana.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    ¿Los productos cuentan con garantía de calidad?
                  </button>
                </h2>

                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    Sí. Trabajamos con productos que cumplen los estándares de
                    calidad y las normas sanitarias vigentes.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    ¿Cómo puedo comunicarme con Cruz Blanca?
                  </button>
                </h2>

                <div
                  id="faq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    Puedes comunicarte con nosotros mediante teléfono, correo
                    electrónico o nuestras redes sociales.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
