import { Helmet } from "react-helmet";

function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - Benjamin L</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Titre */}
      <section className="py-5 text-center">
        <h1 className="display-4">Mentions légales</h1>
        <div
          className="border-bottom border-primary mx-auto"
          style={{ width: "100px", borderWidth: "3px" }}
        ></div>
      </section>

      {/* Accordéons */}
      <section className="py-5">
        <div className="container">
          <div className="accordion" id="mentionsAccordion">
            {/* Editeur du site */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#editeur"
                >
                  Editeur du site
                </button>
              </h2>
              <div
                id="editeur"
                className="accordion-collapse collapse show"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>John Doe</strong>
                  </p>
                  <p>
                    <i className="bi bi-building me-2"></i>40 rue Laure Diebold
                  </p>
                  <p>
                    <i className="bi bi-geo-alt me-2"></i>69009 Lyon, France
                  </p>
                  <p>
                    <i className="bi bi-phone me-2"></i>10 20 30 40 50
                  </p>
                  <p>
                    <i className="bi bi-envelope me-2"></i>benjamin.l@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#hebergeur"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="hebergeur"
                className="accordion-collapse collapse"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    <strong>alwaysdata</strong>
                  </p>
                  <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                  <p>
                    <i className="bi bi-globe me-2"></i>
                    <a
                      href="https://www.alwaysdata.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#credits"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="credits"
                className="accordion-collapse collapse"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Ce site a été réalisé par Benjamin L, étudiant au{" "}
                    <a
                      href="https://www.centre-europeen-formation.fr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Centre Européen de formation
                    </a>
                    .
                  </p>
                  <p>
                    Les images utilisées sur ce site sont libres de droits et
                    ont été obtenues sur le site{" "}
                    <a
                      href="https://pixabay.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pixabay
                    </a>
                    .
                  </p>
                  <p>
                    La favicon de ce site a été fournie par{" "}
                    <a
                      href="https://www.flaticon.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      John doe Icons erstellt von Freepik - Flaticon
                    </a>
                    .
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

export default MentionsLegales;
