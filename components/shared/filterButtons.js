import renderToDOM from '../../utils/renderToDOM';

const filterButtons = () => {
  const domString = `
<div id="filter-btn-group" class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" id="fortran-btn">Fortran</button>
  <button type="button" class="btn btn-primary" id="javascript-btn">JavaScript</button>
  <button type="button" class="btn btn-primary" id="python-btn">Python</button>
  <button type="button" class="btn btn-primary" id="sql-btn">SQL</button>
  <button type="button" class="btn btn-primary" id="all-btn">All</button>
</div>`;

  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
