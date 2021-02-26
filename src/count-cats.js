const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  return cats.reduce(((t, c) => {
    return t += c.filter(i => i == '^^').length
  }), 0)
};
