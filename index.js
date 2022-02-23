const express = require ('express');

const server = express();
const portA = process.env.PORT || 3000;

const baseLocalOrigin = 'http://localhost:'
const port = 8081

server.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Server Expresso')
})


server.listen(port, () => console.log(`Server Expresso running on port ${baseLocalOrigin}${port}`))