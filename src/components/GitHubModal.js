import { useState, useEffect } from "react";

function GitHubModal() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupération des données GitHub une seule fois au chargement
    fetch("https://api.github.com/users/BenjaminL03")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données GitHub:",
          error
        );
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="githubModalLabel">
              Mon profil GitHub
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            {loading ? (
              <p>Chargement...</p>
            ) : userData ? (
              <>
                <img
                  src={userData.avatar_url}
                  alt="Avatar GitHub"
                  className="rounded-circle mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5>
                  <i className="bi bi-person me-2"></i>
                  <a
                    href={userData.html_url}
                    className="text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {userData.login}
                  </a>
                </h5>
                <p>
                  <i className="bi bi-geo-alt me-2"></i>
                  {userData.location || "Non renseigné"}
                </p>
                <p>
                  <i className="bi bi-card-text me-2"></i>
                  {userData.bio || "Aucune bio"}
                </p>
                <p>
                  <i className="bi bi-folder me-2"></i>Repositories :{" "}
                  {userData.public_repos}
                </p>
                <p>
                  <i className="bi bi-people me-2"></i>Followers :{" "}
                  {userData.followers}
                </p>
                <p>
                  <i className="bi bi-person-plus me-2"></i>Following :{" "}
                  {userData.following}
                </p>
              </>
            ) : (
              <p>Erreur lors du chargement des données.</p>
            )}
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubModal;
