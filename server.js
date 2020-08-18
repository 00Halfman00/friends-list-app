const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const { Friend } = db.models;
// const { nextTick } = require('process');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use( '/', express.static(path.join(__dirname, 'public')));

app.use('/friends', async (req, res, next) => {
    try {
        console.log(Friend)
        const friends = await Friend.findAll();
        res.send(friends)
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