# vocab-YOU-lary Web App

## Link to webpage: https://staceyvanyo-vocab-you-lary.netlify.app/

## Overview + Features: 
A web app designed to assist in studying programming languages via personalized collections of vocab cards. Users can create, read, update, delete, search, and filter their cards as needed. Great for college students, bootcamp attendees, the tech-curious, and learners of all stripes looking to add some structure (and a vibey aesthetic) to their learning journey.

## Screenshots:
<img width="1335" alt="Screen Shot 2023-06-10 at 12 39 39 PM" src="https://github.com/sbvanyo/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary/assets/120522998/d15f9947-5733-4b03-8176-3e705f18127b">

<img width="1324" alt="Screen Shot 2023-06-10 at 12 33 15 PM" src="https://github.com/sbvanyo/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary/assets/120522998/384d3f8e-ceb5-4cd9-9571-5c16d73e936f">

<img width="1340" alt="Screen Shot 2023-06-10 at 12 31 13 PM" src="https://github.com/sbvanyo/INDIVIDUAL-ASSESSMENT-vocab-YOU-lary/assets/120522998/ee3784f5-e9ab-4602-8ba7-e299e1fcffba">

## Loom walkthrough: https://www.loom.com/share/21b3a67b1a48400fa13bf31972474dcd

Figma wireframe: https://www.figma.com/file/Mk0lMMZlfZhzhkbYCpLDko/vocab-YOU-lary-wireframe?type=design&node-id=0%3A1&t=tnvFxkUqQpum6JZa-1

dbDiagram ERD: https://dbdiagram.io/d/64656429dca9fb07c44980ad

Contributors: Stacey Vanyo (https://github.com/sbvanyo)

<hr>


# Q2 - Individual Assessment: Vocab-YOU-lary

[VIEW PROJECT INSTRUCTIONS](./PROJECT_INSTRUCTIONS.MD)

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Other important tidbits](#other-important-tidbits)
    - [Console messages](#console-messages)
    - [Including images with webpack](#including-images-with-webpack)
    - [Importing CSS](#importing-cssscss)
    - [Deploying on Netlify](#deploying-on-netlify)
___

## Get Started

1. Clone your new repo to your local machine

## Starting the Project
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. Rename the `.sample.env` file to `.env` file. The final file name should be `.env`
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. To start your application, run `npm start`

### If you see this, you are set to go!
![lit-screen](https://user-images.githubusercontent.com/29741570/190486162-27e9032d-266f-4962-a85c-fc40c58f33db.png)

**NOTES:** 
- Changes you make to the project will make the browser reload on save...no more hard refresh unless something goes wrong.
- You will no longer be using the `hs -o` command. To start your server, you will run `npm start`

## Other Important Tidbits
### Console messages
From this time forward, you will be expected to have a clean console in order for your assignments to be approved. This means that the use of `console.log` is acceptable **_(debugger is WAY better though)_** while developing, but will throw an error in your console like the image below, but all `logs` will have to be removed. You may use `console.error` and `console.warn` in your code however for messages. These need to all be removed before pushing to production unless they contain vital info for the user/developer.

![notacceptable](https://user-images.githubusercontent.com/29741570/190486163-3dd8640f-5dda-4f73-9436-6020fc9e00c4.png)

### Including Images with Webpack
If you have a folder of local images that you want to load into your code things get a little strange with webpack.  Remember the only way webpack knows about assets is if they are imported into your javascript files.  Even our CSS is not added until those files are imported into our javascript files.  Below is some sample code for how to load a local image file into your project

```js
import cat from './assets/cat.jpg';

let domString = `<img src=${cat} alt="picture of a cat"/>`;

document.getElementById('cat').innerHTMl = domString;
```

### Importing CSS/SCSS
**NOTE:** We will be using SCSS files. They are used the same way your CSS files work, with some added benefits that we will discuss later.

Since Webpack is making the connection to the JS and CSS for us and we are no longer manually adding links or script tags to our HTML, we have to get our styles to the application some way...

Here is how we add our styles using webpack:

```js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>');
  console.log('YOU ARE UP AND RUNNING!');
};

init();
```

### Deploying on Netlify

- Build Command: `npm run build`
- Publish directory: `dist`
- Add Environmental Variables (NOT REQUIRED for Apps that do not use API Keys, etc)
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## More Info and Resources on Webpack
- Visit the [Webpack documentation](https://webpack.js.org/concepts/) if you want to explore more.
- [Info on our Webpack Config](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-2-patterns-and-tools/chapters/webpack-configure.md)
