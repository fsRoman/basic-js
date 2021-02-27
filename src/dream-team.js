const CustomError = require("../extensions/custom-error");

// module.exports = 
function createDreamTeam(members) {
  return members;
};


console.log('createDreamTeam(ADMM): ', createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));
console.log('createDreamTeam(LOO): ', createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));