const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0
    function rec(arr){
      if(arr instanceof Array){
        depth++
        arr.forEach(v => {
          return depth + rec(v)
        })
      }
    }
    rec(arr)
    console.log(depth, arr);
    return depth
  }
};