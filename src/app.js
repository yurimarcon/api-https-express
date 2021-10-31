const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path')

const app = express();
https.createServer({
    cert: fs.readFileSync(path.resolve('src/SSL/code.crt')),
    key: fs.readFileSync('src/SSL/code.key')
},app).listen(443, () => console.log('Rodando'))
app.listen(80, () => console.log('Rodando'))

app.get('/', (req, res)=>{
    
    res.json({
        "Hello":"World"
    });
    console.log('oi')
})