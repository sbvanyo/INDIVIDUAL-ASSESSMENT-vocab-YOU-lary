import renderToDOM from '../../utils/renderToDOM';

const filterButtons = () => {
  const domString = `
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Fortran</button>
  <button type="button" class="btn btn-primary">JavaScript</button>
  <button type="button" class="btn btn-primary">Python</button>
  <button type="button" class="btn btn-primary">SQL</button>
  <button type="button" class="btn btn-primary">All</button>
</div>`;

  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
