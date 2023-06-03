import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Bootstrap
      </a>
    </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <div id="nav-buttons">
            <li class="nav-item">
              <button id="add-card-btn" class="btn btn-danger" type="submit">Add Card</button>
            </li>
            <div id="logout-form-container"></div>
          </div>
        </ul>
      </div>
    </div>
  </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
