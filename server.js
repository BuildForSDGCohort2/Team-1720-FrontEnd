const express = require('express')
const app = express()
const port = process.env.PORT || 3033
const path = require('path')

app.use(express.static(path.join(__dirname, '/dist/mtibu-frontend')));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/mtibu-frontend/index.html' });
});

app.listen(port, () => {
    console.info(`Example app listening at http://localhost:${port}`);
});