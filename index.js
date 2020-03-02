const OriginalDate = root.Date;

const fate = (forcedMoment) => {
  root.Date =  function (...rest) {
    if(constructed){
      return new OriginalDate(...rest);
    }
    root.Date = OriginalDate;
    return forcedMoment;
  };
};

module.exports = fate;