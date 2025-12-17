function Contact() {
  return (
    <>
      {/* Bannière */}
      <section className="py-5 text-center">
        <h1 className="display-4">Contact</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div
          className="border-bottom border-primary mx-auto"
          style={{ width: "100px", borderWidth: "3px" }}
        ></div>
      </section>

      {/* Formulaire et coordonnées */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Formulaire */}
            <div className="col-lg-6 mb-4">
              <h2 className="mb-3">Formulaire de contact</h2>
              <div
                className="border-bottom border-primary mb-4"
                style={{ width: "100px", borderWidth: "3px" }}
              ></div>

              <form>
                <div className="mb-3">
                  <label htmlFor="nom" className="visually-hidden">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="form-control"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="visually-hidden">
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Votre adresse email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telephone" className="visually-hidden">
                    Votre numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="sujet" className="visually-hidden">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    className="form-control"
                    placeholder="Sujet"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="visually-hidden">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>

            {/* Coordonnées et carte */}
            <div className="col-lg-6">
              <h2 className="mb-3">Mes coordonnées</h2>
              <div
                className="border-bottom border-primary mb-4"
                style={{ width: "100px", borderWidth: "3px" }}
              ></div>

              <p>
                <strong>Benjamin L</strong>
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

              {/* Carte Google Maps */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7450051085147!2d4.804912776525044!3d45.77818397108285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65f0b22b2d%3A0x8c5f0e3f5c5c5c5c!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Localisation"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
