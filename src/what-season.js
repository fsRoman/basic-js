const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }else if (Object.getPrototypeOf(date) === Date.prototype){
    date.valueOf()
    const seasons = ['winter', 'spring', 'summer', 'autumn (fall)', 'winter'];
    return seasons[Math.floor((date.getMonth() + 1) / 3)];
  }else{
    throw new UserException('Error');
  };
};
