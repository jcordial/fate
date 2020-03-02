const OriginalDate = global.Date;

/**
 * @param {Date} forcedMoment
 */
const fate = (forcedMoment = new Date()) => {
  let constructed = false;
  global.Date =  function (...rest) {
    if(constructed){
      return new OriginalDate(...rest);
    }
    global.Date = OriginalDate;
    constructed = true;
    return forcedMoment;
  };
};

module.exports = fate;