const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  console.log(str, options);
  str = str.toString()
  if(!options.separator){options.separator = '+'}
  if(!options.additionSeparator){options.additionSeparator = '|'}
  if(options.addition){
    options.addition = options.addition.toString();
    while(options.additionRepeatTimes > 0){
      options.addition += `${options.additionSeparator}${options.addition}`
      --options.additionRepeatTimes
    }
  }
  str += `${options.addition ? options.addition : ''}`
  while(options.repeatTimes > 0){
    str += `${options.separator}${str}`
    --options.repeatTimes
  }
  console.log(str, options);
  return str
};
  