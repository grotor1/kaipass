const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

require('dotenv').config()

app.use(express.json({extended: true}))
app.use(logger('dev'))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/fetch', require('./routes/dataFetch.routes'))
app.use(express.static(path.resolve('client', 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

const PORT = process.env.PORT || config.get('port') || 5000

async function start () {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`On air. Port: ${PORT}`))
    }catch (e) {
        console.log('Error', e.message)
        process.exit(1);
    }
}

start()


