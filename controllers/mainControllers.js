const express = require('express')
const path = require('path')

const controllers = {
    home: (req, res) => {
        // res.sendFile(path.join(__dirname + '/../views/home.html'))
        res.render('home')
    },
    register: (req, res) => {
        // res.sendFile(path.join(__dirname + '/../views/register.html'))
        res.render('register')

    },
    login: (req, res) => {
        // res.sendFile(path.join(__dirname + '/../views/login.html'))
        res.render('login')
    }

}

module.exports = controllers;