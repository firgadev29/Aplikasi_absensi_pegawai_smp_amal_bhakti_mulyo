const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

const port = 8080

app.use(express.static('public'))

app.listen(port, () => {
    console.log('server is working..')
})

app.get('/masuk', (req, res) => {
    res.render('login')
})

app.get('/daftar', (req, res) => {
    res.render('createAccount')
})

app.get('/dashboard/form/absenpegawai', (req, res) => {
    res.render('absentForm')
})

app.get('/dashboard/historiabsenpegawai', (req, res) => {
    res.render('absentHistory')
})

app.get('/dashboard/pegawai', (req, res) => {
    res.render('listEmployee')
})