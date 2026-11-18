function Footer() {
    return (
      <footer className="footer py-4 mt-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3 text-center text-md-start">
              <h5 className="mb-3 bold">Contáctanos</h5>
              <p className="mb-1">Teléfono: <a className="LinkF" href="tel:+51959196872">+51 959 196 872</a></p>
              <p className="mb-1">Email: <a className="LinkF" href="mailto:cruzblancaaleluyahpe.com">cruzblancaaleluyahpe.com</a></p>
            </div>
  
            <div className="col-md-4 mb-3">
              <p>© 2026 - Cruz Blanca. Todos los derechos reservados.</p>
            </div>
  
            <div className="col-md-4 mb-3">
              <h5 className="bold">Síguenos</h5>
              <ul className="list-unstyled">
                <li><i className="bi bi-tiktok"> </i><a className="LinkF" href="https://www.tiktok.com/@cruzblancaaleluyah" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><i className="bi bi-instagram"> </i><a className="LinkF" href="https://www.instagram.com/cruzblancaaleluyah/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><i className="bi bi-facebook"> </i><a className="LinkF" href="https://www.facebook.com/profile.php?id=61595586329843" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><i className="bi bi-linkedin"> </i><a className="LinkF" href="https://www.linkedin.com/company/cruzblancaaleluyah/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;