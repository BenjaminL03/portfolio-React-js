function Portfolio() {
  const projets = [
    {
      image: "/images/fresh-food.jpg",
      titre: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      tech: "Site réalisé avec PHP et MySQL",
    },
    {
      image: "/images/restaurant-akira.jpg",
      titre: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      tech: "Site réalisé avec WordPress",
    },
    {
      image: "/images/espace-bien-etre.jpg",
      titre: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      tech: "Site réalisé avec LARAVEL",
    },
    {
      image: "/images/seo.jpg",
      titre: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
      tech: "Utilisation des outils SEO",
    },
    {
      image: "/images/api.jpg",
      titre: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      tech: "PHP - SYMFONY",
    },
    {
      image: "/images/maquette.jpg",
      titre: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      tech: "Réalisé avec FIGMA",
    },
  ];

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
        <h1 className="display-4">Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div
          className="border-bottom border-primary mx-auto"
          style={{ width: "100px", borderWidth: "3px" }}
        ></div>
      </section>

      {/* Grille des projets */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {projets.map((projet, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img
                    src={projet.image}
                    className="card-img-top"
                    alt={projet.titre}
                  />
                  <div className="card-body text-center">
                    <h2 className="card-title h5">{projet.titre}</h2>
                    <p className="card-text">{projet.description}</p>
                    <a href="#" className="btn btn-primary">
                      Voir le site
                    </a>
                  </div>
                  <div className="card-footer text-center text-muted">
                    {projet.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
