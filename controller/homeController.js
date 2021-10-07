'use strict';

exports.index = (req, res) => {
    res.sendfile('public/index.html');
};

exports.edit = (req, res) => {
    res.sendfile('public/edit.html');
};
exports.editUpdate = (req, res) => {

    console.log('editUpdate is alive!')
};