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
    const btnUpdate = document.createElement('button');

    document.getElementById('Exercise2').style.maxWidth = '180px';

    tBox1.value = data.headline;
    tBox2.value = data.intro;
    tBox3.value = data.articleImage;
    btnUpdate.textContent = 'Update';

    btnUpdate.addEventListener('click', ButtonEventhandler);

    document.getElementById('Exercise2').appendChild(tBox1);
    document.getElementById('Exercise2').appendChild(tBox2);
    document.getElementById('Exercise2').appendChild(tBox3);
    document.getElementById('Exercise2').appendChild(btnUpdate);
};

const ButtonEventhandler = () => {
    console.log('Button Update pushed')
}