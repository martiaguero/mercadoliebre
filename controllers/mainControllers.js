const express = require('express')
const path = require('path')

const controllers = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname + '/views/home.html'))
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname + '/views/register.html'))
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname + '/views/login.html'))
    }

}

module.exports = controllers;