const crypto = require("crypto");

const getStringifiedString = (data) => {
  return JSON.stringify(data);
};

const createHashObj = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

module.exports = {
  getStringifiedString: getStringifiedString,
  createHashObj: createHashObj,
};
