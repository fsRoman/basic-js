const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)){return false};
  return members
    .filter(i => typeof i == 'string')
    .map(i => {return [...i.trim().toUpperCase()][0]})
    .sort()
    .join('');
};
