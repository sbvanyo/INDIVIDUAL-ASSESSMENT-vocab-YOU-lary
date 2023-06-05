import getCardData from '../api/cardData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import { showCards } from '../pages/cards';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  navigationEvents(user);

  // renders books to DOM on app load
  getCardData(user.uid).then((cards) => showCards(cards));
};

export default startApp;
