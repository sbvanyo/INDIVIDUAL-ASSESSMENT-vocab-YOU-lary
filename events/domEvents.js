// import addCardForm from '../components/forms/addCardForm';
import { deleteCard, getCardData, getSingleCard } from '../api/cardData';
import {
  fortranFilter,
  javascriptFilter,
  pythonFilter,
  sqlFilter,
} from '../api/cardFilters';
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

    // FORTRAN FILTER CLICK EVENT
    if (e.target.id.includes('fortran-btn')) {
      fortranFilter(user.uid).then((cards) => showCards(cards));
      console.warn('clicked fortran filter');
    }

    // JAVASCRIPT FILTER CLICK EVENT
    if (e.target.id.includes('javascript-btn')) {
      javascriptFilter(user.uid).then((cards) => showCards(cards));
      console.warn('clicked javascript filter');
    }

    // PYTHON FILTER CLICK EVENT
    if (e.target.id.includes('python-btn')) {
      pythonFilter(user.uid).then((cards) => showCards(cards));
      console.warn('clicked python filter');
    }

    // SQL FILTER CLICK EVENT
    if (e.target.id.includes('sql-btn')) {
      sqlFilter(user.uid).then((cards) => showCards(cards));
      console.warn('clicked SQL filter');
    }

    // ALL LANGS FILTER CLICK EVENT
    if (e.target.id.includes('all-btn')) {
      getCardData(user.uid).then(showCards);
      console.warn('clicked all filter');
    }
  });
};

export default domEvents;
