import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-btn').addEventListener('click', signOut);
};

export default navigationEvents;
