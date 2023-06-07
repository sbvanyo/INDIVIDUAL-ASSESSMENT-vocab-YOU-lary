// import addCardForm from '../components/forms/addCardForm';
import { deleteCard, getCardData } from '../api/cardData';
import { showCards } from '../pages/cards';

const domEvents = (user) => {
  // DELETE A BOOK ON CLICK
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      console.warn('clicked delete button', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');

      deleteCard(firebaseKey).then(() => {
        getCardData(user.uid).then(showCards);
      });
    }
  });
};

export default domEvents;
