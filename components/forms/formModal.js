// import renderToDOM from '../../utils/renderToDOM';

const formModal = () => {
  const modalString = `
  <div id="modal-overlay">
    <div class="modal" id="form-modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add a new vocabulary card</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        </div>
      </div>
    </div>
  </div>
</div>`;

  return modalString;
};

export default formModal;
