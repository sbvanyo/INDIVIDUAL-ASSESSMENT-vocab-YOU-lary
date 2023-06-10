import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `
    <nav id="navbar-id" class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="fas fa-solid fa-code fa-2x" id="nav-logo" alt="logo"></i>
        <h3 id="nav-title">vocab-YOU-lary</h3>
      </a>
    </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <div id="nav-items">
            <li>
              <input class="form-control mr-sm-2" id="search" placeholder="search entries" aria-label="Search"/>
            </li>
            <li class="nav-item">
              <button id="add-card-btn" class="btn btn-danger" type="submit">add card</button>
            </li>
            <div id="logout-btn"></div>
          </div>
        </ul>
      </div>
    </div>
  </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
