import { signOut } from '../utils/auth';
import addCardForm from '../components/forms/addCardForm';

const navigationEvents = () => {
  // SIGN OUT
  document.querySelector('#logout-btn').addEventListener('click', signOut);
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // SHOW ADD CARD FORM
    if (e.target.id.includes('add-card-btn')) {
      console.warn('clicked add card button');
      addCardForm();
    }
  });
};

export default navigationEvents;
