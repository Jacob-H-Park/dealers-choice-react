//SEQUELIZE
const { Sequelize, STRING, ENUM } = require("sequelize");
const db = new Sequelize("postgres://localhost/dealers_choice_react");

const Bass = db.define("bass", {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  brand: {
    type: ENUM("FENDER", "FODERA", "SIRE"),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const syncAndSeed = async () => {
  await db.sync({ force: true });
  await Bass.create({ name: "Mexican Standard", brand: "FENDER" });
  await Bass.create({ name: "American Standard", brand: "FENDER" });
  await Bass.create({ name: "Jazz Special", brand: "FENDER" });
  await Bass.create({ name: "Emperor 5", brand: "FODERA" });
  await Bass.create({ name: "Monarch 4", brand: "FODERA" });
  await Bass.create({ name: "V7 Vintage", brand: "SIRE" });
  await Bass.create({ name: "V7 Swamp", brand: "SIRE" });
  await Bass.create({ name: "Imperial 5", brand: "FODERA" });
};

syncAndSeed();

module.exports = { Bass, db };
