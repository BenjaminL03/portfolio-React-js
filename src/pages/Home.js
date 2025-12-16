function Home() {
  return (
    <>
      {/* Section Hero */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${process.env.PUBLIC_URL}/images/hero-bg.jpg)`,
        }}
      ></section>

      {/* Section À propos */}
      <section id="apropos" className="py-5">
        <div className="container">
          <div className="row">
            {/* Colonne gauche : À propos */}
            <div className="col-lg-6 mb-4">
              <h2 className="mb-3">A propos</h2>
              <div
                className="border-bottom border-primary mb-3"
                style={{ width: "50px", borderWidth: "3px" }}
              ></div>
              <img
                src="/images/john-doe.jpg"
                alt="John Doe"
                className="img-fluid mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                delectus reiciendis impedit aut iure enim placeat? Natus, neque
                at?
              </p>
            </div>

            {/* Colonne droite : Compétences */}
            <div className="col-lg-6">
              <h2 className="mb-3">Mes compétences</h2>
              <div
                className="border-bottom border-primary mb-4"
                style={{ width: "50px", borderWidth: "3px" }}
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
      </section>
    </>
  );
}

export default Home;
