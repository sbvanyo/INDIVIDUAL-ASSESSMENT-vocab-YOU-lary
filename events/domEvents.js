// import addCardForm from '../components/forms/addCardForm';
import { deleteCard, getCardData, getSingleCard } from '../api/cardData';
import addCardForm from '../components/forms/addCardForm';
import { showCards } from '../pages/cards';

const domEvents = (user) => {
  // DELETE A CARD CLICK EVENT
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      console.warn('clicked delete button', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');

      deleteCard(firebaseKey).then(() => {
        getCardData(user.uid).then(showCards);
      });
    }

    // UPDATE A CARD CLICK EVENT
    if (e.target.id.includes('update-card')) {
      console.warn('clicked edit button', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj, user));
    }
  });
};

export default domEvents;
