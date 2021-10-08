'use strict';

exports.index = (req, res) => {
    res.sendfile('public/index.html');
};

exports.edit = (req, res) => {
    res.sendfile('public/edit.html');
};

exports.editUpdate = (req, res) => {
    console.log('editUpdate is alive!');

    console.log("data:" + req.body.tBoxName1);
    console.log("data:" + req.body.tBoxName2);
    console.log("data:" + req.body.tBoxName3);

    console.log('editUpdate is alive again!');
    res.sendfile('./public/edit.html');

};