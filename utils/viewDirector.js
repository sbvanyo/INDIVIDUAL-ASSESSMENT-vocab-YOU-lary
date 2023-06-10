import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import startApp from './startApp';
import client from './client';
import mainTitle from '../public/mainTitle';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      // logoutButton();
      startApp(user);
    } else {
      // person is NOT logged in
      mainTitle();
      loginButton();
    }
    // console.warn(user);
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
