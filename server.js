const express = require('express')
const app = express()
const port = process.env.PORT || 3033
const path = require('path')

app.use(express.static(path.join(__dirname, '/dist/mtibu-frontend')));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/mtibu-frontend/index.html' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});