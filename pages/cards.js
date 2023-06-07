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
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${entry.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Language: ${entry.language}</h6>
        <p class="card-text">${entry.definition}</p>
        <a id="update-card--${entry.firebaseKey}" class="card-link">Edit</a>
        <a id="delete-card--${entry.firebaseKey}" class="card-link">Delete</a>
      </div>
    </div>`;
  });
  renderToDOM('#card-space', domString);
};

export { emptyCards, showCards };
