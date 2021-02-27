const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity ||
    typeof sampleActivity != 'string' ||
    isNaN(Number(sampleActivity)) ||
    Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) return false;
  
  sampleActivity = Number(sampleActivity);
  const k = Math.LN2 / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return t;
};
