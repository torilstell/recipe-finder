const express = require('express')
const app = express()

var port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/stuff', (req, res) => res.send('Stuff is fantastic!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




