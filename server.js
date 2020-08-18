const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const { nextTick } = require('process');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', async (req, res, next) => {
    try {
        
    } catch( err ) {
        next(err);
    }
})






const PORT = process.env.PORT || 3000;

const init = async () => {
    try { 
        await db.syncAndSeed();
        app.listen( PORT, () => console.log(`listening on port: ${PORT}`))

    } catch( err ) {
        console.log(err);
    };
};

init();