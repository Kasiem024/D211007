'use strict';

console.log('app.js is alive!')

let dataURL = '../data/exercise1.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send();

console.log('data received');

req.onload = () => {

    document.getElementById('Exercise1').innerHTML;

    const list = document.getElementById("list");

    list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;

};