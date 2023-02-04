// const express = require("express")();

import mongoose from 'mongoose'

// const {MongoClient} = require ("mongodb")


//conexion a base de datos

const port = process.env.Port || 3000

const user = 'paoGelvez';
const password = 'tsP4v2tf5rKRqxi';
const dbname = 'ProyectoTindem'
const uri =  `mongodb+srv://${user}:${password}@cluster0.kzzhkwa.mongodb.net/${dbname}?retryWrites=true&w=majority`




mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology : true
})
    .then(()=>console.log('base de datos conectada'))
    .catch(e=> console.log(e))

















// const uri =  `mongodb+srv://paoGelvez:<tsP4v2tf5rKRqxi>@cluster0.kzzhkwa.mongodb.net/?retryWrites=true&w=majority`


// const client = new MongoClient(uri);
