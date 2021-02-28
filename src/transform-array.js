const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(arr instanceof Array)){throw 'Error'}
  const res = [];
  let [ignore, double] = [false, false];
  arr.map((v, i) => {
    if(ignore == true){
      ignore = false
      if(arr[i + 1] == '--discard-prev' || arr[i + 1] == '--double-prev'){
        ignore = true
      };
      return;
    };
    if(double){
      res.push(v, v);
      double = false;
      return;
    };
    switch(v){
      case '--discard-next':
        ignore = true;
        break;
      case '--discard-prev':
        if(i > 0){res.pop()};
        break;
      case '--double-next':
        double = true;
        break;
      case '--double-prev':
        if(i > 0){res.push(arr[i - 1])};
        break;
      default:
        res.push(v);
    };
  })
  return res
};
