import { getCardData } from '../api/cardData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showCards } from '../pages/cards';
import filterButtons from '../components/shared/filterButtons';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  filterButtons();
  logoutButton();
  navigationEvents(user);

  // renders cards to DOM on app load
  getCardData(user.uid).then((cards) => showCards(cards));
};

export default startApp;
