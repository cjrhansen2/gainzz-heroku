const validatorFactory = require("./validatorFactory");

const registerValidator = validatorFactory({
  email: { type: "email" },
  password: { type: "string", empty: false },
  username: {type: "string"}
});

module.exports = registerValidator;