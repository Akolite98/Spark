const express = require('express');
const colors = require('colors');
const database = require('./src/database/db')
const app = express();
app.use(express.urlencoded({ extended: true }))


require('dotenv').config();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT


app.use(express.json())

app.listen(PORT, () => {
    console.log(`🚀 ${'Server up and running'.blue}`);
    database();
});