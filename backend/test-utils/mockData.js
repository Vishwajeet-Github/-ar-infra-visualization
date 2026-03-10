const faker = require("faker");

const generateUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: "Test1234"
  };
};

module.exports = {
  generateUser
};