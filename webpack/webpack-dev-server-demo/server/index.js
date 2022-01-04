const express = require('express')
// const cors = require('cors');


const app = express();
// app.use(cors);

app.get('/api', (req, res) => {
    res.json({
        b: 1,
        status: 0
    })
})

app.listen(3000)