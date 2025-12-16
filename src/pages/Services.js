function Services() {
  return (
    <>
      {/* Bannière */}
      <section
        className="py-5 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="display-4">Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <div
          className="border-bottom border-primary mx-auto"
          style={{ width: "100px", borderWidth: "3px" }}
        ></div>
      </section>

      {/* Cartes services */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* UX Design */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4">
                <div className="card-body">
                  <i className="bi bi-pen fs-1 text-primary mb-3"></i>
                  <h3 className="card-title">UX Design</h3>
                  <p className="card-text">
                    L'UX Design est une discipline qui consiste à concevoir des
                    produits (sites web, applications mobiles, logiciels, objets
                    connectés, etc.) en plaçant l'utilisateur au centre des
                    préoccupations. L'objectif est de rendre l'expérience
                    utilisateur la plus fluide et agréable possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Développement web */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4">
                <div className="card-body">
                  <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
                  <h3 className="card-title">Développement web</h3>
                  <p className="card-text">
                    Le développement de sites web consiste à créer des sites
                    internet en utilisant des langages de programmation (HTML,
                    CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                    React, Angular, etc.).
                  </p>
                </div>
              </div>
            </div>

            {/* Référencement */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4">
                <div className="card-body">
                  <i className="bi bi-search fs-1 text-primary mb-3"></i>
                  <h3 className="card-title">Référencement</h3>
                  <p className="card-text">
                    Le référencement naturel (SEO) est une technique qui
                    consiste à optimiser un site web pour le faire remonter dans
                    les résultats des moteurs de recherche (Google, Bing, Yahoo,
                    etc.). L'objectif est d'attirer un maximum de visiteurs
                    qualifiés sur le site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
