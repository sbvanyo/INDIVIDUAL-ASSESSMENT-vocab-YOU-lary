import clearDOM from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

const addCardForm = (obj = {}) => {
  clearDOM();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}">
      <div class="form-box">
        <label for="title-input" class="form-label">Title:</label>
        <input type="text" class="form-control" id="title-input" placeholder="Title" value ="${obj.title || ''}" required>
      </div>
      <div class="form-box">
        <select class="form-select" id="language-input" aria-label="Default select example" required>
          <option selected>Select a language</option>
          <option value="Fortran">Fortran</option>
          <option value="Javascript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="SQL">SQL</option>
        </select>
      </div>
      <div class="form-box">
        <label for="definition-input" class="form-label">Definition:</label>
        <textarea class="form-control" id="definition-input" placeholder="Definition" rows="3" required>${obj.definition || ''}</textarea>
      </div>
      
      <button type="submit" id="submit-btn" class="btn btn-danger" for="submit-card">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
