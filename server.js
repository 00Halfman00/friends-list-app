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
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/api/friends', async (req, res, next) => {
  try {
    //console.log(Friend)
    const friends = await Friend.findAll( { order: [[ 'name' ]]});
    res.send(friends);
  } catch (err) {
    next(err);
  }
});

app.put('/api/friends', async (req, res, next) => {
  try {
    const friend = await Friend.findByPk(req.params.id);
    await friend.update(req.body);
    res.send(friend);
  } catch (err) {
    next(err);
  }
});

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send('Something went wrong: ' + err.message);
});

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.syncAndSeed();
    app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

init();
