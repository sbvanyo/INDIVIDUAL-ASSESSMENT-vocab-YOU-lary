import { getCardData } from '../../api/cardData';
import { showCards } from '../../pages/cards';

const cardSearch = (event) => {
  const eventLC = event.target.value.toLowerCase();
  getCardData().then((data) => {
    const search = Object.values(data).filter((obj) => obj.words.toLowerCase().includes(eventLC));
    return search;
  }).then(showCards);
};

export default cardSearch;
