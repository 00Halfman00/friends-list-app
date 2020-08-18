const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize('postgres://localhost/friends-list');
//const faker = require('faker');

const Friend = conn.define( 'friend', {
    name: {
        type: STRING
    }
});
const Buddies = [
    { name: 'Moe'},
    { name: 'Larry' },
    { name: 'Curly'}
];

const syncAndSeed = async() => {
    try {
        await conn.sync( { force : true } );
        await Friend.bulkCreate(Buddies);
    } catch (err) {
        console.error(err);
    }
};


module.exports = {
    syncAndSeed,
    models: { Friend }
}

