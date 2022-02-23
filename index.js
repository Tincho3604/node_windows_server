const express = require ('express');

const server = express();

const baseLocalOrigin = 'http://localhost:'
const port = 8081

server.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Server Express')
})


server.listen(port, () => console.log(`Server Express running on port ${baseLocalOrigin}${port}`))