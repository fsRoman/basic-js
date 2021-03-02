const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  } = options;
  str = String(str);
  if(String(addition) !== 'undefined'){
    addition = String(addition);
    while(additionRepeatTimes > 1){
      addition += `${additionSeparator}${options.addition}`;
      --additionRepeatTimes;
    };
    str += addition;
  }
  let res = str;
  while(repeatTimes > 1){
    res += `${separator}${str}`;
    --repeatTimes;
  };
  return res;
};
  