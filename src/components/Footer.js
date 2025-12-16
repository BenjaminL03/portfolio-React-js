import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Coordonnées */}
          <div className="col-md-4 mb-3">
            <h5>John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>

            {/* Icônes réseaux sociaux */}
            <a
              href="https://github.com"
              className="text-white me-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github fs-4"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-white me-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-4 mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-white text-decoration-none"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Dernières réalisations */}
          <div className="col-md-4 mb-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Fresh Food
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Restaurant Akira
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Espace bien-être
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Création d'une API
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Maquette d'un site
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
