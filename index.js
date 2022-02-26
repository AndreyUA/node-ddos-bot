const axios = require("axios");

const calculateRunningTime = require("./utils/calculateRunningTime");
const linksArray = require("./utils/linksArray");

let startTime = new Date();

const executeRequest = (url) => {
  const interval = setInterval(async () => {
    try {
      await axios.get(url);

      console.log(
        `Success req to ${url}. Status: SUCCESS. ${calculateRunningTime(
          startTime,
          new Date()
        )}`
      );
    } catch (error) {
      console.log(
        `Failed req to ${url}. Status: ERROR. ${calculateRunningTime(
          startTime,
          new Date()
        )}`
      );

      console.log("REQUEST TERMINATED!!!");

      stopInterval();
    }
  }, 10000);

  const stopInterval = () => clearInterval(interval);
};

linksArray.forEach((link) => executeRequest(link));
