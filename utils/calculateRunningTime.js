const calculateRunningTime = (startTime, currentTime) => {
  const sec = Math.round((currentTime - startTime) / 1000);

  return `\nCurrent running time: ${sec} sec`;
};

module.exports = calculateRunningTime;
