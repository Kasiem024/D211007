'use strict';

console.log('app.js is alive!')

let dataURL = '../data/exercise1.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send();

console.log('Data received');

req.onload = () => {
    const data = req.response;

    const elementH1 = document.createElement('h1');
    const elementP = document.createElement('p');
    const elementImg = document.createElement('img')

    elementP.textContent = data.intro;
    elementH1.textContent = data.headline;
    elementImg.setAttribute('src', data.articleImage);

    document.getElementById('Exercise1').appendChild(elementH1);
    document.getElementById('Exercise1').appendChild(elementP);
    document.getElementById('Exercise1').appendChild(elementImg);

};