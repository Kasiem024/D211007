'use strict';

console.log('edit.js is alive!')

let dataURL = '../data/exercise1.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send();

console.log('Data received');


req.onload = () => {
    const data = req.response;

    const tBox1 = document.createElement('input');
    const tBox2 = document.createElement('input');
    const tBox3 = document.createElement('input');

    tBox1.value = data.headline;
    tBox2.value = data.intro;
    tBox3.value = data.articleImage;

    document.getElementById('Exercise2').appendChild(tBox1);
    document.getElementById('Exercise2').appendChild(tBox2);
    document.getElementById('Exercise2').appendChild(tBox3);

};