module.exports = (app, Book) => {
    app.get('/books', (req, res) => {
        Book.find().exec(function (err, books) {
            if (err) {
                console.log(err);
            } else {
                return res.send(books);
            }
        });
    });
    
    app.get('/books/:_id', (req, res) => {
        Book.findOne({ _id: req.params._id }).exec(function (err, book) {
            if (err) {
                console.log(err);
            } else {
                return res.send(book);
            }
        });
    });
    
    app.post('/books', (req, res) => {
        var book = new Book(req.body);
    
        book.save(function (err, book) {
            if (err) {
                console.log(err);
            } else {
                return res.send(book);
            }
        });
    });
    
    app.put('/books/:_id', (req, res) => {
        Book.findOne({ _id: req.params._id }).exec(function (err, book) {
            if (err) {
                console.log(err);
            } else {
    
                book.title = req.body.title;
                book.author = req.body.author;
    
                book.save(function (err, book) {
                    if (err) {
                        console.log(err);
                    } else {
                        return res.send(book);
                    }
                });
            }
        });
    });
    
    app.delete('/books/:_id', (req, res) => {
        Book.findOne({ _id: req.params._id }).exec(function (err, book) {
            if (err) {
                console.log(err);
            } else {
                book.remove(function (err, book) {
                    if (err) {
                        console.log(err);
                    } else {
                        return res.send(book);
                    }
                });
            }
        });
    });
}