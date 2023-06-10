import { signOut } from '../utils/auth';
import addCardForm from '../components/forms/addCardForm';
import { getCardData } from '../api/cardData';
import { showCards } from '../pages/cards';

const navigationEvents = (user) => {
  // SIGN OUT
  document.querySelector('#logout-btn').addEventListener('click', signOut);

  const cardSearch = async (event) => {
    const eventLC = event.target.value.toLowerCase();
    try {
      const data = await getCardData(user.uid);
      const search = Object.values(data).filter((entry) => entry.definition.toLowerCase().includes(eventLC) || entry.title.toLowerCase().includes(eventLC));
      showCards(search);
    } catch (error) {
      console.error('error fetching card data', error);
    }
  };
  document.querySelector('#search').addEventListener('keyup', cardSearch);

  document.querySelector('#navigation').addEventListener('click', (e) => {
    // SHOW ADD CARD FORM
    if (e.target.id.includes('add-card-btn')) {
      console.warn('clicked add card button');
      addCardForm();
    }
  });
};

export default navigationEvents;
