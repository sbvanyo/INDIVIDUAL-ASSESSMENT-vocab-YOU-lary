import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyCards = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#card-space', domString);
};

const showCards = (array) => {
  clearDOM();

  let domString = '';
  array.forEach((entry) => {
    domString += `
      <div class="card" id="${entry.language}-card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${entry.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="card-lang">Language: ${entry.language}</h6>
          <hr>
          <p class="card-text">${entry.definition}</p>
          <div id="card-icons">
            <i id="update-card--${entry.firebaseKey}" class="fas fa-solid fa-pen fa-lg"></i>
            <i id="delete-card--${entry.firebaseKey}" class="fas fa-solid fa-trash fa-lg"></i>
          </div>
        </div>
      </div>`;
  });
  renderToDOM('#card-space', domString);
};

export { emptyCards, showCards };
