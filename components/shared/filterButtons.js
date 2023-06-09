import renderToDOM from '../../utils/renderToDOM';

const filterButtons = () => {
  const domString = `
<div id="filter-btn-group" class="btn" aria-label="Basic example">
  <button type="button" class="btn-primary" id="fortran-btn">fortran</button>
  <button type="button" class="btn-primary" id="javascript-btn">javascript</button>
  <button type="button" class="btn-primary" id="python-btn">python</button>
  <button type="button" class="btn btn-primary" id="sql-btn">sql</button>
  <button type="button" class="btn btn-primary" id="all-btn">all</button>
</div>`;

  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
