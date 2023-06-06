import { createCard, getCardData, updateCard } from '../api/cardData';
import { showCards } from '../pages/cards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-card')) {
      console.warn('clicked submit form button', e.target.id);
      const payload = {
        title: document.querySelector('#title-input').value,
        language: document.querySelector('#language-input').value,
        definition: document.querySelector('#definition-input').value,
        uid: user.uid,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCardData(user.uid).then(showCards);
        });
      });
    }
  });
};

export default formEvents;
