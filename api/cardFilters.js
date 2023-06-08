import client from '../utils/client';

const endpoint = client.databaseURL;

// FORTRAN FILTER
const fortranFilter = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="language"&equalTo="Fortran"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// JAVASCRIPT FILTER
const javascriptFilter = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="language"&equalTo="JavaScript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// PYTHON FILTER
const pythonFilter = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="language"&equalTo="Python"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// SQL FILTER
const sqlFilter = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="language"&equalTo="SQL"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  fortranFilter,
  javascriptFilter,
  pythonFilter,
  sqlFilter,
};
