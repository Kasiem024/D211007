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
    const elementBtn = document.createElement('button');
    const elementImg = document.createElement('img')
    elementImg.id = 'imgId';
    elementBtn.id = 'btnId'

    elementP.textContent = data.intro;
    elementH1.textContent = data.headline;
    elementImg.setAttribute('src', data.articleImage);
    elementBtn.textContent = "Hide";

    elementBtn.addEventListener('click', Button1Handler);

    document.getElementById('Exercise1').appendChild(elementH1);
    document.getElementById('Exercise1').appendChild(elementP);
    document.getElementById('Exercise1').appendChild(elementBtn);
    document.getElementById('Exercise1').appendChild(elementImg);
};

const Button1Handler = () => {
    const elementImg = document.getElementById('imgId');
    const elementBtn = document.getElementById('btnId');

    if (elementImg.style.display == 'none') {
        elementImg.style.display = 'block';
        elementBtn.textContent = 'Hide'
    } else {
        elementImg.style.display = 'none';
        elementBtn.textContent = 'Show'
    }

}