import client from '../utils/client';

const endpoint = client.databaseURL;

const getCardData = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
  console.warn(uid);
});

export default getCardData;
