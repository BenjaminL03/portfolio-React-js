function Home() {
  return (
    <>
      {/* Section Hero */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero-bg.jpg')",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">Bonjour, je suis Benjamin L</h1>
          <h2 className="fs-4">Développeur web full stack</h2>
          <button
            type="button"
            className="btn btn-danger mt-3"
            data-bs-toggle="modal"
            data-bs-target="#githubModal"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* Section À propos et Compétences */}
      <section id="apropos" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="border rounded p-4 box-shadow">
                <div className="row">
                  {/* Colonne gauche : À propos */}
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <h2 className="mb-3 fw-bold">A propos</h2>
                    <div
                      className="border-bottom border-primary mb-3"
                      style={{
                        width: "380px",
                        borderWidth: "4px",
                        borderTop: "5px solid",
                      }}
                    ></div>
                    <img
                      src="/images/john-doe-about.jpg"
                      alt="Benjamin L"
                      className="img-fluid mb-3"
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>
                  </div>

                  {/* Colonne droite : Compétences */}
                  <div className="col-lg-6">
                    <h2 className="mb-3 fw-bold">Mes compétences</h2>
                    <div
                      className="border-bottom border-primary mb-4"
                      style={{
                        width: "380px",
                        borderWidth: "4px",
                        borderTop: "5px solid",
                      }}
                    ></div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>HTML5</span>
                        <span>90%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>CSS3</span>
                        <span>80%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>JAVASCRIPT</span>
                        <span>70%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>PHP</span>
                        <span>60%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>REACT</span>
                        <span>50%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
