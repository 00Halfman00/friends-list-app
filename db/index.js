const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize('postgres://localhost/friends-list');
const faker = require('faker');

const Friend = db.define( 'friend', {
    name: {
        type: STRING
    }
});


const syncAndSeed = aync () => {
    await conn.sync( { force : true });
    const fakes = [];
    while(fakes.length < 3) {
        fakes.push(
            Friend.create({ name: faker.name.firstName() })
        )
    }
};


module.exports = {
    syncAndSeed,
    Friend
}

