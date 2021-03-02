const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(Array.isArray(arr)){
      let res = Math.max(...arr.map(i => this.calculateDepth(i)));
      return 1 + (res === -Infinity ? 0 : res);
    }else{
      return 0;
    };
  }
};