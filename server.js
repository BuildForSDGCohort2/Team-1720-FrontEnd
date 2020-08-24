const express = require('express')
const app = express()
const port = process.env.PORT || 3033

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/mtibu-frontend/' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});