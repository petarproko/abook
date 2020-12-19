/*
* Created by Petar Prokopenko on 1/15/19
* All right reserved. Do not use without permissions!
*/

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

const connection = mongoose.createConnection('mongodb://localhost:27017/abook-db', {useNewUrlParser: true});

const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'Author'
    },
    date: Date,
});

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    books: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    }]
});

const Book = connection.model('Book', bookSchema);
const Author = connection.model('Author', authorSchema);

try {
    require('./routes/book.routes')(app, Book);
    require('./routes/author.routes')(app, Author);
} catch (error) {
    console.log(error);
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});