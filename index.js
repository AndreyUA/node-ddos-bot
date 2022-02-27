const axios = require("axios");

const calculateRunningTime = require("./utils/calculateRunningTime");
const linksArray = require("./utils/linksArray");

let startTime = new Date();

const executeRequest = (url) => {
  const interval = setInterval(executeInterval, 1000);

  async function executeInterval() {
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

      clearInterval(interval);
    }
  }
};

linksArray.forEach((link) => executeRequest(link));
