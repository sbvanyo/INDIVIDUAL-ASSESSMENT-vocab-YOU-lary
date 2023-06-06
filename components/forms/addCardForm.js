import clearDOM from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

const addCardForm = (obj = {}) => {
  clearDOM();
  const domString = `
  <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add a new vocabulary card</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              
            <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}">
              <div class="form-box">
                <label for="title-input" class="form-label">Title:</label>
                <input type="text" class="form-control" id="title-input" placeholder="Title" value ="${obj.title || ''}" required>
              </div>
              <div class="form-box">
                <select class="form-select" id="language-input" aria-label="Default select example" required>
                  <option selected>Select a language</option>
                  <option value="fortran">Fortran</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="sql">SQL</option>
                </select>
              </div>
              <div class="form-box">
                <label for="definition-input" class="form-label">Definition:</label>
                <textarea class="form-control" id="definition-input" placeholder="Definition" rows="3" required>${obj.definition || ''}</textarea>
              </div>
              
              <button type="submit" id="submit-btn" for="submit-card">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
